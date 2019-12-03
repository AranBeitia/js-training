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

const cliente1 = new Cliente('Peter', 1000);
const cliente2 = new Cliente('Kren', 600);

console.log(cliente1.tipoCliente());
console.log(cliente2);