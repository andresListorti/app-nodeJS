
const { readFileSync, writeFileSync } = require('fs')

const primero = readFileSync('./content/primero.txt', 'utf8')
const segundo = readFileSync('./content/segundo.txt', 'utf8')

console.log(primero, segundo);

writeFileSync(
'./content/terceroConWrite.txt', 
`Buenoooooo ahora siiii creamos uno nuevo y agregamos los datos del anterior con ${primero} y tambien con el ${segundo}`,
{flag: 'a'}
)