// EVENT LISTENER click buscador

document
	.querySelector("#submit-buscador")
	.addEventListener("click", function(event) {
		//previene la accion por default (form method="#") por ej
		event.preventDefault();
		//alert("Buscando cursos");
	});

//otra forma con funcion declarada
document
	.querySelector("#submit-buscador")
	.addEventListener("click", ejecutarBoton);

function ejecutarBoton(e) {
	e.preventDefault();
	let elemento;
	elemento = e;
	elemento = e.target;
	elemento = e.target.className;

	console.log(elemento);
}

document.querySelector('#encabezado').addEventListener('click', function(e){
	e.target.innerText = 'Kitty satanasa';
	e.target.innerText = 2 + 2;
});


//variables
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

//click
/*boton.addEventListener('click', obtenerEvento);*/

//doble click
/*boton.addEventListener('dblclick', obtenerEvento);*/

//mouse enter
/*boton.addEventListener('mouseenter', obtenerEvento);*/

//mouse leave
/*boton.addEventListener('mouseleave', obtenerEvento);*/

//mouse over
/*boton.addEventListener('mouseover', obtenerEvento);*/

//mouse out
/*boton.addEventListener('mouseout', obtenerEvento);*/

//mouse down
/*boton.addEventListener('mousedown', obtenerEvento);*/

//mouse up
/*boton.addEventListener('mouseup', obtenerEvento);*/

//mouse move
boton.addEventListener('mousemove', obtenerEvento);

function obtenerEvento (e) {
	console.log(`EVENTO: ${e.type}`);
}
