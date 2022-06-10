// commonJS, every files in NODe is a module (by default)
// modulos - encapsulated code, only share the minimum

const names = require('./4-names')
const sayHi = require('./5-utils')
const dataGenerica = require('./6-alternative-flavor')
require('./7-mindgranade')

sayHi('susan')
sayHi(names.john)
sayHi(names.pete)



