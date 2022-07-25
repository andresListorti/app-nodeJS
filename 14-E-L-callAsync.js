const { readFile } = require('fs')

console.log('empezando la primera tarea');

// controlar path

readFile('./content/primero.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log('completada primera tarea');
})

console.log('empezando la siguiente');