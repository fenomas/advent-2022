// order: test1, real1, test2, real2
export var knownAnswers = [24, 638, 93, 31722]



export function part1(input = '') {
    var cave = new Cave(input)
    for (var i = 0; i < 99999; i++) {
        if (cave.sandComesToRestAt(500, 0) > cave.maxY) return i
    }
    throw 'err'
}


export function part2(input = '') {
    var cave = new Cave(input)
    for (var i = 0; i < 99999; i++) {
        if (cave.sandComesToRestAt(500, 0) < 0) return i
    }
    throw 'err'
}



function Cave(input) {
    var dat = []
    var maxY = -99999
    var floor = 99999
    var set = (x, y) => {
        if (!dat[x]) dat[x] = []
        dat[x][y] = true
        maxY = Math.max(maxY, y)
    }
    var get = (x, y) => {
        if (y >= floor) return true
        if (!dat[x]) return false
        return dat[x][y] || false
    }
    var draw = (x1, y1, x2, y2) => {
        var dx = (x1 === x2) ? 0 : (x1 < x2) ? 1 : -1
        var dy = (y1 === y2) ? 0 : (y1 < y2) ? 1 : -1
        var ct = Math.max(Math.abs(x1 - x2), Math.abs(y1 - y2))
        for (var i = 0; i <= ct; i++) {
            set(x1, y1); x1 += dx; y1 += dy

        }
    }
    input.split('\n').forEach(line => {
        var prev
        line.split('->').forEach((el, i) => {
            var coord = el.split(',').map(s => parseInt(s))
            if (prev) draw(...prev, ...coord)
            prev = coord
        })
    })

    this.maxY = maxY
    var floor = maxY + 2

    this.sandComesToRestAt = (x, y) => {
        if (get(x, y)) return y - 1
        for (var i = 0; i < 99999; i++) {
            if (!get(x, y + 1)) { y++; continue }
            if (!get(x - 1, y + 1)) { x--; y++; continue }
            if (!get(x + 1, y + 1)) { x++; y++; continue }
            set(x, y)
            return y
        }
    }
}



