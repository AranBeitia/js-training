const exp1 = new RegExp('/abc/');
const exp2 = /abc/;

console.log(exp1, exp2);

let valor, expReg;

expReg = /[0123456789]/;
valor = 1992;

//una fecha en exp reg 20-10-2018
expReg = / \d\d-\d\d-\d\d\d\d\ /;
valor = ' 20-10-2018 ';

//hora 10:30
expReg = / \d\d:\d\d /;
valor = ' 10:30 ';

expReg = / \d+ /;
valor = 012334567;

//negar la expresion
expReg = / [^0-9] /;
valor = 1992;

//la sintaxis {1, 2}
expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = '10-10-2018';
valor = '1-1-2018';
valor = '1-100-2018';
valor = '10-10-201';


//letras o numeros
expReg = /\w+/;
valor = 'Mensaje de prueba';
valor = 1234;
valor = ' ';

//revisar que sean puros numeros
expReg = /\d+/;
valor = 1234;
valor = 'hola';

expReg = /([0-9])\w+/;
valor = 1234;
valor = 'hola MUndO';

expReg = /([A-Z])\w+/;
valor = 'hola';
valor = 1234;
valor = 'MENSAJE EN MAYUSCULAS';

console.log(expReg.test(valor));

