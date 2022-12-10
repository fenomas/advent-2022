

export function part1(input = '') {

    var sumStrengths = 0
    var checks = { 20: true, 60: true, 100: true, 140: true, 180: true, 220: true }
    var update = (cycle, reg) => {
        if (cycle in checks) sumStrengths += reg * cycle
    }

    var cycle = 1
    var regx = 1
    input.split('\n').forEach(line => {
        var [cmd, arg] = line.trim().split(/\s+/)
        var time = (cmd === 'addx') ? 2 : 1
        while (time-- > 0) {
            update(cycle, regx)
            cycle++
        }
        if (cmd === 'addx') regx += parseInt(arg)
    })

    return sumStrengths
}





export function part2(input = '') {

    var output = ''
    var update = (cycle, reg) => {
        var col = (cycle - 1) % 40
        if (col === 0 && cycle > 1) output += '\n'
        var dx = Math.abs(col - reg)
        output += (dx < 2) ? '#' : '.'
    }

    var cycle = 1
    var regx = 1
    input.split('\n').forEach(line => {
        var [cmd, arg] = line.trim().split(/\s+/)
        var time = (cmd === 'addx') ? 2 : 1
        while (time-- > 0) {
            update(cycle, regx)
            cycle++
        }
        if (cmd === 'addx') regx += parseInt(arg)
    })

    return output
}
