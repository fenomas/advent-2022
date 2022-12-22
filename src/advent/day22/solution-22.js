// order: test1, real1, test2, real2
export var knownAnswers = [6032, 133174, 5031, 15410]





function parseInputs(input) {
    var board = []
    var path = []
    input.trimEnd().split('\n').map(line => {
        line = line.trimEnd()
        if (line === '') return
        if (/^\d/.test(line)) {
            while (line.length > 0) {
                if (/^\d/.test(line)) {
                    var [, ct] = /^(\d+)/.exec(line)
                    path.push(parseInt(ct))
                    line = line.substring(ct.length)
                } else {
                    path.push(line[0])
                    line = line.substring(1)
                }
            }
        } else board.push(line.split(''))
    })
    return { board, path }
}






export function part1(input = '') {
    var { board, path } = parseInputs(input)

    var get = (x, y) => board[y] ? board[y][x] || ' ' : ' '
    var moveAlongDir = (x, y, dir, dist) => {
        x += (dir === 0) ? dist : (dir === 2) ? -dist : 0
        y += (dir === 1) ? dist : (dir === 3) ? -dist : 0
        return [x, y]
    }

    var sx = 0
    var sy = 0
    var dir = 0
    while (get(sx, sy) === ' ') sx++

    var logger = new Logger(board)
    path.forEach(el => {
        if (typeof el !== 'number') {
            dir = (dir + (el === 'R' ? 1 : 3)) % 4
            return
        }
        var steps = el
        for (var i = 0; i < steps; i++) {
            var [nx, ny] = moveAlongDir(sx, sy, dir, 1)
            var nchar = get(nx, ny)
            if (nchar === '#') break
            if (nchar === ' ') {
                [nx, ny] = moveAlongDir(nx, ny, dir, -1)
                while (get(nx, ny) !== ' ') {
                    [nx, ny] = moveAlongDir(nx, ny, dir, -1)
                }
                [nx, ny] = moveAlongDir(nx, ny, dir, 1)
                if (get(nx, ny) === '#') break
            }
            [sx, sy] = [nx, ny]
            logger.addPos(sx, sy, dir)
        }
    })

    // logger.log()
    return 1000 * (sy + 1) + 4 * (sx + 1) + dir
}







export function part2(input = '') {
    var { board, path } = parseInputs(input)

    // set up data and accessors
    var get = (x, y) => board[y] ? board[y][x] || ' ' : ' '
    var moveAlongDir = (x, y, dir, dist) => {
        x += (dir === 0) ? dist : (dir === 2) ? -dist : 0
        y += (dir === 1) ? dist : (dir === 3) ? -dist : 0
        return [x, y]
    }
    var getAlongDir = (x, y, dir, dist) => {
        [x, y] = moveAlongDir(x, y, dir, dist)
        return get(x, y)
    }

    var cubeSize = board.reduce((acc, row) => {
        var len = row.join('').trim().length
        return Math.min(acc, len)
    }, Infinity)




    var startx = 0
    var starty = 0
    while (get(startx, starty) === ' ') startx++


    // structs to remember information about perimeter edges
    var perimLocList = []
    var perimLocLookup = {}
    var cornerTypeList = []

    var addPerimeterLoc = (x, y, edgeDir) => {
        var obj = { x, y, edgeDir, connection: null }
        var key = [x, y, edgeDir].join(',')
        perimLocLookup[key] = obj
        perimLocList.push(obj)
    }
    var getPerimeterInfo = (x, y, edgeDir) => {
        var key = [x, y, edgeDir].join(',')
        if (key in perimLocLookup) return perimLocLookup[key]
        return null
    }


    // traverse perimeter, going clockwise, adding locations
    var addEdge = (x, y, moveDir, edgeDir) => {
        for (var j = 0; j < cubeSize; j++) {
            addPerimeterLoc(x, y, edgeDir);
            [x, y] = moveAlongDir(x, y, moveDir, 1)
        }
    }

    // all layouts must have 14 external edges (I think?)
    var ex = startx
    var ey = starty
    var moveDir = 0
    var edgeDir = 3
    for (var i = 0; i < 14; i++) {
        addEdge(ex, ey, moveDir, edgeDir)
        var nchar = getAlongDir(ex, ey, moveDir, cubeSize)
        if (nchar === ' ') {
            // turn CW
            [ex, ey] = moveAlongDir(ex, ey, moveDir, cubeSize - 1)
            moveDir = (moveDir + 1) % 4
            edgeDir = (edgeDir + 1) % 4
            cornerTypeList.push('o') // convex / outside
        } else {
            [ex, ey] = moveAlongDir(ex, ey, moveDir, cubeSize)
            // turn CCW?
            var ccwDir = (moveDir + 3) % 4
            var ccwChar = getAlongDir(ex, ey, ccwDir, 1)
            if (ccwChar !== ' ') {
                moveDir = (moveDir + 3) % 4
                edgeDir = (edgeDir + 3) % 4;
                [ex, ey] = moveAlongDir(ex, ey, moveDir, 1)
                cornerTypeList.push('i') // concave / inside
            } else {
                cornerTypeList.push('-') // straight
            }
        }
    }


    // consume the corner type list to figure which perimeter cells match up
    var wrapPerimIx = ix => (ix + perimLocList.length) % perimLocList.length
    var wrapCornerIx = ix => (ix + cornerTypeList.length) % cornerTypeList.length

    cornerTypeList.forEach((cornerChar, cix) => {
        if (cornerChar !== 'i') return
        var pix = cubeSize * (cix + 1)
        for (var j = 0; j < 10; j++) {
            for (var k = j * cubeSize; k < (j + 1) * cubeSize; k++) {
                var ax = wrapPerimIx(pix + k)
                var bx = wrapPerimIx(pix - k - 1)
                var a = perimLocList[ax]
                var b = perimLocList[bx]
                a.connection = b
                b.connection = a
            }
            // keep going until the next two corners would both be convex
            var nc1 = cornerTypeList[wrapCornerIx(cix + j + 1)]
            var nc2 = cornerTypeList[wrapCornerIx(cix - j - 1)]
            if (nc1 === 'o' && nc2 === 'o') break
        }
    })



    // finally ready to do stuff
    var sx = startx
    var sy = starty
    var dir = 0
    var logger = new Logger(board)

    path.forEach(el => {
        if (typeof el !== 'number') {
            dir = (dir + (el === 'R' ? 1 : 3)) % 4
            return
        }
        var steps = el
        for (var i = 0; i < steps; i++) {
            logger.addPos(sx, sy, dir)
            var perim = getPerimeterInfo(sx, sy, dir)
            if (perim) {
                if (!perim.connection) throw ['PC', perim.x, perim.y]
                var opPerim = perim.connection
                var pchar = get(opPerim.x, opPerim.y)
                if (pchar === '#') break
                [sx, sy] = [opPerim.x, opPerim.y]
                dir = (opPerim.edgeDir + 2) % 4
            } else {
                var nchar = getAlongDir(sx, sy, dir, 1)
                if (nchar === '#') break
                [sx, sy] = moveAlongDir(sx, sy, dir, 1)
            }
        }
        logger.addPos(sx, sy, 4)
    })


    // logger.log()
    return 1000 * (sy + 1) + 4 * (sx + 1) + dir
}








function Logger(board) {
    var chars = board.map(line => {
        return line.map(char => char)
    })
    this.addPos = (x, y, dir) => {
        if (chars[y]) chars[y][x] = '>v<^@'[dir]
    }
    this.log = () => {
        console.log(chars.reduce((s, row) => {
            return s + row.join('') + '\n'
        }, ''))
        console.log('===========================')
    }
}
