// esta es la version asincronica

const { readFile, writeFile, read } = require('fs')

readFile('./content/primero.txt', 'utf8' , (err,result)=>{
    if(err){
        console.log(err)
        return 
    }
    const primero = result
    readFile('./content/segundo.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const segundo = result
        writeFile(
        './content/result-async.txt', 
        `AAAAAAAAAAAAsisisi creado ASYNC con ${primero} y tambien con el ${segundo}`,
        (err, result) =>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        }    
        )
    })
})

