const fullCart = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
]


const isFragil = fullCart.filter(cart => cart.fragil === true)
const totalValue = isFragil.map(item => item.preco * item.qtde)
const averageValue = totalValue.reduce((acc, value) => acc + value)/totalValue.length
console.log(isFragil)
console.log(totalValue)
console.log(averageValue)

 const media = fullCart.filter(cart => cart.fragil === true).map((item)=> item.preco * item.qtde).reduce((acc, value)=> { 
    const newQtdy = acc.qte + 1
    const newTotal = acc.total + value
    return{
        qte: newQtdy,
        total: newTotal, 
        media: newTotal/newQtdy
    }
}, {qte: 0, total: 0, media: 0}) 

console.log(media)