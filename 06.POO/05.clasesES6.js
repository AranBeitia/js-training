class Cliente {
	constructor(nombre, apellido, saldo) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.saldo = saldo;
	}

	imprimirSaldo() {
		return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`;
	}

	tipoCliente() {
		let tipo;

		if (this.saldo > 1000) {
			tipo = 'Gold';
		} else if (this.saldo > 500) {
			tipo = 'Silver';
		} else {
			tipo = 'Normal'
		}
		return tipo;
	}

	retirarSaldo(retiro) {
		return this.saldo -= retiro; 
	}

	//metodo estático no necesita instanciarse pero es necesario pasarle el nombre de la clase
	static bienvenida() {
		return `Bienvenido al cajero`;
	}
}

const maria = new Cliente('Maritriki', 'Perezosa', 10000);
maria.retirarSaldo(3000);

console.log(maria.imprimirSaldo());
console.log(maria.tipoCliente());

console.log(Cliente.bienvenida());