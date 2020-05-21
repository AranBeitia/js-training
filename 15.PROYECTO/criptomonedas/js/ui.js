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
		//en caso de un resultado anterior, ocultarlo
		const resultadoAnterior = document.querySelector('#resultado > div');

		if (resultadoAnterior) {
			resultadoAnterior.remove();
		}

		const datosMoneda = resultado[crypto][moneda];
		console.log(resultado[crypto][moneda]);

		let precio = datosMoneda.PRICE.toFixed(2);
		let porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2);
		let actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-ES');

		//construir el template
		let templateHTML = `
			<div class="card bg-warning">
				<div class="card-body text-light">
					<h2 class="card-title">Resultado:</h2>
					<p>El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $${precio}</p>
					<p>Variación último día % ${porcentaje}</p>
					<p>Última actualización: ${actualizado}</p>
				</div>
			</div>
		`;
		this.mostrarOcultarSpinner('block');
		setTimeout(() => {
			//insertar el resultado
			document.querySelector('#resultado').innerHTML = templateHTML;
			this.mostrarOcultarSpinner('none');
		}, 3000);
	}

	//mostrar spinner de carga al enviar la cotizacion
	mostrarOcultarSpinner(vista){
		const spinner = document.querySelector('.contenido-spinner');
		spinner.style.display = vista;
	}
}