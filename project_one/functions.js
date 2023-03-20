const fs = require('fs')
const path = require('path')

function readFile(folderPath){
    

    return new Promise((resolve, reject) => {
        try{
            let files = fs.readdirSync(folderPath)
           files = files.map(file => path.join(folderPath, file))
           resolve(files)
        } catch(error){
            reject(`Algo não funcionou: ${error}`)
        }
    })
 }


 function filterFileExtension(array, extension ){
    return array.filter(el => el.endsWith(extension))
 }

module.exports = {
    readFile,
    filterFileExtension
}