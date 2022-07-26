const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{
  console.log(`data recibida `);
})
customEmitter.on('response', ()=>{
  console.log(`data recibida OTRA Y OTRA VEZZZZ `);
})

customEmitter.emit('response')