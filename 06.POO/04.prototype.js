//Heredar prototypes

function Cliente(nombre, saldo) {
	this.nombre = nombre;
	this.saldo = saldo;
}

//prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function () {
	return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo}.`;
}
const cliente1 = new Cliente('Petre', 600);
console.log(cliente1);

//banca para empresa
function Empresa(nombre, saldo, telefono, tipo) {
	Cliente.call(this, nombre, saldo);//hereda estos parametros de la clase Cliente
	this.telefono = telefono;
	this.tipo = tipo;
}
Empresa.prototype = Object.create(Cliente.prototype);//forma de heredar prototipo de otra clase

const empresa = new Empresa('Udemy', 100000000, 655666555, 'Educacion');
console.log(empresa.nombreClienteSaldo());

//////////////////////////////////////////

//Object create 
const Clientes = {
	imprimirSaldo: function() {
		return `hola ${this.nombre}, tu saldo es ${this.saldo}`
	},
	retirarSaldo: function(retiro) {
		return this.saldo -= retiro;
	}
}
//crear el objeto
const mary = Object.create(Clientes);
mary.nombre = 'Mary';
mary.saldo = 1000;
mary.retirarSaldo(300);

console.log(mary.imprimirSaldo());

