class Interfaz {
	constructor() {
		//inicializa la app al instanciar
		this.init();
		//leer el resultado
		this.listado = document.getElementById('resultado-eventos');
	}
	//metodo para cuando inicialice la app
	init(){
		//llamar a imprimir categorias de la REST API
		this.imprimirCategorias();
	}

	//imprimir categorias
	imprimirCategorias(){
		const listaCategorias = eventbrite.obtenerCategorias()
			.then(categorias => {
				const cats = categorias.categorias.categories;
				//seleccionar el select de categorias
				const selectCategoria = document.getElementById('listado-categorias');

				//recorrer el array e imprimirlo
				cats.forEach(cat => {
					const option = document.createElement('option');
					option.value = cat.id;
					option.appendChild(document.createTextNode(cat.name_localized));
					selectCategoria.appendChild(option);
				})

				console.log(cats);
			});
	}
	
	//metodo para imprimir mensajes: 2 parametros, mensaje y clases css
	mostrarMensaje(mensaje, clases){
		const div = document.createElement('div');
		div.classList = clases;
		div.appendChild(document.createTextNode(mensaje));
		//buscar un padre
		const buscadorDiv = document.querySelector('#buscador');
		buscadorDiv.appendChild(div);
		//quitar el alert despues de 3 segundos
		setTimeout(() => {
			this.limpiarMensaje();
		}, 3000);
	}

	limpiarMensaje(){
		const alert = document.querySelector('.alert');
		if(alert) {
			alert.remove();
		}
	}

}