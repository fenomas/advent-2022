
function parseInputs(input) {
    var dat = {}
    var key = (x, y, z) => x | (y << 8) | (z << 16)
    var get = (x, y, z) => dat[key(x, y, z)] || 0
    var set = (x, y, z, num) => dat[key(x, y, z)] = num

    var coords = input.trim().split('\n').map(line => {
        var [x, y, z] = line.trim().split(',').map(n => parseInt(n))
        return [x, y, z]
    })
    var iter = (cb) => coords.forEach(arr => cb(...arr))
    return { get, set, iter }
}




export function part1(input = '') {
    var { get, set, iter } = parseInputs(input)
    iter((x, y, z) => set(x, y, z, 1))

    var num = 0
    iter((x, y, z) => {
        if (get(x - 1, y, z) === 0) num++
        if (get(x + 1, y, z) === 0) num++
        if (get(x, y - 1, z) === 0) num++
        if (get(x, y + 1, z) === 0) num++
        if (get(x, y, z - 1) === 0) num++
        if (get(x, y, z + 1) === 0) num++
    })
    return num
}



export function part2(input = '') {
    var { get, set, iter } = parseInputs(input)
    iter((x, y, z) => set(x, y, z, 1))

    var min = [Infinity, Infinity, Infinity]
    var max = [-Infinity, -Infinity, -Infinity]
    iter((...arr) => {
        for (var i = 0; i < 3; i++) {
            if (arr[i] < min[i]) min[i] = arr[i]
            if (arr[i] > max[i]) max[i] = arr[i]
        }
    })

    var todo = []
    var check = (...arr) => {
        for (var i = 0; i < 3; i++) {
            if (arr[i] < min[i] - 1) return
            if (arr[i] > max[i] + 1) return
        }
        if (get(...arr) !== 0) return
        todo.push(arr)
    }
    todo.push([min[0] - 1, min[1], min[2]])
    while (todo.length > 0) {
        var [x, y, z] = todo.pop()
        set(x, y, z, 2)
        check(x + 1, y, z)
        check(x - 1, y, z)
        check(x, y + 1, z)
        check(x, y - 1, z)
        check(x, y, z + 1)
        check(x, y, z - 1)
    }


    var num = 0
    iter((x, y, z) => {
        if (get(x - 1, y, z) === 2) num++
        if (get(x + 1, y, z) === 2) num++
        if (get(x, y - 1, z) === 2) num++
        if (get(x, y + 1, z) === 2) num++
        if (get(x, y, z - 1) === 2) num++
        if (get(x, y, z + 1) === 2) num++
    })
    return num
}

