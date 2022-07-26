const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)
const start = async() => {
  try {
    const first = await readFile('./content/primero.txt', 'utf8') // en la function que es async el await es como el then - 
    const second = await readFile('./content/segundo.txt', 'utf8') // en la function que es async el await es como el then - 
    await writeFile('./content/resultado-mindgranade.txt', `genialllllllwwwwww : ${first} ${second}`, {flag:'a'})
    console.log(first, second);     
  } catch (error) {
    console.log(error);
  }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
        
//         readFile(path, 'utf-8', (err, data) => {
//             if(err) {
//                reject(err)
//             } else {
//                 resolve(data)
//             }
//         })

//     })
// }

// getText('./content/primero.txt')
//     .then((result)=> console.log(result))
//     .catch((err)=> console.log(err))