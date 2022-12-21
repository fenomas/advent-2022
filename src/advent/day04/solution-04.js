// order: test1, real1, test2, real2
export var knownAnswers = [2, 580, 4, 895]


export function part1(input = '') {
    var count = 0
    input.split('\n').forEach(line => {
        var [left, right] = line.split(',')
        var [a, b] = left.split('-').map(s => parseInt(s))
        var [c, d] = right.split('-').map(s => parseInt(s))
        if (a < c && d > b) return
        if (c < a && b > d) return
        count++
    })
    return count
}


export function part2(input = '') {
    var count = 0
    input.split('\n').forEach(line => {
        var [left, right] = line.split(',')
        var [a, b] = left.split('-').map(s => parseInt(s))
        var [c, d] = right.split('-').map(s => parseInt(s))
        if (b < c) return
        if (a > d) return
        count++
    })
    return count
}

