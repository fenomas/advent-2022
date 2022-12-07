
// magical glob imports
var solImports = import.meta.glob('../advent/solutions/*.js', {
    eager: true,
})
var inputImports = import.meta.glob('../advent/inputs/*.txt', {
    eager: true,
    as: 'raw',
})


// return data type
function DayData(day, input, soln) {
    this.day = day || '0'
    this.input = input || ''
    /** @type {(string) => string} */
    this.part1 = soln.part1 || null
    /** @type {(string) => string} */
    this.part2 = soln.part2 || null
}


// API
export function getDataByDay() {
    var inputsByDay = {}
    var solsByDay = {}

    Object.keys(inputImports).forEach((path) => {
        var day = /input-(..)/.exec(path)[1]
        inputsByDay[day] = inputImports[path] || ''
    })
    Object.keys(solImports).forEach((path) => {
        var day = /solution-(..)/.exec(path)[1]
        solsByDay[day] = solImports[path] || null
    })

    var dataByDay = {}
    var days = Object.keys(inputsByDay).sort()
    days.forEach(day => {
        dataByDay[day] = new DayData(day, inputsByDay[day], solsByDay[day])
    })
    return dataByDay
}

