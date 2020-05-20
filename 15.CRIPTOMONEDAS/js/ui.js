class Interfaz {
	constructor(){
		this.init();
	}
	init(){
		this.construirSelect();
	}

	construirSelect() {
		cotizador.obtenerMonedasAPI()
			.then(monedas => {
				//crear un select de opciones
				const select = document.querySelector('#criptomoneda');

				//
				for( const [key, value] of Object.entries(monedas.monedas.Data)) {//convierte en array un objeto (Object.entries())
					//console.log(value.Symbol);
					//añadir el simbolo y el nombre como opciones
					const opcion = document.createElement('option');
					opcion.value = value.Symbol;
					opcion.appendChild(document.createTextNode(value.CoinName));
					select.appendChild(opcion);
				}
			})
	}

	mostrarMensaje(mensaje, clases){
		const div = document.createElement('div');
		div.className = clases;
		div.appendChild(document.createTextNode(mensaje));
		console.log(div);

		//seleccionar mensajes
		const divMensaje = document.querySelector('.mensajes');
		//mostrar contenido
		divMensaje.appendChild(div);
		setTimeout(() => {
			document.querySelector('.mensajes div').remove();
		}, 3000);
	}

	//imprime el resultado de la cotizacion
	mostrarResultado(resultado, moneda,crypto) {
		console.log(resultado[crypto][moneda]);
	}
}