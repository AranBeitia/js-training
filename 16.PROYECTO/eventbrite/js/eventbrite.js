class EventBrite {
	constructor(){
		this.token_auth = 'NKIPO2UZV2TBZKPHMA3B';
		this.ordenar = 'date';
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