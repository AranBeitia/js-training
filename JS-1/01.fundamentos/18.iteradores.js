// Iteradores
const ciudades = [`Londres`, `Paris`, `Berlin`, `Mardid`];
const ordenes = new Set([123, 131, 102]);
const datos = new Map();
datos.set(`nombre`, `Juan`);
datos.set(`profesion`, `desarrollo web`);

console.log(ciudades);
console.log(ordenes);
console.log(datos);

// ENTRIES iteradores

//Entries() a las ciudades
for (let entrada of ciudades.entries()) {
	console.log(entrada);
}
//Entries() para las ordenes
for (let entradas of ordenes.entries()) {
	console.log(entradas);
}
//Entries() para el map
for (let entrada of datos.entries()) {
	console.log(entrada);
}
// VALUES iteradores

// values() a las ciudades. 
//Si ponemos .values() devuelve error, 
//así que sin nada será el por defecto que es values
for (let entrada of ciudades) {
	console.log(entrada);
}
// values() para el map
for (let entrada of datos.values()) {
	console.log(entrada);
}
// KEYS iterador

// keys() a ciudades
for (let entrada of ciudades.keys()) {
	console.log(entrada);
}
// keys() a ordenes
for (let entrada of ordenes.keys()) {
	console.log(entrada);
}
// keys() a map
for (let entrada of datos.keys()) {
	console.log(entrada);
}
//DEFAULT iterador

for (let entrada of ciudades) {
	console.log(entrada);
}
for (let entrada of ordenes) {
	console.log(entrada);
}
for (let entrada of datos) {
	console.log(entrada);
}

const mensaje = `Aprendiendo JS`;
for (let i = 0; i < mensaje.length; i++) {
	console.log(mensaje[i]);
}
//forma nueva
for (let letra of mensaje){
	console.log(letra);
}

const enlaces = document.getElementsByTagName(`a`);
for (let enlace of enlaces){
	console.log(enlace.href);
}
