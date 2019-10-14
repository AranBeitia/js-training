//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

//Event listeners
eventListeners();

function eventListeners() {
	//Inicio de la aplicación y deshabilitar submit
	document.addEventListener('DOMContentLoaded', inicioApp);
	//Campos del formulario
	email.addEventListener('blur', validarCampo);
	asunto.addEventListener('blur', validarCampo);
	mensaje.addEventListener('blur', validarCampo);

}

//Funciones
function inicioApp() {
	//deshabilitar el envío
	btnEnviar.disabled = true;
	console.log(btnEnviar);
}
//valida que el campo tenga algo escrito
function validarCampo() {
	//se valda la longitud del texto
	validarLongitud(this);

	//validar unicamente el email
	if(this.type === 'email') {
		validarEmail(this);
	}
	console.log(this.type);

	let errores = document.querySelectorAll('.error');
	if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
		if (errores.length === 0) {
			btnEnviar.disabled = false;
		}
	}
	//console.log('Dentro del INPUT');
}

function validarLongitud(campo) {
	if (campo.value.length > 0) {
		campo.style.borderBottomColor = 'green';
		campo.classList.remove('error');
	} else {
		campo.style.borderBottomColor = 'red';
		campo.classList.add('error');
	}
	//console.log(campo);
}

function validarEmail(campo) {
	const mensaje = campo.value;
	if(mensaje.indexOf('@') !== -1) {
		campo.style.borderBottomColor = 'green';
		campo.classList.remove('error');
	} else {
		campo.style.borderBottomColor = 'red';
		campo.classList.add('error');
	}
}
