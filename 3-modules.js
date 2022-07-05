// commonJS, every files in NODe is a module (by default)
// modulos - encapsulated code, only share the minimum
// cuando importas un modulo, de hecho lo estas invocando... se ejecuta la funcion que este con orden de ejecucion, ej mind granade

const names = require('./4-names')
const sayHi = require('./5-utils')
const dataGenerica = require('./6-alternative-flavor')
require('./7-mindgranade')

sayHi('susan')
sayHi(names.john)
sayHi(names.pete)
// console.log(dataGenerica)
// console.log(module);



