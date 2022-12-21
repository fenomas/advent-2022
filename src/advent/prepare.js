#!/usr/bin/env node

import * as path from 'path'
import * as fs from 'fs'


var onErr = (err) => { if (err) console.warn(err) }
var touchFile = (fname) => {
    if (fs.existsSync(fname)) return
    fs.writeFile(fname, '', onErr)
}
var touchDir = (dirname) => {
    if (fs.existsSync(dirname)) return
    fs.mkdir(dirname, onErr)
}


var days = Array(25).fill(0).map((n, i) => {
    var d = i + 1
    return (d < 10) ? '0' + d : String(d)
})

days.forEach(dstr => {
    var dir = 'day' + dstr
    touchDir(path.resolve(dir))
})
days.forEach(dstr => {
    var dir = 'day' + dstr
    touchFile(path.resolve(dir, `solution-${dstr}.js`))
    touchFile(path.resolve(dir, `input-${dstr}.txt`))
    touchFile(path.resolve(dir, `test-input-${dstr}.txt`))
})


