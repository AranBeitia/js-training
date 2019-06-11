const num1 = "50",
      num2 = 10,
      num3 = 'tres';

console.log(num1 + num2);//5010

//formas de cambiar el tipo de string a number
console.log(Number(num1));
console.log(parseInt(num1));

//extrañeza de JS
console.log(num1 - num2);//lo resta bien

console.log(Number(num3));//nan

let dato;
dato = Number("20");
dato = Number('20.10931');
dato = Number(false);//0 -> false / 1 -> true
dato = Number(null);
dato = Number(undefined);
dato = Number('Hola mundo');
dato = Number([1, 2, 3]);

// parsefloat parseInt
dato = parseFloat('100.2030');
dato = parseInt('100.54852');

console.log(dato);

//to fixed
dato = 23.2541;
console.log(dato.toFixed(3));

