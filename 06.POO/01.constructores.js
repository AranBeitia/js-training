//object literal
const cliente = {
	nombre: 'Juan',
	saldo: 200,
	tipoCliente: function () {
		let tipo;

		if (this.saldo > 1000) {
			tipo = 'Gold';
		} else if (this.saldo > 500) {
			tipo = 'Platinum';
		} else {
			tipo = 'Normal';
		}
		return tipo;
	}
}
console.log(cliente.tipoCliente());
console.log(cliente.saldo);

//metodo alternativo de constructor
function Cliente(nombre, saldo) {
	this.nombre = nombre;
	this.saldo = saldo;
	this.tipoCliente = function () {
		let tipo;

		if (this.saldo > 1000) {
			tipo = 'Gold';
		} else if (this.saldo > 500) {
			tipo = 'Platinum';
		} else {
			tipo = 'Normal';
		}
		return tipo;
	}
}

const persona = new Cliente('Pedro', 20000);
const persona2 = new Cliente('Karen', 6000);

console.log(persona2.tipoCliente());