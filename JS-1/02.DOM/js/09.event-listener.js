// event bubbling (detener la propagacion)
const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');
/*
card.addEventListener('click', function(e){
	console.log('Click en card');
	e.stopPropagation();
});

infoCurso.addEventListener('click', function(e){
	console.log('Click en info curso');
	e.stopPropagation();
});

agregarCarrito.addEventListener('click', function(e){
	console.log('Click en agregar carrito');
	e.stopPropagation();
})
*/

//delegation (mejor forma de detener la propagación)
document.body.addEventListener('click', eliminarElemento);

function eliminarElemento(e){
	e.preventDefault();
	console.log('click!');
	console.log(e.target.classList);

	if(e.target.classList.contains('borrar-curso')){
		console.log(e.target.parentElement.parentElement.remove());
	}

	if (e.target.classList.contains('agregar-carrito')) {
		console.log('Curso agregado');
	}
}
