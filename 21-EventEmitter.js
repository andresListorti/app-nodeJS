const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
  console.log(`data recibida ${name} y ${id}`);
})
customEmitter.on('response', ()=>{
  console.log(`data recibida OTRA Y OTRA VEZZZZ `);
})

customEmitter.emit('response', 'juan', 34)