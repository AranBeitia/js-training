//DOM

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
elemento = document.forms[0].classList[0];

elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].src;
elemento = document.images[2].getAttribute('src');

elemento = document.scripts;

let imagenes = document.images;
let imagenesArr = Array.from(imagenes);

imagenesArr.forEach(function(imagen){
  //console.log(imagen);
});

//console.log(imagenesArr);

//getElementById - no es necesario simbolo # o .
let element;

element = document.getElementById('hero');
element = document.getElementById('hero').id;
element = document.getElementById('header').className;
//console.log(element);

let encabezado;

encabezado = document.getElementById('encabezado');
//aplicar css
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
encabezado.textContent = 'Los mejores cursos';
encabezado.innerText = 'Super cursos';

//console.log(encabezado);

// Query Selector - sí es necesario simbolo # o .
const cabecera = document.querySelector('#encabezado');
//si hay más de una clase, sólo devuelve la primera
const cabecera1 = document.querySelector('.enlace');
//para que devuelva todas: queryelectorAll
const cabecera2 = document.querySelectorAll('img');
cabecera.textContent = 'Hello kitty';

console.log(cabecera);

let enlace;

enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:nth-child(3)');
enlace = document.querySelector('#principal a:last-child');

console.log(enlace);
