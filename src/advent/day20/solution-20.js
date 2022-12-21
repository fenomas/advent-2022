// order: test1, real1, test2, real2
export var knownAnswers = [3, 13522, 1623178306, 17113168880158]



function Node(num, ix) {
    this.ix = ix
    this.num = num
    this.l = null
    this.r = null
}
var makeLinkedList = (nums) => {
    var nodes = nums.map((num, ix) => new Node(num, ix))
    nodes.forEach((node, i) => {
        node.l = nodes[(i - 1 + nums.length) % nums.length]
        node.r = nodes[(i + 1) % nums.length]
    })
    return nodes
}
var removeNode = (node) => {
    node.l.r = node.r
    node.r.l = node.l
}
var insertAfter = (node, target) => {
    node.r = target.r
    node.l = target
    target.r.l = node
    target.r = node
}

var mixNodes = (nodes, numsArr) => {
    var wrapLen = numsArr.length - 1
    numsArr.forEach((num, ix) => {
        num = num % wrapLen
        if (Math.abs(num) > wrapLen / 2) {
            num += (num > 0) ? -wrapLen : wrapLen
        }
        if (num === 0) return
        var ct = Math.abs(num)
        var el = nodes[ix]
        removeNode(el)

        var neighbor = el
        if (num > 0) {
            while (ct-- > 0) neighbor = neighbor.r
        } else {
            while (ct-- > -1) neighbor = neighbor.l
        }
        insertAfter(el, neighbor)
    })
}







export function part1(input = '') {
    var nums = input.trim().split('\n').map(s => parseInt(s))
    var nodes = makeLinkedList(nums)

    mixNodes(nodes, nums)

    var res = 0
    var node = nodes.reduce((res, node) => {
        return (node.num === 0) ? node : res
    }, null)
    for (var i = 1; i <= 3000; i++) {
        node = node.r
        if (i % 1000 === 0) res += node.num
    }
    return res
}




export function part2(input = '') {
    var key = 811589153
    var nums = input.trim().split('\n').map(s => key * parseInt(s))
    var nodes = makeLinkedList(nums)

    for (var i = 0; i < 10; i++) mixNodes(nodes, nums)

    var res = 0
    var node = nodes.reduce((res, node) => {
        return (node.num === 0) ? node : res
    }, null)
    for (var i = 1; i <= 3000; i++) {
        node = node.r
        if (i % 1000 === 0) res += node.num
    }
    return res
}






