const { readFile } = require('fs');



const getText = (path) => {
    return new Promise((resolve, reject)=>{
        
        readFile('./content/primero.txt', 'utf-8', (err, data) => {
            if(err) {
                return
            } else {
                console.log(data)
            }
        })

    })
}


const start = async() => {
  try {
    const first = await getText('./content/primero.txt')
    console.log(first);

  } catch (error) {
    console.log(error);

  }
}

start()


// getText('./content/primero.txt')
//     .then((result)=> console.log(result))
//     .catch((err)=> console.log(err))