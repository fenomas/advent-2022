// order: test1, real1, test2, real2
export var knownAnswers = [26, 6124805, 56000011, 12555527364986]


function getSensors(input) {
    return input.trim().split('\n').map(line => {
        var res = /Sensor at x=(.+), y=(.+): closest beacon is at x=(.+), y=(.+)/.exec(line.trim())
        if (!res) throw '?'
        var [, sx, sy, bx, by] = res.map(s => parseInt(s))
        var dist = Math.abs(bx - sx) + Math.abs(by - sy)
        return { sx, sy, dist }
    })
}





export function part1(input = '') {
    var sensors = getSensors(input)
    var isTestInput = sensors.every(s => (s.sx < 1000))
    var tgty = isTestInput ? 10 : 2000000

    var minx = Infinity
    var maxx = -Infinity
    sensors.forEach(({ sx, sy, dist }) => {
        var xrange = dist - Math.abs(sy - tgty)
        if (xrange < 0) return
        minx = Math.min(minx, sx - xrange)
        maxx = Math.max(maxx, sx + xrange)
    })

    return maxx - minx
}



export function part2(input = '') {
    var sensors = getSensors(input)
    var sensDist = (a, b) => Math.abs(a.sx - b.sx) + Math.abs(a.sy - b.sy)

    // this is fragile, and excludes some edge cases not in the problem
    // e.g. the answer lying on a boundary, or exactly between 
    // two sensors with the same x/y coord

    // find 4 different beacons mutually just the right distance apart
    var findPair = (ignore) => {
        for (var a of sensors) {
            if (a === ignore) continue
            for (var b of sensors) {
                if (b === ignore || b === a) continue
                if (sensDist(a, b) - a.dist - b.dist !== 2) continue
                return [a, b]
            }
        }
        return [null, null]
    }
    var [a, b] = findPair(null)
    var [c, d] = findPair(a)
    if (!c) return 'no hits :('

    // use a skewed UV space where manhattan distances are rectangles
    var xyToUV = (x, y) => {
        var v = y - x
        var u = x + y
        return { u, v }
    }
    var uvToXY = (u, v) => {
        var x = (u - v) / 2
        var y = (u + v) / 2
        return { x, y }
    }

    // find space between the four rectangles in that space
    var res = [a, b, c, d]
    var umin = Infinity
    var vmin = Infinity
    res.forEach(sens => {
        var loc = xyToUV(sens.sx, sens.sy)
        umin = Math.min(umin, loc.u + sens.dist)
        vmin = Math.min(vmin, loc.v + sens.dist)
    })
    var { x, y } = uvToXY(umin + 1, vmin + 1)
    return 4000000 * x + y
}


