// //(video 61)
// /*** Variables ***/
// const listaTweets = document.querySelector("#lista-tweets");

// /*** Event Listeners ***/
// eventListeners();

// function eventListeners() {
//   //Cuando se envía el formulario
//   document
//     .getElementById("formulario")
//     .addEventListener("submit", agregarTweet);

//     //Borrar tweets
//     listaTweets.addEventListener('click', borrarTweet);
// }

// /*** Funciones ***/
// //Añadir tweet del formulario
// function agregarTweet(e) {
//   e.preventDefault();
//   //leer el valor del textarea
//   const tweet = document.getElementById('tweet').value;
//   //crear boton borrar
//   const botonBorrar = document.createElement('a');
//   botonBorrar.classList = 'borrar-tweet';
//   botonBorrar.innerText = 'X';

//   //crear elemento y añadirle el contenido a la lista
//   const li = document.createElement('li');
//   li.innerText = tweet;
//   //añade el boton de borrar al tweet
//   li.appendChild(botonBorrar);
//   //añade el tweet a la lista
//   listaTweets.appendChild(li);
//   //console.log(tweet);
// }

// function borrarTweet(e){
//   e.preventDefault();
//   if(e.target.className === 'borrar-tweet') {
//     console.log(e.target.parentElement.remove());
//     alert('Tweet eliminado');
//   } 
// }