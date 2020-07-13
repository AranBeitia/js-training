class Cliente {
	constructor(nombre, saldo) {
		this.nombre = nombre;
		this.saldo = saldo;
	}

	imprimirSaldo() {
		return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`;
	}

	//metodo estático no necesita instanciarse pero es necesario pasarle el nombre de la clase
	static bienvenida() {
		return `Bienvenido al cajero`;
	}
}

const clientito = new Cliente('Pedrin', 50);
console.log(clientito.imprimirSaldo());

//todos los métodos y atributos de la clase Cliente se heredan a la clase Emprsa
class Empresa extends Cliente {
	constructor(nombre, saldo, telefono, tipo) {
		//va al constructor padre
		super(nombre, saldo);
		//no existen en el constructor padre
		this.telefono = telefono;
		this.tipo = tipo;
	}

	//metodo estático no necesita instanciarse pero es necesario pasarle el nombre de la clase
	static bienvenida() {
		return `Bienvenido al cajero para empresas`;
	}
}

const empresita = new Empresa ('Init', 50000, 655566445, 'IT');
console.log(empresita);
console.log(empresita.imprimirSaldo());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
