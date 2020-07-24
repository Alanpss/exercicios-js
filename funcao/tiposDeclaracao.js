console.log(soma(3, 4))

// function declaration (pode ser chamada antes de ser declarada)
function soma (x, y) {
  return x + y
}

//function expression (só pode ser chamada depois da declaração)
const sub = function (x, y) {
  return x - y
}
console.log(sub(3, 4))

//named function expression (só pode ser chamada depois da declaração)
const nult = function multi(x, y) {
  return x * y
}
console.log(multi(3, 4))