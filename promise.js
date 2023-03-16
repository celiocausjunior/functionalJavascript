

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

