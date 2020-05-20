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
		ui.mostrarMensaje('todo bien', 'success');
	}
});