//Constructor para seguro
function Seguro(marca, anio, tipo) {
	this.marca = marca;
	this.anio = anio;
	this.tipo = tipo;
}

// Todo lo que se muestra
function Interfaz() {

}

//Mensaje que se imprime en el HTML
Interfaz.prototype.mostrarError = function(mensaje, tipo) {
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
		interfaz.mostrarError('Kitty says: Faltan datos, revisa el formulario y prueba de nuevo', 'error');
	} else {
		//Interfaz todo correcto
		console.log('Todo correcto');
	}
})

const max = new Date().getFullYear(),
			min = max - 20;

console.log(max);
console.log(min);

const selectAnios = document.getElementById('anio');

for (let i = max; i > min; i--) {
	let option = document.createElement('option');
	option.value = i;
	option.innerHTML = i;
	selectAnios.appendChild(option);
}
