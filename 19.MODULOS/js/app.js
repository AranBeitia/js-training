// import { nombreCliente, ahorro, mostrarInformacion, Cliente } from './cliente.js';
import * as clientes from './cliente.js';

// console.log(nombreCliente)
// console.log(ahorro)

const info = clientes.mostrarInformacion(clientes.nombreCliente, clientes.ahorro) //funcion local a este archivo
console.log(info)

//utilizar la clase
let cliente = new clientes.Cliente(clientes.nombreCliente, clientes.ahorro);
console.log(cliente.mostrarInformacion());