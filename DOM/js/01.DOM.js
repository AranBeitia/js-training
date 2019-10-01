// //DOM
let elemento;

elemento = document;
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.forms[0].classList[1];
elemento = document.images;
elemento = document.images[0];
elemento = document.images[1].src;
elemento = document.images[2].getAttribute('src');
elemento = document.scripts;

console.log(elemento);

let imagenes = document.images;
let imagenesArr = Array.from(imagenes);

imagenesArr.forEach(function(imagen){
	console.log(imagen);
})

console.log(imagenesArr);
