const txtBtn = document.getElementById('txtBtn');
const jsonBtn = document.getElementById('jsonBtn');
const apiBTN = document.getElementById('apiBTN');

txtBtn.addEventListener('click', cargarTXT);
jsonBtn.addEventListener('click', cargarJSON);
apiBTN.addEventListener('click', cargarREST);

function cargarTXT (){
	fetch('datos.txt')
		.then(res => res.text())
		.then(empleados => document.getElementById('resultado').innerHTML = empleados)
		.catch(error => console.log(error));
}

function cargarJSON() {
	fetch('empleados.json')
	.then(res => res.json())
	.then(datos => {
		let html = '';
		datos.forEach(empleado => {
			html += `
					<li>${empleado.nombre} - ${empleado.puesto}</li>
			`;
		})
		document.getElementById('resultado').innerHTML = html;
	})
	.catch(error => console.log(error));
}

function cargarREST(){
	fetch('https://picsum.photos/list')
	.then(res => res.json())
	.then(imagenes => {
		console.log(imagenes);
		let html = '';
		imagenes.forEach(imagen => {
			html += `
				<li>
					<a href="${imagen.post_url}">${imagen.author}</a>
				</li>
			`;
		})
		document.getElementById('resultado').innerHTML = html;
	})
		.catch(error => console.log(error));
}