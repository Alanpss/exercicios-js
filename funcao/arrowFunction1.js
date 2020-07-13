let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a// return implícito

console.log(dobro(Math.PI))

let ola = function (){
  return 'Olá'
}

ola = () => 'Olá' //Mais de um parametro
ola = _ => 'Olá' //Parametro unico
console.log(ola())