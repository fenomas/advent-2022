// order: test1, real1, test2, real2
export var knownAnswers = [15, 13565, 12, 12424]


export function part1(input = '') {
    var scores = {
        'A X': 3 + 1,
        'B X': 0 + 1,
        'C X': 6 + 1,
        'A Y': 6 + 2,
        'B Y': 3 + 2,
        'C Y': 0 + 2,
        'A Z': 0 + 3,
        'B Z': 6 + 3,
        'C Z': 3 + 3,
    }
    return input.split('\n')
        .map(str => scores[str])
        .reduce((acc, val) => acc + val)
}


export function part2(input = '') {
    var scores = {
        'A X': 0 + 3,
        'B X': 0 + 1,
        'C X': 0 + 2,
        'A Y': 3 + 1,
        'B Y': 3 + 2,
        'C Y': 3 + 3,
        'A Z': 6 + 2,
        'B Z': 6 + 3,
        'C Z': 6 + 1,
    }
    return input.split('\n')
        .map(str => scores[str])
        .reduce((acc, val) => acc + val)
}


