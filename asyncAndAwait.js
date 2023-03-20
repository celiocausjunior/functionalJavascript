/* function awaitFor(time = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando Promise....')
            resolve()
        }, time)
    })
}



async function execute() {
    await awaitFor()
    console.log('1ª execução')

    await awaitFor()
    console.log('2ª execução')

    await awaitFor()
    console.log('3ª execução')

}

execute()
 */


function gerarNumeros(min,max, bannedNumbers ){
    if(min>max){
        [max,min] = [min,max]
    }
    return new Promise((resolve, reject) =>{
        const random = parseInt(Math.random() * (max - min + 1) + min)
        if(bannedNumbers.includes(random)){
            reject('Numero repetido')
        } else {
            resolve(random)
        }
    })
}

async function gerarMegaSena(qty){
    const numbers = []
    for( let _ of Array(qty).fill()){
       numbers.push(await gerarNumeros(1,60, numbers))
    }
    return numbers
}

gerarMegaSena(8)
.then(console.log)
.catch(console.log)