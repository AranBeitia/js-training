const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', 'Viena'];

//inline callback (recomendado)
ciudades.forEach(function(ciudad){
	console.log(ciudad);
});

//con funcion definida
function callback(ciudad) {
	console.log(ciudad);
}
ciudades.forEach(callback);

//listado de paises
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];

//se agrega un nuevo pais despues de 2 segundos
function nuevoPais(pais, callback){
	setTimeout(function(){
		paises.push(pais);
		callback();
	}, 2000);
}

//los paises se muestran despues de 1 segundo
function mostrarPaises() {
	setTimeout(function (){
		let html = '';
		paises.forEach(function(pais){
			html += `
			<ul>
				<li>${pais}</li>
			</ul>
			`;
		});
		document.getElementById('app').innerHTML = html;
	}, 1000);
}
nuevoPais('Alemania', mostrarPaises);
mostrarPaises();