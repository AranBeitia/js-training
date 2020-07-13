//Constructor para seguro
class Seguro {
	constructor(marca, anio, tipo) {
		this.marca = marca;
		this.anio = anio;
		this.tipo = tipo;
	}

	cotizarSeguro() {
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
		//cada año de diferencia hay que reducir el 3% del valor del seguro
		cantidad -= diferencia * 3 * cantidad / 100;
		/*
		Si el seguro es básico 		-> 30% más
		Si el seguro es completo 	-> 50% más
	*/
		if (this.tipo === 'basico') {
			cantidad *= 1.3;
		} else {
			cantidad *= 1.5;
		}
		return cantidad;
	}
}

// Todo lo que se muestra
class Interfaz {
	//Mensaje que se imprime en el HTML
	mostrarMensaje(mensaje, tipo) {
		const div = document.createElement('div');

		if (tipo === 'error') {
			div.classList.add('mensaje', 'error');
		} else {
			div.classList.add('mensaje', 'correcto');
		}

		div.innerHTML = `${mensaje}`;
		formulario.insertBefore(div, document.querySelector('.form-group'));

		setTimeout(function() {
			document.querySelector('.mensaje').remove();
		}, 3000);
	}

	//Imprime el resultado de la cotización
	mostrarResultado(seguro, total) {
		const resultado = document.getElementById('resultado');
		let marca;

		switch (seguro.marca) {
			case '1':
				marca = 'Americano';
				break;
			case '2':
				marca = 'Asiatico';
				break;
			case '3':
				marca = 'Europeo';
				break;
		}
		//crear div
		const div = document.createElement('div');
		//insertar la información
		div.innerHTML = `
		<h2 class="header">Tu resumen:</h2>
		<p>Marca: ${marca}</p>
		<p>Año: ${seguro.anio}</p>
		<p>Tipo: ${seguro.tipo}</p>
		<p>Total: ${total}</p>
	`;

		const spinner = document.querySelector('#cargando img');
		spinner.style.display = 'block';
		setTimeout(function() {
			spinner.style.display = 'none';
			resultado.appendChild(div);
		}, 3000);
	}
}

//Event listener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function(e) {
	e.preventDefault();

	//Lee la marca seleccionada
	const marca = document.getElementById('marca');
	const marcaSeleccionada = marca.options[marca.selectedIndex].value;

	//Lee el año seleccionado del <select>
	const anio = document.getElementById('anio');
	const anioSeleccionado = anio.options[anio.selectedIndex].value;

	//Lee el valor del radiobutton
	const tipo = document.querySelector('input[name="tipo"]:checked').value;

	//Crear instancia de interfaz
	const interfaz = new Interfaz();

	//Revisar que los campos no están vacíos
	if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
		//Interfaz imprimiendo un error
		interfaz.mostrarMensaje('Kitty says: Faltan datos, revisa el formulario y prueba de nuevo', 'error');
	} else {
		//Limpiar resultados anteriores
		const resultados = document.querySelector('#resultado div');
		if (resultados != null) {
			resultados.remove();
		}

		//Instanciar seguro y mostrar interfaz
		const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
		//Cotizar seguro
		const cantidad = seguro.cotizarSeguro();
		//Mostrar el resultado
		interfaz.mostrarResultado(seguro, cantidad);
		interfaz.mostrarMensaje('Cotizando...', 'correcto');
	}
});

const max = new Date().getFullYear(),
	min = max - 20;

// console.log(max);
// console.log(min);

const selectAnios = document.getElementById('anio');

for (let i = max; i > min; i--) {
	let option = document.createElement('option');
	option.value = i;
	option.innerHTML = i;
	selectAnios.appendChild(option);
}
