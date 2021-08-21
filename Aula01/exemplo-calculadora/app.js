const calculadora = require('./calculadora')

console.log(calculadora.nome)
console.log('Soma = '+calculadora.somar(3, 2))
console.log('Subtração = '+ calculadora.subtrair(10, 3))
console.log('Multiplicação = ' + calculadora.multiplicar(6, 4))
console.log('Divisão = ' + calculadora.dividir(25, 5))