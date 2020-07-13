const txtBtn = document.getElementById('txtBtn');
const jsonBtn = document.getElementById('jsonBtn');
const apiBTN = document.getElementById('apiBTN');

txtBtn.addEventListener('click', cargarTXT);
jsonBtn.addEventListener('click', cargarJSON);
apiBTN.addEventListener('click', cargarREST);

function cargarTXT (){
	fetch('datos.txt')
		.then(function(res){
			return res.text();
		})
		.then(function(empleados){
			console.log(empleados);
			document.getElementById('resultado').innerHTML = empleados;
		})
		.catch(function(error){
			console.log(error);
		});
}

function cargarJSON() {
	fetch('empleados.json')
	.then(function(res){
		return res.json();
	})
	.then(function(datos){
		let html = '';
		datos.forEach(function (empleado){
			html += `
					<li>${empleado.nombre} - ${empleado.puesto}</li>
			`;
		})
		document.getElementById('resultado').innerHTML = html;
	})
	.catch(function (error) {
		console.log(error);
	});
}

function cargarREST(){
	fetch('https://picsum.photos/list')
	.then(function(res){
		return res.json();
	})
	.then(function(imagenes){
		console.log(imagenes);
		let html = '';
		imagenes.forEach(function(imagen){
			html += `
				<li>
					<a href="${imagen.post_url}">${imagen.author}</a>
				</li>
			`;
		})
		document.getElementById('resultado').innerHTML = html;
	})
}