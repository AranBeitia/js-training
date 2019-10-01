/*
const enlaces = document.querySelectorAll('a.enlace');
const nav = document.querySelector('#principal');

enlaces[0].remove();
console.log(enlaces);

nav.removeChild(enlaces[0]);
console.log(nav);
*/
const primerLi = document.querySelector('.enlace');
let elemento;

//obtener una clase CSS
elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;

//leer atributos
//getAttribute obtiene el valor
elemento = primerLi.getAttribute('href');
primerLi.setAttribute('data-id', '20');//modificar o añadir
elemento = primerLi;//igualarlo para poder verlo en el console log

elemento = primerLi.hasAttribute('data-id');//true
primerLi.removeAttribute('data-id');//elimina el valor
console.log(elemento);
