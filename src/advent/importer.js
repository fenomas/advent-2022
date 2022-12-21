
// magical glob imports
/** @ts-ignore */
var solImports = import.meta.glob('./**/solution-*.js', {
    eager: true,
})
/** @ts-ignore */
var inputImports = import.meta.glob('./**/input-*.txt', {
    eager: true, as: 'raw',
})
/** @ts-ignore */
var testInputImports = import.meta.glob('./**/test-input-*.txt', {
    eager: true, as: 'raw',
})


// return data type
function DayData(day, input, testInput, soln) {
    this.day = day || '0'
    this.input = input || ''
    this.testInput = testInput || ''
    /** @type {(string) => string} */
    this.part1 = soln.part1 || null
    /** @type {(string) => string} */
    this.part2 = soln.part2 || null
    /** @type {string[]} */
    this.knownAnswers = (soln.knownAnswers || []).map(s => String(s))
}


// API
export function getDataByDay() {
    var testInputsByDay = {}
    var inputsByDay = {}
    var solsByDay = {}

    Object.keys(testInputImports).forEach((path) => {
        var day = /input-(\d+)/.exec(path)[1]
        testInputsByDay[day] = testInputImports[path] || ''
    })
    Object.keys(inputImports).forEach((path) => {
        var day = /input-(\d+)/.exec(path)[1]
        inputsByDay[day] = inputImports[path] || ''
    })
    Object.keys(solImports).forEach((path) => {
        var day = /solution-(\d+)/.exec(path)[1]
        solsByDay[day] = solImports[path] || null
    })

    var dataByDay = {}
    var days = Object.keys(inputsByDay).sort()
    days.forEach(day => {
        var inp = inputsByDay[day]
        var tes = testInputsByDay[day]
        var sol = solsByDay[day]
        dataByDay[day] = new DayData(day, inp, tes, sol)
    })
    return dataByDay
}

