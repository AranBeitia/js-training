// /* NUMEROS Y STRINGS */

var numero = '15'
console.log(typeof numero)

var numString = numero.toString()
console.log(typeof numString)

if (typeof numero === 'number') {
  var numeroString = numero.toString()
  console.log('El numero ' + numeroString + ' es string')
} else {
  console.log('El numero ' + numero + ' YA ES string')
}

var num1 = '20'
var num2 = 10

num1 = parseInt(num1) //otra forma de transformar el tipo
var total = num1 + num2
console.log(total);
