document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);
//llamado a Ajax e imprimir resultados
function cargarNombres(e) {
	e.preventDefault();

	//leer las variables
	const origen = document.getElementById('origen');
	const origenSeleccionado = origen.options[origen.selectedIndex].value;

	const genero = document.getElementById('genero');
	const generoSeleccionado = genero.options[genero.selectedIndex].value;

	const cantidad = document.getElementById('numero').value;

	let url = '';
	url += 'http://www.mocky.io/v2/5ebe58123100008f00c5d1e1/?';
	//si hay origen agregarlo a la url
	if (origenSeleccionado !== '') {
		url += `region=${origenSeleccionado}&`;
	}

	//si hay genero
	if (generoSeleccionado !== '') {
		url += `gender=${generoSeleccionado}&`;
	}

	const xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.onload = function(){
		if (this.status === 200) {
			const nombres = JSON.parse(this.responseText);
			console.log(nombres);
			let htmlNombres = `<h2>Nombres generados: </h2>`
		}
	}
	xhr.send();
}