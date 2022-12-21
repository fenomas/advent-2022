// order: test1, real1, test2, real2
export var knownAnswers = [95437, 1325919, 24933642, 2050735]



export function part1(input = '') {
    var root = buildDirStructure(input)
    var dirList = calcSizesAndFlatten(root)
    var sizeSum = 0
    dirList.forEach(dir => {
        if (dir.size < 100000) sizeSum += dir.size
    })
    return sizeSum
}


export function part2(input = '') {
    var root = buildDirStructure(input)
    var dirList = calcSizesAndFlatten(root)
    var avail = 70000000 - root.size
    var needed = 30000000 - avail
    var best = Infinity
    dirList.forEach(dir => {
        if (dir.size > needed && dir.size < best) best = dir.size
    })
    return best
}




/**
 * 
 * 
 * 
 *      structs
 * 
 * 
 * 
 */

function Dir(parent) {
    this.parent = parent
    this.children = {}
    this.size = 0
}

function File(name = 'a', size = '1') {
    this.name = name
    this.size = parseInt(size)
}

function buildDirStructure(input) {
    var root = new Dir(null)
    var curr = root
    input.split('\n').forEach(str => {
        str = str.trim()
        if (/^\$ cd /.test(str)) {
            var arg = str.substring(5)
            if (arg === '/') {
                curr = root
            } else if (arg === '..') {
                curr = curr.parent
            } else {
                curr = curr.children[arg]
            }
        } else if (/^\$ ls/.test(str)) {
            // nothing to do
        } else if (/^dir /.test(str)) {
            var dirname = str.substring(4)
            curr.children[dirname] = curr.children[dirname] || new Dir(curr)
        } else if (/^\d+ \S+$/.test(str)) {
            var [size, fname] = str.split(' ')
            curr.children[fname] = curr.children[fname] || new File(fname, size)
        } else {
            console.log('err', str)
        }
        if (!curr) {
            console.log('err', curr, root)
            return ''
        }
    })
    return root
}


function calcSizesAndFlatten(dir, flattened = []) {
    flattened.push(dir)
    var size = 0
    for (var key in dir.children) {
        var child = dir.children[key]
        if (child instanceof Dir) calcSizesAndFlatten(child, flattened)
        size += child.size
    }
    dir.size = size
    return flattened
}


