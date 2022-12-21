// order: test1, real1, test2, real2
export var knownAnswers = [13, 6563, 1, 2653]



export function part1(input = '') {
    var h = [0, 0]
    var t = [0, 0]
    var hash = {}
    var addLoc = (loc) => hash[loc.join(',')] = true
    var moves = {
        'R': [1, 0],
        'L': [-1, 0],
        'U': [0, 1],
        'D': [0, -1],
    }

    addLoc(t)
    input.split('\n').forEach((line, i) => {
        var [dir, cstr] = line.trim().split(/\s+/)
        var move = moves[dir]
        var ct = parseInt(cstr)
        for (var iter = 0; iter < ct; iter++) {
            h[0] += move[0]
            h[1] += move[1]
            updateChain(h, t)
            addLoc(t)
        }
    })
    return Object.keys(hash).length
}




function updateChain(head, tail) {
    var dx = head[0] - tail[0]
    var dy = head[1] - tail[1]
    var dirx = head[0] > tail[0] ? 1 : -1
    var diry = head[1] > tail[1] ? 1 : -1
    if (dx === 0 || dy === 0) {
        if (Math.abs(dx) > 1) tail[0] += dirx
        if (Math.abs(dy) > 1) tail[1] += diry
    } else if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        tail[0] += dirx
        tail[1] += diry
    }
}




export function part2(input = '') {
    var rope = Array.from(Array(10)).map($ => [0, 0])
    var hash = {}
    var addLoc = (loc) => hash[loc.join(',')] = true
    var moves = {
        'R': [1, 0],
        'L': [-1, 0],
        'U': [0, 1],
        'D': [0, -1],
    }

    addLoc(rope[0])
    input.split('\n').forEach((line, i) => {
        var [dir, cstr] = line.trim().split(/\s+/)

        var move = moves[dir]
        var ct = parseInt(cstr)
        for (var iter = 0; iter < ct; iter++) {
            rope[0][0] += move[0]
            rope[0][1] += move[1]

            for (var i = 1; i < rope.length; i++) {
                updateChain(rope[i - 1], rope[i])
            }
            addLoc(rope[rope.length - 1])
        }
    })
    return Object.keys(hash).length
}


