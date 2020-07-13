//instanciar ambas clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

//listener al buscador
document.getElementById('buscarBtn').addEventListener('click', (e) => {
	e.preventDefault();

	//leer el texto del input de buscar
	const textoBuscador = document.getElementById('evento').value;
	//leer el select
	const categorias = document.getElementById('listado-categorias');
	const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;
	console.log(textoBuscador);
	console.log(categoriaSeleccionada);

	//revisar que haya texto escrito en el buscador
	if(textoBuscador !== '') {
		//cuando hay una búsqueda
		eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada);
	}else{
		ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
	}
})