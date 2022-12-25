// order: test1, real1, test2, real2
export var knownAnswers = [152, 81075092088442, 301, 3349136384441]



function parseInputs(input) {
    var known = {}
    var todo = []
    input.trim().split('\n').map(line => {
        var [, mon, val] = /^(.+): (.+)$/.exec(line)
        if (/^\d/.test(val)) {
            known[mon] = parseInt(val)
        } else {
            var [a, op, b] = val.trim().split(/\s+/)
            var fn = a => { throw a; return a }
            if (op === '+') fn = (a, b) => a + b
            if (op === '-') fn = (a, b) => a - b
            if (op === '*') fn = (a, b) => a * b
            if (op === '/') fn = (a, b) => a / b
            todo.push({ mon, a, b, fn })
        }
    })
    return { known, todo }
}


function solveMonkeys(known, todo) {
    while (todo.length > 0) {
        var before = todo.length
        todo = todo.filter(obj => {
            var { mon, a, b, fn } = obj
            if (!(a in known)) return true
            if (!(b in known)) return true
            known[mon] = fn(known[a], known[b])
        })
        if (todo.length === before) break
    }
}



export function part1(input = '') {
    var { known, todo } = parseInputs(input)
    solveMonkeys(known, todo)
    return known.root
}




export function part2(input = '') {
    var { known, todo } = parseInputs(input)
    todo.forEach(obj => {
        if (obj.mon === 'root') obj.fn = (a, b) => a - b
    })

    // return value seems to decrease monotonically towards answer...
    var findError = (humn) => {
        var kn = Object.assign({}, known)
        kn['humn'] = humn
        solveMonkeys(kn, todo.slice())
        return kn['root']
    }

    var lo = 1
    var err = findError(lo)
    var hiTest = (err < 0) ?
        err => (err > 0) :
        err => (err < 0)

    var hi = 10
    for (var i = 0; i < 100; i++) {
        var e2 = findError(hi)
        if (hiTest(e2)) break
        lo *= 10
        hi *= 10
    }

    for (var j = 0; j < 100; j++) {
        var mid = Math.floor((lo + hi) / 2)
        var e = findError(mid)
        if (e === 0) return mid
        if (hiTest(e)) {
            hi = mid
        } else {
            lo = mid
        }
    }

    return ['??', lo, hi].join(', ')
}



