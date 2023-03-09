//somar (3)(4)(5)


function somar(n1) {
    return function (n2) {
        return function (n3) {
            return n1 + n2 + n3
        }
    }
}

console.log(somar(1)(2)(3))



//fn -> 3 * 7
//fn -> 3 + 7
//fn -> 3 - 7

//calcular (3)(7)(fn)

function operations(n1) {
    return function (n2) {
        return function (operation) {
            if (operation === 'somar') {
                return n1 + n2
            } else if (operation === 'multiplicar') {
                return n1 * n2
            } else if (operation === 'subtrair') {
                return n1 - n2
            } else {
                return null
            }
        }
    }
}

console.log(operations(3)(7)('somar'))
console.log(operations(3)(7)('multiplicar'))
console.log(operations(3)(7)('subtrair'))