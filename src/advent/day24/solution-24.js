// order: test1, real1, test2, real2
export var knownAnswers = [18, 277, 54, 877]

function makeStore() {
    var data = {}
    var key = (x, y = 0, z = 0) => x + 1000 * y + 1000000 * z
    var get = (x, y, z) => data[key(x, y, z)]
    var set = (value, x, y, z) => data[key(x, y, z)] = value
    return { get, set }
}



export function part1(input = '') {
    var { start, end, search } = makeSolver(input)
    return search(0, start.x, start.y, end.x, end.y)
}

export function part2(input = '') {
    var { start, end, search } = makeSolver(input)
    var t1 = search(0, start.x, start.y, end.x, end.y)
    var t2 = search(t1, end.x, end.y, start.x, start.y)
    var t3 = search(t2, start.x, start.y, end.x, end.y)
    return t3
}





function makeSolver(input = '') {
    var inputLines = input.trim().split('\n').map(s => s.trim())
    var ysize = inputLines.length
    var xsize = inputLines[0].length
    var start = { x: inputLines[0].indexOf('.'), y: 0 }
    var end = { x: inputLines[ysize - 1].indexOf('.'), y: ysize - 1 }

    // precalc blizzard locations
    var blizzHorz = makeStore()
    var blizzVert = makeStore()
    var bounds = makeStore()
    inputLines.forEach((line, y) => {
        var chars = '<>^v'
        line.split('').forEach((char, x) => {
            if (char !== '#') bounds.set(1, x, y)
            if (chars.includes(char)) {
                var dx = [-1, 1, 0, 0][chars.indexOf(char)]
                var dy = [0, 0, -1, 1][chars.indexOf(char)]
                if (dx !== 0) {
                    var xinner = xsize - 2
                    for (var tx = 0; tx < xinner; tx++) {
                        var bx = x + tx * dx
                        bx = 1 + (bx - 1 + xinner) % (xinner)
                        blizzHorz.set(1, bx, y, tx)
                    }
                } else {
                    var yinner = ysize - 2
                    for (var ty = 0; ty < yinner; ty++) {
                        var by = y + ty * dy
                        by = 1 + (by - 1 + yinner) % (yinner)
                        blizzVert.set(1, x, by, ty)
                    }
                }
            }
        })
    })

    // helper
    var popAt = (arr, ix) => {
        if (ix === arr.length - 1) return arr.pop()
        var el = arr[ix]
        arr[ix] = arr.pop()
        return el
    }

    // search
    var search = (t0, x0, y0, x1, y1) => {
        var seen = makeStore()
        var bestTime = Infinity
        var states = []
        var addState = (x, y, t) => {
            seen.set(1, x, y, t)
            var h = t + Math.abs(x1 - x) + Math.abs(y1 - y)
            if (h > bestTime) return
            states.push({ x, y, t, h })
        }
        addState(x0, y0, t0)


        var check = (x, y, t) => {
            if (seen.get(x, y, t)) return
            if (!bounds.get(x, y)) return
            if (x === x1 && y === y1) {
                bestTime = Math.min(bestTime, t)
                return
            }
            if (blizzHorz.get(x, y, t % (xsize - 2))) return
            if (blizzVert.get(x, y, t % (ysize - 2))) return
            addState(x, y, t)
        }

        var ct = 0
        while (states.length > 0) {
            if (ct++ > 100000) break

            var bestIx = 0
            for (var i = 0; i < Math.min(states.length, 50); i++) {
                if (states[i].h >= states[bestIx].h) continue
                bestIx = i
            }
            var { x, y, t } = popAt(states, bestIx)

            check(x + 1, y, t + 1)
            check(x - 1, y, t + 1)
            check(x, y + 1, t + 1)
            check(x, y - 1, t + 1)
            check(x, y, t + 1)

            if (states.length > 1000) {
                states.sort((a, b) => a.h - b.h)
                states.length = 800
            }
        }

        return bestTime
    }

    return { start, end, search }
}




