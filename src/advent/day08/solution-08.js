// order: test1, real1, test2, real2
export var knownAnswers = [21, 1733, 8, 284648]



export function part1(input = '') {
    var trees = []
    input.split('\n').forEach((line, i) => {
        trees[i] = []
        line.split('').forEach(char => {
            var ht = parseInt(char)
            trees[i].push({ ht, viz: false })
        })
    })

    var markTreeArr = ((arr, dir = 1) => {
        var max = -1
        for (var i = 0; i < arr.length; i++) {
            var tree = (dir > 0) ? arr[i] : arr[arr.length - i - 1]
            if (tree.ht > max) {
                tree.viz = true
                max = tree.ht
            }
        }
    })

    trees.forEach(row => markTreeArr(row))
    trees.forEach(row => markTreeArr(row, -1))
    for (var j = 0; j < trees[0].length; j++) {
        var col = trees.map(row => row[j])
        markTreeArr(col)
        markTreeArr(col, -1)
    }

    var numViz = 0
    trees.forEach(row => {
        row.forEach(tree => {
            if (tree.viz) numViz++
        })
    })
    return numViz
}






export function part2(input = '') {
    var trees = []
    input.split('\n').forEach((line, i) => {
        trees[i] = []
        line.split('').forEach(char => {
            var ht = parseInt(char)
            trees[i].push({ ht, score: 1 })
        })
    })

    var bestScore = 0
    var scoreTreeArr = (arr => {
        for (var i = 0; i < arr.length; i++) {
            var tree = arr[i]
            var scorel = 0
            for (var l = i - 1; l >= 0; l--) {
                var ltree = arr[l]
                scorel++
                if (ltree.ht >= tree.ht) break
            }
            var scorer = 0
            for (var r = i + 1; r < arr.length; r++) {
                var rtree = arr[r]
                scorer++
                if (rtree.ht >= tree.ht) break
            }
            tree.score *= scorel
            tree.score *= scorer
            if (tree.score > bestScore) bestScore = tree.score
        }
    })

    trees.forEach(row => scoreTreeArr(row))
    for (var j = 0; j < trees[0].length; j++) {
        var col = trees.map(row => row[j])
        scoreTreeArr(col)
    }

    return bestScore
}


