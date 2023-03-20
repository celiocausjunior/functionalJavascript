/* const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(caminho) {
    return new Promise(resolve =>{
       fs.readFile(caminho, function (_, conteudo){
        resolve(conteudo.toLocaleString())
        })
    })
    
}

exibirConteudo(caminho).then(console.log) */

/* console.log('Inicio...')
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
console.log('Fim...')
 */


