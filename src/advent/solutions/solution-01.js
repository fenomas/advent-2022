


export function part1(input = '') {
    return getTotals(input)
        .reduce((acc, val) => Math.max(acc, val), 0)
}

export function part2(input = '') {
    var totals = getTotals(input).sort((a, b) => b - a)
    var ret = 0
    for (var i = 0; i < Math.min(3, totals.length); i++) ret += totals[i]
    return ret
}



function getTotals(str) {
    var totals = [0]
    str.split('\n').forEach(str => {
        if (str) {
            totals[totals.length - 1] += parseInt(str)
        } else {
            totals.push(0)
        }
    })
    return totals
}
