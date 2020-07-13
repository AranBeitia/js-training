//IF
const edad = 19;

if (edad != 18) {
  console.log("Puedes entrar al sitio");
} else {
  console.log("No puedes entrar al sitio");
}

// Comprobar una variable tiene un valor
let puntos;

if (typeof puntos != "undefined") {
  console.log(`Tienes ${puntos} puntos`);
} else {
  console.log(`No hay puntos`);
}

let efectivo = 500;
let totalCarrito = 800;

if (efectivo > totalCarrito) {
  console.log(`Pago correcto`);
} else {
  console.log(`Fondos insuficientes`);
}

//ELSEIF
let punt = 100;

if (punt < 150) {
  console.log(`Puntos < 150`);
} else if (punt > 200) {
  console.log(`Puntos < 200`);
}

let hora = 22;

if (hora <= 12) {
  console.log(`Buenos días`);
} else if (hora < 20) {
  console.log(`Buenas tardes`);
} else {
  console.log(`Buenas noches`);
}

//operador || operador &&
let horas = -3;

if (horas >= 0 && horas <= 12) {
  console.log(`Buenos días`);
} else if (horas > 12 && horas <= 20) {
  console.log(`Buenas tardes`);
} else if (horas > 20 && hora <= 24) {
  console.log(`Buenas noches`);
} else {
  console.log(`Hora no válida`);
}

let cash = 300,
  credito = 300,
  disponible = cash + credito,
  total = 500;

  if (total < cash || total < credito) {
    console.log (`Puedo pagar`);
  }else if (total < disponible){
    console.log (`Puedo pagar`);
  }else {
    console.log(`No puedo pagar`);
  }

//ternario
const loged = true;

console.log (loged === true ? `Sí se logueó` : `No se logueó`);
