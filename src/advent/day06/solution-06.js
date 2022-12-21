// order: test1, real1, test2, real2
export var knownAnswers = [7, 1093, 19, 3534]




export function part1(input = '') {
    return solve(input, 4)
}

export function part2(input = '') {
    return solve(input, 14)
}



function solve(input, size) {
    var ok = 0
    for (var i = 0; i < input.length; i++) {
        ok++
        if (ok === size) return i + 1
        for (var j = 1; j < (size - ok + 1); j++) {
            if (input[i] === input[i + j]) { ok = 0; break }
        }
    }
    return -1
}



