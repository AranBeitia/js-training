// En JavaScript existe un objeto llamad Date
const diaHoy = new Date();
console.log(diaHoy);

//Fecha en especifico Mes, Dia, Año
let navidad2019 = new Date('12-25-2019');
console.log(navidad2019);

//obtener mes
let valor;
valor = diaHoy.getMonth();
//obtener día
valor = diaHoy.getDate();
valor = diaHoy.getDay();
//Obtener año
valor = diaHoy.getFullYear();
//obtener minutos
valor = diaHoy.getMinutes();
//obtener hora
valor = diaHoy.getHours();
//milisegundos desde 1970
valor = diaHoy.getTime();
//GET obtiene valor, SET modifica un valor
valor = diaHoy.getFullYear();//año actual
valor = diaHoy.setFullYear(2016);//modifica año
valor = diaHoy.getFullYear();//año modificado o reescrito

console.log(valor);