// order: test1, real1, test2, real2
export var knownAnswers = [110, 3877, 20, 982]




export function part1(input = '') {
    var { iter, elfLocs } = makeSolver(input)

    for (var i = 0; i < 10; i++) iter()

    var x0 = elfLocs.reduce((acc, loc) => Math.min(acc, loc.x), Infinity)
    var y0 = elfLocs.reduce((acc, loc) => Math.min(acc, loc.y), Infinity)
    var x1 = elfLocs.reduce((acc, loc) => Math.max(acc, loc.x), -Infinity)
    var y1 = elfLocs.reduce((acc, loc) => Math.max(acc, loc.y), -Infinity)
    var area = (x1 + 1 - x0) * (y1 + 1 - y0)
    return area - elfLocs.length
}


export function part2(input = '') {
    var { iter } = makeSolver(input)

    for (var i = 1; i < 5000; i++) {
        var moveCt = iter()
        if (moveCt === 0) return i
    }
    return '? ' + i
}










function makeStore() {
    var data = {}
    var key = (x, y) => x * 1000 + y
    var get = (x, y) => data[key(x, y)]
    var set = (value, x, y) => data[key(x, y)] = value
    return { get, set }
}


function makeSolver(input = '') {
    var elfLocs = []
    input.trimEnd().split('\n').map((line, y) => {
        line.trim().split('').forEach((char, x) => {
            if (char === '#') elfLocs.push({ x, y })
        })
    })

    // move definitions
    var moves = [
        { dir: [0, -1], checks: [-1, -1, 0, -1, 1, -1] },
        { dir: [0, 1], checks: [-1, 1, 0, 1, 1, 1] },
        { dir: [-1, 0], checks: [-1, -1, -1, 0, -1, 1] },
        { dir: [1, 0], checks: [1, -1, 1, 0, 1, 1] },
    ]

    var chooseMove = (elfStore, x, y) => {
        // neighbor count
        var nearby = 0
        for (var nx = x - 1; nx < x + 2; nx++) {
            for (var ny = y - 1; ny < y + 2; ny++) {
                if (elfStore.get(nx, ny)) nearby++
            }
        }
        if (nearby < 2) return -1
        // move rules..
        var moveIndex = -1
        moves.some((move, ix) => {
            for (var j = 0; j < move.checks.length; j += 2) {
                var mx = x + move.checks[j]
                var my = y + move.checks[j + 1]
                if (elfStore.get(mx, my)) return
            }
            moveIndex = ix
            return true
        })
        return moveIndex
    }


    var elfStore = makeStore()
    var moveTypes = makeStore()
    elfLocs.forEach(({ x, y }) => elfStore.set(1, x, y))

    // core update loop
    var iter = () => {
        var moveCounts = makeStore()

        // choose moves
        elfLocs.forEach(({ x, y }) => {
            var mi = chooseMove(elfStore, x, y)
            moveTypes.set(mi, x, y)
            if (mi < 0) return
            var dir = moves[mi].dir
            var [nx, ny] = [x + dir[0], y + dir[1]]
            var ct = moveCounts.get(nx, ny) || 0
            moveCounts.set(ct + 1, nx, ny)
        })

        // make moves
        var movesMade = 0
        elfLocs.forEach((loc) => {
            var { x, y } = loc
            var mi = moveTypes.get(x, y)
            if (mi < 0) return
            var dir = moves[mi].dir
            var [nx, ny] = [x + dir[0], y + dir[1]]
            var ct = moveCounts.get(nx, ny)
            if (ct > 1) return
            elfStore.set(0, x, y)
            elfStore.set(1, nx, ny)
            loc.x = nx
            loc.y = ny
            movesMade++
        })

        // rotate moves
        moves.push(moves.shift())
        return movesMade
    }
    return { iter, elfLocs }
}






