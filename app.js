const http = require('http')

// const server = http.createServer((req, res) => {
//  res.end('Welcome')
// })

// Using Event Emiter API
const server = http.createServer()
// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {    
    res.end('Hola')
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000....');
})
