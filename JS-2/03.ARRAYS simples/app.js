// /* Arrays */

let numeros = [1, 8, 4, 109, 34, 56]
console.log(numeros);

let arrayMezclado = [99, 'Iron Man', 4.77, true, false]
console.log(arrayMezclado);

let miArray = []
console.log(miArray);

miArray.push('Deadpool')
console.log(miArray);

miArray.push(55)
console.log(miArray);

miArray.push('Rondador Nocturno')
console.log(miArray)

miArray.push(106, true)
console.log(miArray)

console.log('Mi array tiene un tamaño de ' + miArray.length + ' elementos');
console.log('El tercer elemento es ' + miArray[2]);

//Eliminar el ultimo elemento del array
miArray.pop()
console.log(miArray);

//Eliminar el primer elemento del array
miArray.shift()
console.log(miArray);

//Encontrar un elemento en el array (buscar su index)
console.log(miArray.indexOf('Rondador Nocturno'));

let indexArray = miArray.indexOf('Rondador Nocturno')
console.log(miArray[indexArray]);

//Clonar array

let pepe = miArray //esto no valdría
let copiaArray = miArray.slice()

console.log(copiaArray);
console.log(miArray);

//de esta manera tenemos siempre una copia del original
copiaArray.push('ciclope')
console.log(copiaArray);
console.log(miArray);



// miArray.splice(2, 1)
// console.log(miArray);