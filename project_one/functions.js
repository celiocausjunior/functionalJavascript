const fs = require('fs')
const path = require('path')

function readFile(folderPath) {


    return new Promise((resolve, reject) => {
        try {
            let files = fs.readdirSync(folderPath)
            files = files.map(file => path.join(folderPath, file))
            resolve(files)
        } catch (error) {
            reject(`Algo não funcionou: ${error}`)
        }
    })
}

function readIndividualFile(filePath) {
    return new Promise((resolve, reject) => {
        try {
            const content = fs.readFileSync(filePath, { encoding: 'utf-8' })
            resolve(content.toString())
        } catch (error) {
            reject(error)
        }
    })
}

function readAllFiles(filesPath) {
    return Promise.all(filesPath.map(filePath => readIndividualFile(filePath)))
}

function filterFileExtension(array, extension) {
    return array.filter(el => el.endsWith(extension))
}

function removeEmptyLine(array){
    return array.filter(el => el.trim())
}

function removeCronometer(array, pattern){
    return array.filter(el => !el.includes(pattern))
}

function removeNumbers(array) {
    return array.filter(el => {
        const isNumber = parseInt(el.trim())
        return isNumber !== isNumber
    });
  }

  function removeSymbols(symbols){
    return function(array){
        return array.map(el => {
            let cleanedArray = el
            symbols.forEach(symbol => {
                cleanedArray = cleanedArray.split(symbol).join('')
            })
            return cleanedArray
        })
    }
  }

  function mergeContent(array){
    return array.join('')
}


module.exports = {
    readFile,
    filterFileExtension,
    readIndividualFile,
    readAllFiles,
    removeEmptyLine,
    removeCronometer,
    removeNumbers,
    removeSymbols,
    mergeContent
}