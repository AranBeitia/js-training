class EventBrite {
	constructor(){
		this.token_auth = '';
		this.ordenar = 'date';
	}
	//mostrar resultados de la busqueda
	async obtenerEventos(evento, categoria) {
		const respuestaEvento = await fetch(``);
	}

	//obtiene las categorias en init()
	async obtenerCategorias(){
		//consultar las categorias a la REST API de eventbrite
		const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

		//esperar la resouesta de las categorias y devolver un JSON
		const categorias = await respuestaCategorias.json();
		//devolvemos el resultado
		return {
			categorias
		}
	}
}