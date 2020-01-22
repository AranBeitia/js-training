// Variables
const presupuestoUsuario = prompt('Cual es tu presupuesto Semanal?');
let cantidadPresupuesto;
console.log(presupuestoUsuario);


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

//Event listeners
document.addEventListener('DOMContentLoaded', function(){
	if(presupuestoUsuario === null || presupuestoUsuario === '') {
		window.location.reload();
	} else {
		//Instanciar un presupuesto
		cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
		console.log(cantidadPresupuesto);
	}
});