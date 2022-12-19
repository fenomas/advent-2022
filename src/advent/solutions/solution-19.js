
var indexes = {
    ore: 0,
    clay: 1,
    obsidian: 2,
    geode: 3,
}

function parseInputs(input) {
    var bps = []
    input.trim().split('\n').forEach(line => {
        var tokens = line.trim().split('Each')
        var [, numStr] = /^Blueprint (\d+):/.exec(tokens.shift()) || []
        var costs = Array(4).fill(0).map(n => Array(4).fill(0))
        tokens.forEach(token => {
            var [, rtype, costStrs] = /^(.+) robot costs (.+)\.$/.exec(token.trim()) || []
            var costArr = costs[indexes[rtype]]
            costStrs.split('and').forEach(cost => {
                var [, ct, ctype] = /^(\d+) (.+)$/.exec(cost.trim()) || []
                costArr[indexes[ctype]] = parseInt(ct)
            })
        })
        bps.push({ num: parseInt(numStr), costs })
    })
    return bps
}




export function part1(input = '') {
    var bps = parseInputs(input)

    return bps.reduce((sum, bp) => {
        var val = evaluateBP(bp, 24)
        return sum + bp.num * val
    }, 0)
}



export function part2(input = '') {
    var bps = parseInputs(input)
    bps.length = Math.min(3, bps.length)

    return bps.reduce((prod, bp) => {
        var val = evaluateBP(bp, 32)
        return prod * val
    }, 1)
}










var makeState = (from) => {
    if (from) return {
        have: from.have.slice(),
        robots: from.robots.slice(),
    }
    return { have: Array(4).fill(0), robots: Array(4).fill(0) }
}

var evaluateBP = (bp, tmax = 10) => {
    var best = 0
    var weights = [-3, -1, 5, 1000]

    var statesByDay = Array(tmax + 2).fill(0).map(n => [])
    var initialState = makeState()
    initialState.robots[indexes.ore] = 1
    statesByDay[1].push(initialState)


    for (var t = 1; t <= tmax; t++) {
        var states = statesByDay[t]
        var minLeft = tmax + 1 - t


        // clip search space
        var limit = 1000
        if (states.length > limit) {
            states.forEach(state => {
                state.score = weights.reduce((sum, w, i) => {
                    var ct = state.have[i] + minLeft * state.robots[i]
                    return sum + w * ct
                })
            })
            states.sort((a, b) => b.score - a.score)
            states.length = limit
        }

        states.forEach(state => {
            var g = state.have[indexes.geode]
            g += minLeft * state.robots[indexes.geode]
            if (g > best) best = g
            if (t === tmax) return

            bp.costs.forEach((costArr, makeIx) => {
                // minutes until this recipe could be made
                var wait = costArr.reduce((acc, need, useIx) => {
                    var have = state.have[useIx]
                    if (have >= need) return acc
                    var robs = state.robots[useIx]
                    if (robs === 0) return Infinity
                    var t = Math.ceil((need - have) / robs)
                    return Math.max(acc, t)
                }, 0)
                var tnext = t + wait + 1
                if (tnext > tmax) return

                // spawn a state where we wait and buy this recipe
                var next = makeState(state)
                next.have.forEach((val, i) => {
                    next.have[i] += (wait + 1) * next.robots[i]
                    next.have[i] -= costArr[i]
                    if (next.have[i] < 0) throw '??' + i
                })
                next.robots[makeIx]++

                statesByDay[tnext].push(next)
            })

        })
    }

    return best
}





