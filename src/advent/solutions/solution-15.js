
var TEST_INPUT = false


export function part1(input = '') {
    var sensors = getSensors(input)
    var tgty = TEST_INPUT ? 10 : 2000000

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
    var range = TEST_INPUT ? 20 : 4000000

    for (var by = 0; by <= range; by++) {
        for (var bx = 0; bx <= range; bx++) {
            var hit = sensors.some(({ sx, sy, dist }) => {
                var range = dist - Math.abs(sy - by)
                if (range < 0) return
                var dx = Math.abs(sx - bx)
                if (dx > range) return
                bx = sx + range
                return true
            })
            if (!hit) continue
            if (bx > range) continue
            return 4000000 * bx + by
        }
    }
    return 'no hits'
}



function getSensors(input) {
    return input.trim().split('\n').map(line => {
        var res = /Sensor at x=(.+), y=(.+): closest beacon is at x=(.+), y=(.+)/.exec(line.trim())
        if (!res) throw '?'
        var [, sx, sy, bx, by] = res.map(s => parseInt(s))
        var dist = Math.abs(bx - sx) + Math.abs(by - sy)
        return { sx, sy, dist }
    })
}

