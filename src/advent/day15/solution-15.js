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
    var isTestInput = sensors.every(s => (s.sx < 1000))
    var range = isTestInput ? 20 : 4000000
    sensors.sort((a, b) => a.dist - b.dist)


    var checkEdge = (x, y, x1, y1) => {
        var dx = (x1 > x) ? 1 : -1
        var dy = (y1 > y) ? 1 : -1

        var clipStart = Math.max(-x, -y, y - range)
        if (clipStart > 0) {
            x += dx * clipStart
            y += dy * clipStart
        }
        var clipEnd = Math.max(x1 - range, y1 - range, -y1)
        if (clipEnd > 0) {
            x1 -= dx * clipEnd
            y1 -= dy * clipEnd
        }
        var iter = x1 - x
        for (var i = 0; i < iter; i++) {
            var hit = sensors.some(({ sx, sy, dist }) => {
                var dx = Math.abs(sx - x)
                var dy = Math.abs(sy - y)
                return (dx + dy <= dist)
            })
            if (!hit) return { x, y }
            x += dx
            y += dy
        }
        return null
    }

    for (var i = 0; i < sensors.length; i++) {
        var { sx, sy, dist } = sensors[i]
        dist++
        var hit = checkEdge(sx - dist, sy, sx, sy - dist)
            || checkEdge(sx - dist, sy, sx, sy + dist)
            || checkEdge(sx, sy - dist, sx + dist, sy)
            || checkEdge(sx, sy + dist, sx + dist, sy)
        if (hit) return 4000000 * hit.x + hit.y
    }

    return 'no hit'
}








export function part3(input = '') {
    var sensors = getSensors(input)
    var isTestInput = sensors.every(s => (s.sx < 1000))
    var range = isTestInput ? 20 : 4000000
    sensors.sort((a, b) => a.sy - b.sy)

    for (var by = 0; by <= range; by++) {
        for (var bx = 0; bx <= range; bx++) {
            var hit = sensors.some(({ sx, sy, dist }) => {
                var xrange = dist - Math.abs(sy - by)
                if (xrange < 0) return
                var dx = Math.abs(sx - bx)
                if (dx > xrange) return
                bx = sx + xrange
                return true
            })
            if (hit) continue
            if (bx > range) continue
            return 4000000 * bx + by
        }
    }
    return 'no hits'
}




