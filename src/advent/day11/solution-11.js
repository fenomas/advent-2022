// order: test1, real1, test2, real2
export var knownAnswers = [10605, 61503, 2713310158, 14081365540]



function Monkey() {
    this.items = []
    this.op = () => { }
    this.div = 1
    this.next = [0, 0]
    this.count = 0
}

function buildMonkeyList(input) {
    var monkeys = []
    var currMonkey = null
    input.split('\n').forEach(line => {
        var tokens = line.trim().split(/\s+/)
        if (tokens[0] === 'Monkey') {
            currMonkey = new Monkey()
            monkeys.push(currMonkey)
        } else if (tokens[0] === 'Starting') {
            currMonkey.items = tokens.slice(2).map(s => parseInt(s))
        } else if (tokens[0] === 'Operation:') {
            var arg = tokens.pop()
            var op = tokens.pop()
            currMonkey.op = (() => {
                if (arg === 'old') {
                    if (op === '+') return old => old + old
                    if (op === '*') return old => old * old
                    throw 'unhandled'
                }
                var num = parseInt(arg)
                if (!isNaN(num)) {
                    if (op === '+') return old => old + num
                    if (op === '*') return old => old * num
                }
                throw 'unhandled'
            })()
        } else if (tokens[0] === 'Test:') {
            currMonkey.div = parseInt(tokens.pop())
        } else if (tokens[1] === 'true:') {
            currMonkey.next[0] = parseInt(tokens.pop())
        } else if (tokens[1] === 'false:') {
            currMonkey.next[1] = parseInt(tokens.pop())
        }
    })
    return monkeys
}




export function part1(input = '') {
    var monkeys = buildMonkeyList(input)

    for (var i = 0; i < 20; i++) {
        monkeys.forEach(monk => {
            monk.items.forEach(val => {
                monk.count++
                val = monk.op(val)
                val = Math.floor(val / 3)
                var ix = ((val % monk.div) === 0) ? 0 : 1
                var target = monk.next[ix]
                monkeys[target].items.push(val)
            })
            monk.items = []
        })
    }

    monkeys.sort((a, b) => b.count - a.count)
    return monkeys[0].count * monkeys[1].count
}



export function part2(input = '') {
    var monkeys = buildMonkeyList(input)
    var common = monkeys.reduce((acc, m) => acc * m.div, 1)

    for (var i = 0; i < 10000; i++) {
        monkeys.forEach(monk => {
            monk.items.forEach(val => {
                monk.count++
                val = monk.op(val)
                val = val % common
                var ix = ((val % monk.div) === 0) ? 0 : 1
                var target = monk.next[ix]
                monkeys[target].items.push(val)
            })
            monk.items = []
        })
    }

    monkeys.sort((a, b) => b.count - a.count)
    return monkeys[0].count * monkeys[1].count
}
