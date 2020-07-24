//factory utilizando objeto
function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  } 
}

console.log(criarProduto('iphone', 3599.99))
console.log(criarProduto('notebook', 6599.80))