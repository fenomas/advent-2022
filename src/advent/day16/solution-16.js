// order: test1, real1, test2, real2
export var knownAnswers = [1651, 1737, 1707, 2216]



function parseInput(input) {
    var rates = {}
    var exits = {}
    var distances = {}
    input.trim().split('\n').forEach(line => {
        var res = /Valve (.+) has flow rate=(.+); tunnels? leads? to valves? (.+)/.exec(line.trim())
        if (!res) throw `?? ${line}`
        var [, loc, rateStr, list] = res
        rates[loc] = parseInt(rateStr)
        exits[loc] = list.split(',').map(s => s.trim())
        distances[loc] = {}
    })

    var spider = (start, loc, dist) => {
        var curr = distances[start][loc] || 999
        if (curr <= dist) return
        distances[start][loc] = dist
        exits[loc].forEach(next => spider(start, next, dist + 1))
    }
    Object.keys(rates).forEach(loc => spider(loc, loc, 0))
    return { rates, distances }
}





export function part1(input = '') {
    var { rates, distances } = parseInput(input)
    var nonzero = Object.keys(rates).filter(loc => rates[loc] > 0)

    var statesByT = Array(30).fill(0).map(n => [])
    var addState = (t, tot, loc, done) => {
        statesByT[t].push({ t, tot, loc, done })
    }

    var best = 0
    addState(0, 0, 'AA', '')

    statesByT.forEach(states => {
        if (states.length > 500) {
            states.sort((a, b) => b.tot - a.tot)
            states.length = 500
        }
        while (states.length > 0) {
            var { t, tot, loc, done } = states.pop()
            nonzero.forEach(next => {
                if (done.includes(next)) return
                var tnext = t + distances[loc][next] + 1
                if (tnext >= 30) return
                var val = rates[next] * (30 - tnext)
                var newTot = tot + val
                if (newTot > best) best = newTot
                addState(tnext, newTot, next, done + ',' + next)
            })
        }
    })

    return best
}




export function part2(input = '') {
    var { rates, distances } = parseInput(input)
    var nonzero = Object.keys(rates).filter(loc => rates[loc] > 0)

    var statesByT = Array(30).fill(0).map(n => [])
    var addState = (t1, t2, tot, loc1, loc2, done) => {
        var t = Math.min(t1, t2)
        statesByT[t].push({ t1, t2, tot, loc1, loc2, done })
    }

    var best = 0
    addState(4, 4, 0, 'AA', 'AA', '')

    statesByT.forEach(states => {
        if (states.length > 1000) {
            states.sort((a, b) => b.tot - a.tot)
            states.length = 1000
        }
        while (states.length > 0) {
            var { t1, t2, tot, loc1, loc2, done } = states.pop()
            var [ta, tb] = (t1 < t2) ? [t1, t2] : [t2, t1]
            var [loca, locb] = (t1 < t2) ? [loc1, loc2] : [loc2, loc1]

            nonzero.forEach(next => {
                if (done.includes(next)) return
                var tnext = ta + distances[loca][next] + 1
                if (tnext >= 30) return
                var val = rates[next] * (30 - tnext)
                var newTot = tot + val
                var newDone = done + ',' + next
                if (newTot > best) best = newTot
                addState(tb, tnext, newTot, locb, next, newDone)
            })
        }
    })

    return best
}





