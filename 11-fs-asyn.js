// esta es la version asincronica

const { readFile, writeFile, } = require('fs')

console.log('start');

readFile('./content/primero.txt', 'utf8' , (err,result)=>{
    if(err){
        console.log(err)
        return 
    }
    const primero = result
    console.log(primero);
    readFile('./content/segundo.txt', 'utf8', (err, result2)=>{
        if(err){
            console.log(err)
            return
        }
        const segundo = result2
         console.log(result2)
        writeFile(
        './content/result2-async.txt', 
        `entendiendo ASYNC con ${primero} y tambien con el ${segundo}`,
        (err, result3) =>{
            if(err){
                console.log(err)
                return
            }
             const tercero = result3
             console.log(tercero) // A EL TAMBIEN le da undefined aca y le chupa un huevo, explicA QUE ES PORQUE ACA NO SE ESTA RETORNANDO NADA
             console.log('TERMINO con el escribir 3er callback');
            }    
        )
    })
})

console.log('termino final, empezando siguiente');

