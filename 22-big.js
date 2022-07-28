const { writeFileSync, writeFile } = require('fs')
for(let i = 0; i < 1000; i++) {
    writeFileSync('./content/big.txt',`hola iteracion ${i}\n`, {flag: 'a'})
}