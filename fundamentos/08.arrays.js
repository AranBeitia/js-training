// Crear un arreglo []

const numeros = [10, 20, 30, 40, 50];

console.log(numeros);

//Arreglo mezclado
const mezclado = ['Hola', 20, true, null, false, undefined];
console.log(mezclado);

// Arreglo de Strings (metodo alternativo)
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.log(meses.length);

console.log(Array.isArray(meses));

console.log(meses[1]);

meses[5] = 'Junio';

console.log(meses);

//Agregar al final del arreglo
meses.push('Julio');
console.log(meses);

//Encontrar un elemento en el arreglo
console.log(meses.indexOf('Abril'));

//Eliminar ultimo elemento de un arraglo
meses.pop();
console.log(meses);
//Eliminar primer elemento de un arraglo
meses.shift();
console.log(meses);
//Agregar al inicio del arreglo
meses.unshift('Mes 0');
console.log(meses);

//Eliminar primer elemento de un arraglo
meses.splice(2, 1);//posicion y cantidad de elementos a quitar
console.log(meses);

//revertir
meses.reverse();
console.log(meses);

let arreglo1 = [1,2,3],
arreglo2 = [9,8,7];

console.log(arreglo1.concat(arreglo2));

//ordenar un arreglo
const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja'];
frutas.sort();
console.log(frutas);

//ordenar numeros
arreglo1 = [1,3,99,8,21,56,100,10];//ordena raro
arreglo1.sort();
arreglo1.sort(function(x, y){
   return x - y;
 })
console.log(arreglo1);

const numero = [1, 2, 3];

/*CONST: no podemos reasignar el array entero, 
pero sí modificar los valores individualmente*/
numero[0] = 4;
numero.push(5);

//numero = ['Enero', 'Febrero']; // no podemos hacer esto
console.log(numero);