const { readFile, writeFile } = require('fs')



console.log('start')

readFile('./notes/hello.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log('hah')
    } else {
        const first = res
        readFile('./notes/result.txt', 'utf-8', (err, res) => {
            if (err) {
                console.log('haha')
            } else {
                const second = res
                writeFile('./notes/result-async.txt', `${first} ${second}`, { flag: 'a' }, (err, res) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('success')
                    }
                })
            }
        })
    }
})
console.log('starting next task')