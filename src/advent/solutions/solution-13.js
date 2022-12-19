
export function part1(input = '') {
    var lists = input.split('\n')
        .map(line => line.trim())
        .filter(line => line)
        .map(parseListHardWay)

    var sum = 0
    lists.forEach((list, i) => {
        if ((i % 2) === 0) return
        var cmp = compare(lists[i - 1], list)
        if (cmp < 0) sum += (i + 1) / 2
    })
    return sum
}

export function part2(input = '') {
    input += '\n  [[2]]  \n  [[6]] '
    var lists = input.split('\n')
        .map(line => line.trim())
        .filter(line => line)
        .map(parseListHardWay)
        .sort(compare)

    var prod = 1
    lists.forEach((el, i) => {
        if (!(el.length === 1)) return
        if (!(el[0].length === 1)) return
        var val = el[0][0]
        if (val === 2 || val === 6) prod *= i + 1
    })
    return prod
}







function compare(a, b) {
    if (typeof a === 'number') {
        if (typeof b === 'number') return a - b
        return compare([a], b)
    } else {
        if (typeof b === 'number') return compare(a, [b])
        var max = Math.min(a.length, b.length)
        for (var i = 0; i < max; i++) {
            var c = compare(a[i], b[i])
            if (c !== 0) return c
        }
        return (a.length - b.length)
    }
}



// function parseListEasyWay(str) {
//     return eval(str)
// }

// so you get your money's worth:
function parseListHardWay(str) {
    if (str[0] !== '[') throw ['err-1', str].join(' ')
    var root = []
    var stack = [root]
    for (var i = 1; i < str.length - 1; i++) {
        var c = str[i]
        if (c === ',') continue
        if (c === ']') { stack.pop(); continue }

        var curr = stack[stack.length - 1]
        if (c === '[') {
            var child = []
            curr.push(child)
            stack.push(child)
            continue
        }
        var sub = /^\d+/.exec(str.substring(i))
        if (!sub) throw ['err-2', i, str].join(' ')
        curr.push(parseInt(sub[0]))
        i += sub.length - 1
    }
    return root
}

