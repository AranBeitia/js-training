//Constructor de tipo string
const nombre1 = 'Pedro'; //string
const nombre2 = new String('Pedro'); //new creará un nuevo objeto, una nueva instancia

console.log(typeof nombre2);

console.log(nombre2);

if (nombre1 === nombre2) {
	console.log('Sí, iguales');
} else {
	console.log('No, diferentes');
}

//numeros 
const numero1 = 20;
const numero2 = new Number(20);

console.log(numero1);
console.log(numero2);

//booleanos
const booleano1 = true;
const booleano2 = new Boolean(true);

console.log(booleano1);
console.log(booleano2);

//funciones
const funcion1 = function(a, b) {
	return a + b;
}

const funcion2 = new Function ('a', 'b', 'return 1 + 2');

console.log(funcion1(2, 3));
console.log(funcion2(1,2));

//objetos
const persona1 = {
	nombre: 'Kitty'
}
const persona2 = new Object({nombre: 'Juan'});

console.log(persona1.nombre);
console.log(persona2);

//array
const array1 = [1, 2, 3, 4];
const array2 = new Array(1, 2, 3);

console.log(array1);
console.log(array2);