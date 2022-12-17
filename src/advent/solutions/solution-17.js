

var rocks = [
    ['1111'],
    ['010', '111', '010'],
    ['111', '100', '100'],
    ['1', '1', '1', '1'],
    ['11', '11'],
].map(arr => arr.map(str => (parseInt(str, 2) << 2)))


function printRows(rows) {
    for (var j = 0; j < rows.length; j++) {
        var i = rows.length - 1 - j
        var txt = rows[i].toString(2).padStart(7, '#')
        txt = txt.split('')
            .map(c => (c === '1') ? '#' : '.')
            .reverse()
            .join('')
        console.log('|' + txt + '|     ' + i)
    }
    console.log('                     ')
}



function RockState(input) {
    var dirs = input.trim().split('').map(c => (c === '<') ? -1 : 1)
    var rows = []
    var dirCt = 0
    var rockCt = 0

    var moveL = n => n >> 1
    var moveR = n => n << 1
    var canPlaceRock = (rows, rock, rockLoc) => {
        return rock.every((num, i) => {
            return ((num & rows[rockLoc + i]) === 0)
        })
    }

    var rightmost = 2 ** 6
    this.rows = rows
    this.debug = () => printRows(rows)
    this.dropRock = () => {
        var rock = rocks[rockCt++ % rocks.length].slice()
        while (rows[rows.length - 1] === 0) rows.pop()
        var rockLoc = rows.length + 3
        while (rows.length < rockLoc + rock.length) rows.push(0)

        var dropping = true
        while (dropping) {
            // horiz move
            var dir = dirs[dirCt++ % dirs.length]
            var canMoveH = rock.every(n => {
                if (dir < 1) return (n & 1) === 0
                return (n & rightmost) === 0
            })
            if (canMoveH) {
                var moved = rock.map((dir < 0) ? moveL : moveR)
                if (canPlaceRock(rows, moved, rockLoc)) rock = moved
            }
            // vert move
            dropping = (rockLoc > 0) && canPlaceRock(rows, rock, rockLoc - 1)
            if (dropping) rockLoc--
        }
        rock.forEach((num, i) => {
            rows[rockLoc + i] |= num
        })
        while (rows[rows.length - 1] === 0) rows.pop()
    }
}





export function part1(input = '') {
    var state = new RockState(input)

    // for (var i = 0; i < 10; i++) {
    //     state.dropRock()
    //     state.debug()
    // }

    for (var i = 0; i < 2022; i++) state.dropRock()
    return state.rows.length
}



export function part2(input = '') {
    var state = new RockState(input)

    var heights = [0]
    var tails = ['']
    var patternStart = 0
    var patternSize = 0

    OUTER: for (var i = 1; i < 3000; i++) {
        state.dropRock()
        var ht = state.rows.length
        var tail = state.rows.slice(-30).join(',')
        heights[i] = (ht)
        tails[i] = (tail)

        for (var j = 50; j < i / 2; j++) {
            if (tails[j] !== tail) continue
            patternStart = j
            patternSize = i - j
            break OUTER
        }
    }
    if (patternStart === 0) throw '?'

    var iter = 1000000000000
    iter -= patternStart
    var ht = heights[patternStart]

    var loops = Math.floor(iter / patternSize)
    var dht = heights[patternStart + patternSize] - heights[patternStart]
    ht += dht * loops
    iter %= patternSize

    ht += heights[patternStart + iter] - heights[patternStart]
    return ht
}




