// Arreglo de Objetos
const autos = [
   {modelo: 'Munstang', motor: 6.0},
   {modelo: 'Camaro', motor: 6.1},
   {modelo: 'Challenger', motor: 6.3}
 ];
console.log(autos);

 for (let i = 0; i< autos.length; i++) {
   //console.log(autos[i].modelo);
   console.log(`${autos[i].modelo} ${autos[i].motor}`);
 }

/*CONST: no podemos reasignar el objeto entero, 
 pero sí modificar los valores individualmente*/

 autos[0].modelo = 'Audi';
 console.log(autos[0]);

// LET: sí podemos reasignar el objeto
 let autos2 = {
   modelo: 'Mercedes',
   motor: 2.3
 }

 autos2 = {
   modelo: 'Mgs',
   motor: 3.3
 }
 console.log(autos2);