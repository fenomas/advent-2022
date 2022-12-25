// order: test1, real1, test2, real2
export var knownAnswers = ['2=-1=0', '2-0=11=-0-2-1==1=-22', '★', '★']


export function part2() { return '★' }

export function part1(input = '') {

    var toDecimal = (str = '') => {
        return str.split('').reduce((sum, char, i) => {
            var place = str.length - 1 - i
            var b = '=-012'.indexOf(char) - 2
            return sum + b * (5 ** place)
        }, 0)
    }


    var fromDecimal = (num = 0) => {
        var diff = num
        var ct = 0
        var digits = Math.ceil(Math.log(num) / Math.log(5)) + 1
        var ans = Array(digits).fill(0)
        while (diff !== 0 && ct++ < 1000) {
            for (var i = digits; i >= 0; i--) {
                var curr = ans[i] || 0
                for (var j = -2; j < 3; j++) {
                    var change = (curr - j) * (5 ** i)
                    if (Math.abs(diff + change) < Math.abs(diff)) {
                        diff += change
                        curr = ans[i] = j
                    }
                }
            }
        }
        return ans.reverse().reduce((out, digit) => {
            if (digit === 0 && out === '') return ''
            return out + '=-012'[digit + 2]
        }, '')
    }


    var sum = input.trim().split('\n')
        .map(line => toDecimal(line))
        .reduce((sum, n) => sum + n, 0)

    return fromDecimal(sum)
}



