/***VAR LET CONST***/

//VAR: podemos declarar varias veces la variable
var nombre = 'Juan';
var nombre = 'Aran';

console.log(nombre);

//LET: no podemos declarar varias veces la variable
let nombre1 = 'Juan';
   nombre1 = 'Aran';

console.log(nombre1);

//CONST: las constantes deben llevar un valor siempre que se inicializan
//El valor no va a cambiar
const nombre2 = 'Juan';

console.log(nombre2);

//CADENAS DE TEXTO
let mensaje1, mensaje2;

nombres = 'Juan';
mensaje1 = 'Y entonces dije \'Buen Curso!!\'';

console.log(mensaje1);

let aprender = 'Aprender',
    tecnologia = 'JavaScript';

    console.log(`${aprender} ${tecnologia}`);

    console.log(tecnologia.length);
    console.log(tecnologia.concat(' ', 'Es genial'));
    console.log(tecnologia.toUpperCase());

let mens = "Aprendiendo JavaScript, CSS, HTML para ser frontend";

console.log(mens.indexOf('JavaScript'));
console.log(mens.indexOf('PHP'));//si no existe devuelve -1
console.log(mens.substring(3, 11));//desde el caracter 3 hasra el 11
console.log(mens.split(', '));
console.log(mens.replace('CSS', 'PHP'));
console.log(mens.includes('CSS'));

let tecnolog = "JavaScript" + ' ';

console.log(tecnolog.repeat(10));

