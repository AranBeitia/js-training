import { nombreCliente, ahorro, mostrarInformacion, Cliente } from './cliente.js';
// import * as clientes from './cliente.js';
import { nombreEmpresa, ahorro as loQueQuiera, categoria, mostrarInformacion as informeEmpresa } from './empresa.js';

// console.log(nombreCliente)
// console.log(ahorro)

//cuando importamos con asterisco
// const info = clientes.mostrarInformacion(clientes.nombreCliente, clientes.ahorro) //funcion local a este archivo
// console.log(info)

//info cliente
const info = mostrarInformacion(nombreCliente, ahorro) //funcion local a este archivo
console.log(info)

//info empresa
const infoEmpresa = informeEmpresa(nombreCliente, loQueQuiera, categoria) //funcion local a este archivo
console.log(infoEmpresa)

//utilizar la clase
// let cliente = new clientes.Cliente(clientes.nombreCliente, clientes.ahorro);
// console.log(cliente.mostrarInformacion());

console.log(nombreEmpresa);
console.log(loQueQuiera);
console.log(categoria);