const { log } = require('console');
const { readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        log(err)
        return 
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            log(err)
            return 
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}1, ${second}2`, (err, result)=>{
            if(err){
                return
            }
            log(result)
        })
    })

})