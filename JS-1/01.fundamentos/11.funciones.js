/*** FUNCIONES ***/

//funciones que ya existen en JS
/*
console.log('Hola');
prompt('Cuántos años tienes?');
alert("Error");
*/

// Function declaration
function saludar(nombre) {
  //forma vieja
  if (typeof nombre === "undefined") {
    nombre = "Hello kitty";
  }
  console.log(`Hola ${nombre}`);
}

saludar("Aran"); //mandar llamar la función, si no no se ejecuta
saludar("Alma");
saludar("Pepito");

let saludo = saludar(); //Undefined porque no le paso parametro

//La forma nueva de pasar parámetro pro defecto si devuelve undefined
function saludos(nombre= 'hello kitty satan'){
     return `Hola ${nombre}`;
 }

let hola;
hola = saludos();
console.log(hola);

function sumar(a, b) {
  console.log(a + b);
}

sumar(1, 2);
sumar(30, 15);

// Funciones que retornan un valor
function sumas(a, b) {
  return a + b;
}
let suma;

suma = sumas(5, 5);
suma = sumas(5, 15);
suma = sumas(5, 25);
console.log(suma);

// Function expresion

const total = function(a = 3, b = 10){
   return a + b;
 }
console.log(total(1, 2));
console.log(total(5));//NaN. Si tiene parametros default, coge el que le falta

const obj = function(nombre = 'Visitante', edad = 20, trabajo = 'fronen'){
//aquí el orden no es importante
   return `Hola!, tienes ${edad}, profesion ${trabajo}, y te llamas ${nombre}`
}
//aquí sí es importante el orden
console.log(obj('Chupi'));
