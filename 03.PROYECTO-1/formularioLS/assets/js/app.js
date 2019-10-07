/*** Variables ***/
const listaTweets = document.querySelector('#lista-tweets');

/*** Event Listeners ***/
eventListeners();

function eventListeners() {
	//Cuando se envía el formulario
	document.querySelector('#formulario').addEventListener('submit', agregarTweet);

	//borrar tweets
	listaTweets.addEventListener('click', borrarTweet);

	//contenido cargado
	document.addEventListener('DOMContentLoaded', localStorageListo);
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

	//añadir a local storage
	agregarTweetLocalStorage(tweet);
}

//borrar tweet del DOM
function borrarTweet(e) {
	e.preventDefault();
	if(e.target.className === 'borrar-tweet') {
		e.target.parentElement.remove();
		borrarTweetLocalStorage(e.target.parentElement.innerText);
	}
}

//mostrar datos de localStorage en la lista
function localStorageListo() {
	let tweets;
	tweets = obtenerTweetLocalStorage();
	
	tweets.forEach(function(tweet) {
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
	});
}

//agregar tweet a local storage
function agregarTweetLocalStorage(tweet) {
	let tweets;
	tweets = obtenerTweetLocalStorage();
	//Añadir el nuevo tweet
	tweets.push(tweet);
	//convertir de string a array para local storage
	localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Comprobar que hay elementos en localStorage, retorna un array
function obtenerTweetLocalStorage() {
	let tweets;
	//revisamos los valores de local storage
	if(localStorage.getItem('tweets') === null) {
		tweets = [];
	} else {
		tweets = JSON.parse(localStorage.getItem('tweets'));
	}
	return tweets;
}

//eliminar tweet de localStorage
function borrarTweetLocalStorage(tweet) {
	let tweets, tweetBorrar;
	//elimina la X del tweet
	tweetBorrar = tweet.substring(0, tweet.length - 1);
	tweets = obtenerTweetLocalStorage();

	tweets.forEach(function(tweet, index){
		if(tweetBorrar === tweet) {
			tweets.splice(index, 1);
		}
	});
	localStorage.setItem('tweets', JSON.stringify(tweets));
}
