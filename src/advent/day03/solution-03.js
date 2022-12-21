// order: test1, real1, test2, real2
export var knownAnswers = [157, 8493, 70, 2552]


export function part1(input = '') {
    var sum = 0
    input.split('\n').forEach(str => {
        str = str.trim()
        var map = {}
        var mid = str.length / 2
        for (var i = 0; i < mid; i++) map[str.charAt(i)] = true
        for (var j = mid; j < str.length; j++) {
            if (map[str.charAt(j)]) {
                sum += charToPri(str, j)
                return
            }
        }
    })
    return sum
}


export function part2(input = '') {
    var map1, map2
    var sum = 0
    input.split('\n').forEach((str, line) => {
        str = str.trim()
        var step = line % 3
        if (step === 0) {
            map1 = {}
            for (var char of str) { map1[char] = true }
        } else if (step === 1) {
            map2 = {}
            for (var char of str) {
                if (map1[char]) map2[char] = true
            }
        } else {
            for (var char of str) {
                if (map2[char]) {
                    sum += charToPri(char, 0)
                    return
                }
            }
        }
    })
    return sum
}



function charToPri(str, ix) {
    var c = str.charCodeAt(ix)
    return (c > 95) ? c - 96 : c - 38
}
