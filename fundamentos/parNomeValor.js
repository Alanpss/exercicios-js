//par nome/valor
const saudacao = 'Opa' //contexto léxico 1 (Local fisico no qual a váriavel foi definida do código)

function exec(){
  const saudacao = 'Fala'//contexto léxico 2
  return saudacao
}

//Objetos são grupos alinhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua Muito Legal',
    numero: 123
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

