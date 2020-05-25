// SYMBOLS

const simbolo = Symbol();
const simbolo2 = Symbol('Descripcion aquí');

console.log(Symbol() === Symbol()); //falso porque cada symbol es único

console.log(simbolo2);

let nombre = Symbol();
let apellido = Symbol();

//Crear una persona
let persona = {}
persona.nombre = 'Juan'; //propiedad del objeto normal, no symbol
persona[nombre] = 'Juan';//propiedad en el symbol
persona[apellido] = 'De la torre';
persona.saldo = 100;
persona.tipoCliente = 'Normal';

console.log(persona);
console.log(persona.nombre, persona[nombre]);

for (let i in persona) {
	console.log(` ${i}: ${persona[i]} `);//los symbol() no se pueden iterar así
}