/*** Variables ***/
const listaTweets = document.querySelector('#lista-tweets');

/*** Event Listeners ***/
eventListeners();

function eventListeners() {
  //Cuando se envía el formulario
  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarTweet);
}

/*** Funciones ***/
//Añadir tewwt del formulario
function agregarTweet(e) {
  e.preventDefault();
  //leer el valor de textares
  const tweet = document.getElementById('tweet').value;
  //crear boton de eliminar
  const botonBorrar = document.createElement('a');
  botonBorrar.classList = 'borrar-tweet';
  botonBorrar.innerText = 'X';

  //crear elemento y añadirlo a la lista
  const li = document.createElement('li');
  li.innerText = tweet;
  //añade el boton de borrar twit de la lista
  li.appendChild(botonBorrar);
  //añade twit a la lista
  listaTweets.appendChild(li);
  console.log(tweet);
}
