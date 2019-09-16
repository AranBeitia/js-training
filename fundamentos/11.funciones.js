//(VIDEO 28)
// /*** FUNCIONES ***/

// //funciones que ya existen en JS
// console.log('Hola');
// //prompt('Cuántos años tienes?');
// //alert("Error");

// // Function declaration
// function saludar(nombre){
//   if(typeof nombre === 'undefined'){nombre='Arantxaxu'}
//   console.log(`Hola ${nombre}`);
// }

// saludar('Aran');//mandar llamar la función, si no no se ejecuta
// saludar('Alma');
// saludar('Pepito');

// let saludo = saludar();//Undefined porque no le paso parametro

// // La forma nueva de pasar parámetro pro defecto si devuelve undefined
// function saludar(nombre= 'Arantxu'){
//   return `Hola ${nombre}`;
// }

// console.log(saludo);


// function sumar(a, b){
//   console.log(a + b);
// }

// sumar(1, 2);
// sumar(6, 8);

// // Funciones que retornan un valor

// function sumar(a, b){
//   return a + b;
// }

// let suma;
// suma = sumar (5, 5);
// suma = sumar (5, 10);
// suma = sumar (5, 20);

// console.log(suma);

// // Function expresion

// const total = function(a = 3, b = 10){
//   return a + b;
// }
// console.log(total(1, 2));
// console.log(total(5));//NaN. Si tiene parametros default, coge el que le falta

// const obj = function(nombre = 'Visitante', edad = 20, trabajo = 'fronen'){
//   //aquí el orden no es importante
//   return `Hola!, tienes ${edad}, profesion ${trabajo}, y te llamas ${nombre}`
// }
// //aquí sí es importante el orden
// console.log(obj('Chupi'));

