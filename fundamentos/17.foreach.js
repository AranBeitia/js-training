// const pendientes = ['Tareas', 'Comer', 'Gimnasio', 'Estudiar'];

// // For
// for(let i = 0; i< pendientes.length; i++){
//   console.log(pendientes[i]);
// }
// console.log(pendientes);

// //ForEach
// pendientes.forEach(function(pendiente, index){
//   console.log(`${index}: ${pendiente}`);
// });

// //Map
// const carrito = [
//   {id: 1, nombre: 'Libro'},
//   {id: 2, nombre: 'Camisa'},
//   {id: 3, nombre: 'Guitarra'},
//   {id: 4, nombre: 'Disco'}
// ];

// const nombreProducto = carrito.map(function(carrito){
//   return carrito.nombre;
// });

// console.log(nombreProducto);

// const automovil = {
//   modelo: 'Camaro',
//   motor: 6.1,
//   anio: 1968,
//   marca: 'Chevrolet'
// }

// for (let auto in automovil){
//   console.log(`${auto}: ${automovil[auto]}`);
// }

// console.log(automovil);

// // Iteradores
// const ciudades = ['Londres', 'Paris', 'Berlin', 'Madrid'];
// const ordenes = new Set([123, 231,131,102]);
// const datos = new Map();
// datos.set('nombre', 'Juan');
// datos.set('profesion', 'fronen');

// // ENTRIES a las ciudades
// for (let entrada of ciudades.entries()){
//   console.log(entrada);
// }
// // ENTRIES para las ordenes
// for (let entradas of ordenes.entries()){
//   console.log(entradas);
// }
// // ENTRIES para el map
// for (let entrada of datos.entries()){
//   console.log(entrada);
// }

// // VALUES a las ciudades. 
// //Si ponemos .values() devuelve error, 
// //así que sin nada será el por defecto que es values
// for (let entrada of ciudades){
//   console.log(entrada);
// }

// // VALUES para las ordenes
// for (let entradas of ordenes.values()){
//   console.log(entradas);
// }
// // VALUES para el map
// for (let entrada of datos.values()){
//   console.log(entrada);
// }

// //KEYS iterador
// for (let entrada of ciudades.keys()){
//   console.log(entrada);
// }

// // KEYS para las ordenes
// for (let entradas of ordenes.keys()){
//   console.log(entradas);
// }
// // KEYS para el map
// for (let entrada of datos.keys()){
//   console.log(entrada);
// }

// //DEFAULT iterador
// for (let entrada of ciudades){
//   console.log(entrada);
// }

// for (let entradas of ordenes){
//   console.log(entradas);
// }

// for (let entrada of datos){
//   console.log(entrada);
// }

// //
// const mensaje = 'Aprendiento JavaScript';
// //forma antigüa
// for (let i = 0; i < mensaje.length; i++){
//   console.log(mensaje[i]);
// }
// //forma nueva
// for (let letra of mensaje){
//   console.log(letra);
// }

// const enlaces = document.getElementsByTagName('a');

// for (let enlace of enlaces){
//   console.log(enlace.href);
// }
