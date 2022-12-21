// order: test1, real1, test2, real2
export var knownAnswers = [31, 420, 29, 414]



function parseInputs(input) {
    var start = [-1, -1]
    var end = [-1, -1]
    var dataMap = []
    input.split('\n').forEach((line, j) => {
        var arr = line.trim().split('').map((char, i) => {
            var ht = char.charCodeAt(0) - 96
            var steps = 9999
            if (char === 'S') { start = [i, j]; ht = 1 }
            if (char === 'E') { end = [i, j]; ht = 26 }
            return { ht, steps }
        })
        dataMap.push(arr)
    })
    var getData = (i, j) => {
        if (i < 0 || i >= dataMap[0].length) return null
        if (j < 0 || j >= dataMap.length) return null
        return dataMap[j][i]
    }
    return { start, end, getData }
}




export function part1(input = '') {
    var { start, end, getData } = parseInputs(input)
    getData(...start).steps = 0

    var todo = [start]
    var visit = (i, j, fromHt, steps) => {
        var neighbor = getData(i, j)
        if (neighbor) {
            if (neighbor.ht > fromHt + 1) return
            if (neighbor.steps <= steps) return
            neighbor.steps = steps
            todo.push([i, j])
        }
    }

    while (todo.length > 0) {
        var [i, j] = todo.pop()
        var loc = getData(i, j)
        visit(i - 1, j, loc.ht, loc.steps + 1)
        visit(i + 1, j, loc.ht, loc.steps + 1)
        visit(i, j - 1, loc.ht, loc.steps + 1)
        visit(i, j + 1, loc.ht, loc.steps + 1)
    }
    return getData(end[0], end[1]).steps
}




export function part2(input = '') {
    var { end, getData } = parseInputs(input)
    getData(...end).steps = 0

    var todo = [end]
    var best = 9999
    var visit = (i, j, fromHt, steps) => {
        var neighbor = getData(i, j)
        if (neighbor) {
            if (neighbor.ht < fromHt - 1) return
            if (neighbor.steps <= steps) return
            neighbor.steps = steps
            todo.push([i, j])
            if (neighbor.ht === 1) {
                best = Math.min(best, neighbor.steps)
            }
        }
    }

    while (todo.length > 0) {
        var [i, j] = todo.pop()
        var loc = getData(i, j)
        visit(i - 1, j, loc.ht, loc.steps + 1)
        visit(i + 1, j, loc.ht, loc.steps + 1)
        visit(i, j - 1, loc.ht, loc.steps + 1)
        visit(i, j + 1, loc.ht, loc.steps + 1)
    }
    return best
}






