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


//(video 55)
// document.querySelector('#encabezado').addEventListener('click', function(e){
//   console.log(e.target.innerText = 'Nuevo titulo');
// });

// // Variables
// const encabezado1 = document.querySelector('#encabezado');
// const enlaces1 = document.querySelectorAll('.enlace');
// const boton = document.querySelector('#vaciar-carrito');

// // Click
// //boton.addEventListener('click', obtenerEvento);
// //Doble click
// //boton.addEventListener('dblclick', obtenerEvento);
// //Mouse enter
// //boton.addEventListener('mouseenter', obtenerEvento);
// //Mouse leave
// //boton.addEventListener('mouseleave', obtenerEvento);
// //Mouse Over
// //boton.addEventListener('mouseover', obtenerEvento);
// //Mouse Out
// //boton.addEventListener('mouseout', obtenerEvento);
// //Mouse Down
// //boton.addEventListener('mousedown', obtenerEvento);
// //Mouse Up
// //boton.addEventListener('mouseup', obtenerEvento);
// //Mouse move
// boton.addEventListener('mousemove', obtenerEvento);

// function obtenerEvento(e) {
//   console.log(`EVENTO: ${e.type}`);
// }
