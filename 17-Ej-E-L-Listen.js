// listen es asinc y el event loop esta esperando que los request lleguen 
// el proceso sigue vivo

const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hola')
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000....');
})