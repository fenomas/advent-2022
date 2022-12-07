#!/usr/bin/env node

import * as path from 'path'
import * as fs from 'fs'


var touchFile = (fname) => {
    if (!fs.existsSync(fname)) fs.writeFile(fname, '', err => {
        if (err) console.warn(err)
    })
}


for (var i = 1; i <= 25; i++) {
    var dstr = ((i < 10) ? '0' : '') + i
    touchFile(path.resolve('solutions', `solution-${dstr}.js`))
    touchFile(path.resolve('inputs', `input-${dstr}.txt`))
}


