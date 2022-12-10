

export function part1(input = '') {

    var lines = input.split('\n')
    var i = 0
    var getCmd = () => {
        if (i >= lines.length) return ['']
        return lines[i++].trim().split(/\s+/)
    }

    var sumStrengths = 0
    var checks = { 20: true, 60: true, 100: true, 140: true, 180: true, 220: true }
    var update = (cycle, regValue) => {
        if (cycle in checks) sumStrengths += regValue * cycle
    }

    var cycle = 1
    var regX = 1
    var busy = 0
    var cmd = ''
    var arg = ''
    var runTimes = { noop: 1, addx: 2 }
    for (var cycle = 1; ; cycle++) {
        if (busy === 0) {
            [cmd, arg] = getCmd()
            if (cmd === '') break
            busy = runTimes[cmd]
        }
        update(cycle, regX)
        busy--
        if (busy === 0 && cmd === 'addx') {
            regX += parseInt(arg)
        }
    }

    return sumStrengths
}





export function part2(input = '') {

    var lines = input.split('\n')
    var i = 0
    var getCmd = () => {
        if (i >= lines.length) return ['']
        return lines[i++].trim().split(/\s+/)
    }

    var output = ''
    var update = (cycle, regValue) => {
        var col = (cycle - 1) % 40
        var dx = Math.abs(col - regValue)
        output += (dx < 2) ? '#' : '.'
        if (col % 40 === 39) output += '\n'
    }

    var cycle = 1
    var regX = 1
    var busy = 0
    var cmd = ''
    var arg = ''
    var runTimes = { noop: 1, addx: 2 }
    for (var cycle = 1; ; cycle++) {
        if (busy === 0) {
            [cmd, arg] = getCmd()
            if (cmd === '') break
            busy = runTimes[cmd]
        }
        update(cycle, regX)
        busy--
        if (busy === 0 && cmd === 'addx') {
            regX += parseInt(arg)
        }
    }

    console.log(output)
    return 'Check the console!'
}
