// Variables
const presupuestoUsuario = prompt('Cual es tu presupuesto Semanal?');
const formulario = document.getElementById('agregar-gasto');

let cantidadPresupuesto;


// Clases
//clase de presupuesto
class Presupuesto {
	constructor(presupuesto) {
		this.presupuesto = Number(presupuesto);
		this.restante = Number(presupuesto);
	}
	//metodo para ir restando del presupuesto actual
	presupuestoRestante(cantidad = 0) {
		return this.restante -= Number(cantidad);
	}
}
//clase de interfaz maneja todo lo relacionado a el HTML
class Interfaz {
	insertarPresupuesto(cantidad) {
		const presupuestoSpan = document.querySelector('span#total');
		const restanteSpan = document.querySelector('span#restante');

		//insertat al HTML
		presupuestoSpan.innerHTML = `${cantidad}`;
		restanteSpan.innerHTML = `${cantidad}`;
	}

	imprimirMensaje(mensaje, tipo) {
		const divMensaje = document.createElement('div');
		divMensaje.classList.add('text-center', 'alert');

		if(tipo === 'error') {
			divMensaje.classList.add('alert-danger');
		} else {
			divMensaje.classList.add('alert-success');
		}
		divMensaje.appendChild(document.createTextNode(mensaje));
		//insertar en el DOM
		document.querySelector('.primario').insertBefore(divMensaje, formulario);
		//quitar el alert después de 3 segundos
		setTimeout(function(){
			document.querySelector('.primario .alert').remove();
			formulario.reset();
		}, 3000);
	}
}

//Event listeners
document.addEventListener('DOMContentLoaded', function(){
	if(presupuestoUsuario === null || presupuestoUsuario === '') {
		window.location.reload();
	} else {
		//Instanciar un presupuesto
		cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
		//instanciar la clase de interfaz
		const ui = new Interfaz();
		ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);

	}
});

formulario.addEventListener('submit', function(e) {
	e.preventDefault();

	//leer del formulario de gastos
	const nombreGasto = document.querySelector('#gasto').value;
	const cantidadGasto = document.querySelector('#cantidad').value;

	//instanciar la interfaz
	const ui = new Interfaz();
	//comprobar que los campos no estén vacíos
	if(nombreGasto === '' || cantidadGasto === '') {
		//2 parametros: mensaje y tipo
		ui.imprimirMensaje('ha habido un error', 'error');
		console.log('ha habido un error');
	} else {
		console.log('El gasto se ha agregado');
	}
});