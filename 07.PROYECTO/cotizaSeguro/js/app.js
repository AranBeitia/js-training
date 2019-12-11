//Constructor para seguro
function Seguro(marca, anio, tipo) {
	this.marca = marca;
	this.anio = anio;
	this.tipo = tipo;
}
Seguro.prototype.cotizarSeguro = function(informacion) {
	/*
		1 = americano 1.15
		2 = asiatico 1.05
		3 = europeo 1.35
	*/
	let cantidad;
	const base = 2000;

	switch (this.marca) {
		case '1':
			cantidad = base * 1.15;
			break;
		case '2':
			cantidad = base * 1.05;
			break;
		case '3':
			cantidad = base * 1.35;
			break;	
	}
	//leer el año
	const diferencia = new Date().getFullYear() - this.anio;
	//cada año de diferencia hay que reducir 3% el valor del seguro
	cantidad -= ((diferencia * 3) * cantidad) / 100;

	/*
		si e seguro es básico se multiplica por 30% más
		si el seguro es completo 50% más
	*/
	if(this.tipo === 'basico') {
		cantidad *= 1.30;
	} else {
		cantidad *= 1.50;
	}

	return cantidad;
}
//Todo lo que se muestra (UI)
function Interfaz () {
	//mensaje que se imprime en el html
	Interfaz.prototype.mostrarError = function(mensaje, tipo) {
		const div = document.createElement('div');

		if (tipo === 'error') {
			div.classList.add('mensaje','error');
		} else {
			div.classList.add('mensaje', 'correcto');
		}

		div.innerHTML = `${mensaje}`;
		formulario.insertBefore(div, document.querySelector('.form-group'));

		setTimeout(function() {
			document.querySelector('.mensaje').remove();
		}, 3000);
	}
}
//Event listener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
	e.preventDefault();

	//leer la marca seleccionada del <select>
	const marca = document.getElementById('marca');
	const marcaSeleccionada = marca.options[marca.selectedIndex].value;

	//leer el año seleccionado del <select>
	const anio = document.getElementById('anio');
	const anioSeleccionado = anio.options[anio.selectedIndex].value;

	//leer valor del radiobutton
	const tipo = document.querySelector('input[name="tipo"]:checked').value;

	//crear instancia de interfaz
	const interfaz = new Interfaz();

	//revisamos que los campos no están vacíos
	if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
		//interfaz imprimiendo error
		interfaz.mostrarError('Faltan datos, revisa el formulario y prueba de nuevo', 'error');
	} else {
		//instanciar
		const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
		//cotizar el seguro
		const cantidad = seguro.cotizarSeguro(seguro);
		console.log(seguro);
	}
});

const max = new Date().getFullYear(),
			min = max - 20;

const selectAnios = document.getElementById('anio');
for (let i = max; i > min; i--) {
	let option = document.createElement('option');
	option.value = i;
	option.innerHTML = i;
	selectAnios.appendChild(option);
}