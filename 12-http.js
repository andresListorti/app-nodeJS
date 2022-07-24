const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('bienvenido a la pagina inicial')
    } 
    if(req.url === '/about'){
        res.end('pequenia historia')
    }     
    // if((req.url === '/error')){
    // res.end(`
    // <h1>Ooooooops</h1>
    // <p>no se encuentra</p>
    // <a href="/">back home</a>
    // `)
    // }
    res.end(`
    <h1>Ooooooops</h1>
    <p>no se encuentra</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)