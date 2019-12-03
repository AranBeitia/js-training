//Prototypes ya no se usan, ahora se emplean clases

function Cliente(nombre, saldo) {
	this.nombre = nombre;
	this.saldo = saldo;
	/* Sacando esta funcionalidad a un prototipo, 
	el código queda más organizado, 
	además de ser parámetros exclusivos de este objeto*/
	/*
		this.tipoCliente = function() {
			let tipo;
			if(this.saldo > 1000) {
				tipo = 'Gold';
			} else if (this.saldo > 500) {
				tipo = 'Platinum';
			} else {
				tipo = 'Normal';
			}
			return tipo;
		}*/
}

//Crear un prototype
Cliente.prototype.tipoCliente = function () {
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
//prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function () {
	return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo}. Tipo cliente ${this.tipoCliente()}`;
}

//retirar saldo
Cliente.prototype.retirarSaldo = function (retiro) {
	return this.saldo -= retiro;
}

const cliente1 = new Cliente('Peter', 1000);
const cliente2 = new Cliente('Kren', 60);
const cliente3 = new Cliente('Kitty', 6000);

cliente2.retirarSaldo(300);

console.log(cliente1.tipoCliente());
console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());