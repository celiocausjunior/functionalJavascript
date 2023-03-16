/* 

const promise = new Promise(function(resolve){
    resolve(3)
}).then((value)=> console.log(value))

const promise2 = new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos'])
})
.then((value)=> value[0])
//.then((value)=> console.log(value))
.then((value)=> value[0])
.then((value)=> console.log(value))


setTimeout(function(){
    console.log('Exceutando callback')

    setTimeout(function(){
        console.log('Exceutando callback 2')

        setTimeout(function(){
            console.log('Executando callback 3')
        },2000)
    },2000)
},2000) */

/* function timeOut(time=2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando')
            resolve()
        }, time)
    })
}

timeOut()
    .then(()=>timeOut())
    .then(timeOut) */

    function gerarNumeros(min,max){
        if(min>max){
            [max,min] = [min,max]
        }
        return new Promise(resolve =>{
            const random = parseInt(Math.random() * (max - min + 1) + min)
            resolve(random)
        })

    }

    gerarNumeros(10,30).then(num => console.log(num))