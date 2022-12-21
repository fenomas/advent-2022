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
            todo.push([mon, ...val.trim().split(/\s+/)])
        }
    })
    return { known, todo }
}

function solveMonkeys(known, todo) {
    var k = known
    var ct = 0
    while (todo.length > 0) {
        if (ct++ > 1e5) throw 'overrun'
        todo = todo.filter(arr => {
            var [mon, a, op, b] = arr
            if (!(a in known)) return true
            if (!(b in known)) return true
            if (op === '+') { k[mon] = k[a] + k[b] }
            else if (op === '-') { k[mon] = k[a] - k[b] }
            else if (op === '*') { k[mon] = k[a] * k[b] }
            else if (op === '/') { k[mon] = k[a] / k[b] }
        })
    }
}



export function part1(input = '') {
    var { known, todo } = parseInputs(input)
    solveMonkeys(known, todo)
    return known.root
}




export function part2(input = '') {
    var { known, todo } = parseInputs(input)
    todo.forEach(arr => {
        if (arr[0] === 'root') arr[2] = '-'
    })

    // return value seems to decrease monotonically towards answer...
    var findError = (humn) => {
        var kn = Object.assign({}, known)
        kn['humn'] = humn
        solveMonkeys(kn, todo.slice())
        return Math.abs(kn['root'])
    }

    var guess = 100
    var err = findError(guess)
    for (var i = 0; i < 100; i++) {
        var e = findError(guess * 2)
        if (e > err) break
        guess *= 2
        err = e
    }

    var range = Math.round(guess / 2)

    for (var j = 0; j < 100; j++) {
        if (err === 0) return guess
        var e1 = findError(guess - range)
        if (e1 < err) {
            guess -= range
            err = e1
        } else {
            var e2 = findError(guess + range)
            if (e2 < err) {
                guess += range
                err = e2
            }
        }
        range = Math.ceil(range / 2)
    }

    return guess + '???'
}



