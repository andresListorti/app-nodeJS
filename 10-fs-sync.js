
const { readFileSync, writeFileSync } = require('fs')


const primero = readFileSync('./content/primero.txt', 'utf8')
const segundo = readFileSync('./content/segundo.txt', 'utf8')

console.log(primero, segundo);

writeFileSync(
'./content/terceroConWrite.txt', // primer parametro dir y sino esta la hace
`aaa            aaagregarrrrcreamos uno nuevo y agregamos los datos del anterior con ${primero} y tambien con el ${segundo}`, //segundo el contenido
{flag: 'a'} // tercer parametro, con esto hacemos que appendice y no reemplace el contenido, sin esto lo reemplaza a todo
)