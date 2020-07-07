let valor //não incializa
console.log(valor) //undefined

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) Cuidado au acessar variáveis com valor null

const produto = {}
console.log(produto.preco) 
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco forma correta de retirar o valor
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)