/*** Variables ***/
const listaTweets = document.getElementById("lista-tweets");

/*** Event Listeners ***/
eventListeners();

function eventListeners() {
  //Cuando se envía el formulario
  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarTweet);
}

/*** Funciones ***/
function agregarTweet(e) {
  e.preventDefault();
  console.log('Formulario enviado');
  //Leer el valor de textarea
  const tweet = document.getElementById('tweet').value;
  //Crear elemento y añadirle el contenido a la lista
  const li = document.createElement('li');
  li.innerText = tweet;

  listaTweets.appendChild(li);


  console.log(tweet);
}
