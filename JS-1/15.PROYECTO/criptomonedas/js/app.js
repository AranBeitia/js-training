const cotizador = new API('d7d7b03cbd5ff4a981976645df08b4407a819b314c37210f2c764e3cfc9c3ab1');
const ui = new Interfaz();

//leer el formulario
const formulario = document.querySelector('#formulario');

//event listener
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	//leer la moneda seleccionada
	const monedaSelect = document.querySelector('#moneda');
	const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

	//leer la criptomoneda seleccionada
	const criptomonedaSelect = document.querySelector('#criptomoneda');
	const criptomonedaSelected = criptomonedaSelect.options[criptomonedaSelect.selectedIndex].value;

	if (criptomonedaSelected === '' || monedaSeleccionada==='') {
		//arrojar una alerta de error
		ui.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center');
	}else {
		//todo bien, consultar la api
		cotizador.obtenerValores(monedaSeleccionada, criptomonedaSelected)
			.then(data => {
				ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptomonedaSelected);
			})
		
	}
});