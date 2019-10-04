/*** Variables ***/
const listaTweets = document.querySelector('#lista-tweets');

/*** Event Listeners ***/
eventListeners();

function eventListeners() {
	//Cuando se envía el formulario
	document.querySelector('#formulario').addEventListener('submit', agregarTweet);

	//borrar tweets
	listaTweets.addEventListener('click', borrarTweet);
}

/*** Funciones ***/
//añade tweet del formulario
function agregarTweet(e) {
	e.preventDefault();
	//leer el valor del textarea
	const tweet = document.querySelector('#tweet').value;
	//crear boton de eliminar tweet
	const botonBorrar = document.createElement('a');
	botonBorrar.classList = 'borrar-tweet';
	botonBorrar.innerText = 'X';

	//crear elemento y añadirle el contenido a la lista
	const li = document.createElement('li');
	li.innerText = tweet;
	//añade el boton de borrar el tweet
	li.appendChild(botonBorrar);
	//añade el tweet a la lista
	listaTweets.appendChild(li);

	console.log(listaTweets);
}

//borrar tweet
function borrarTweet(e) {
	e.preventDefault();
	if(e.target.className === 'borrar-tweet') {
		console.log(e.target.parentElement.remove());
		alert('Tweet eliminado');
	}
}
