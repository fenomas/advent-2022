// order: test1, real1, test2, real2
export var knownAnswers = ['CMZ', 'HBTMTBSDC', 'MCD', 'PQTJRSHWS']





export function part1(input = '') {
    var stacks = []
    input.split('\n').forEach(line => {
        if (line.includes('[')) {
            for (var i = 1; i < line.length; i += 4) {
                var sx = (i - 1) / 4
                if (!stacks[sx]) stacks[sx] = []
                var char = line.charAt(i)
                if (char !== ' ') stacks[sx].unshift(char)
            }
        }
        if (line.includes('move')) {
            var res = /move (\d+) from (\d+) to (\d+)/.exec(line)
            if (!res) return
            var ct = parseInt(res[1])
            var from = parseInt(res[2]) - 1
            var to = parseInt(res[3]) - 1
            for (var i = 0; i < ct; i++) {
                var ch = stacks[from].pop()
                stacks[to].push(ch)
            }
        }
    })
    return stacks.map(arr => arr[arr.length - 1]).join('')
}



export function part2(input = '') {
    var stacks = []
    input.split('\n').forEach(line => {
        if (line.includes('[')) {
            for (var i = 1; i < line.length; i += 4) {
                var sx = (i - 1) / 4
                if (!stacks[sx]) stacks[sx] = []
                var char = line.charAt(i)
                if (char !== ' ') stacks[sx].unshift(char)
            }
        }
        if (line.includes('move')) {
            var res = /move (\d+) from (\d+) to (\d+)/.exec(line)
            if (!res) return
            var ct = parseInt(res[1])
            var from = parseInt(res[2]) - 1
            var to = parseInt(res[3]) - 1
            var fromArr = stacks[from]
            var moved = fromArr.splice(fromArr.length - ct)
            stacks[to] = stacks[to].concat(moved)
        }
    })
    return stacks.map(arr => arr[arr.length - 1]).join('')
}


