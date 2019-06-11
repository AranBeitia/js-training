const enlaces = document.querySelectorAll('.enlace');
const nav = document.querySelector('#principal');
//enlaces[0].remove();
console.log(enlaces);

nav.removeChild(enlaces[0]);

console.log(nav);

const primerLi = document.querySelector('.enlace');
let elemento;
elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;

// leer atributos
//getAttribute obtiene el valor
elemento = primerLi.getAttribute('href');
//setAttribute modifica el valor
primerLi.setAttribute('href', 'http://facebook.com');
primerLi.setAttribute('data-id', '20');
//hasAttribute comprueba si existe el valor
elemento = primerLi.hasAttribute('data-id');
//removeAttribute elimina el valor
primerLi.removeAttribute('data-id');

elemento = primerLi;
console.log(elemento);