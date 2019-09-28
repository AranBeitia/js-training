//getElementById - no es necesario simbolo # o .
let elemento;

elemento = document.getElementById('hero');
elemento = document.getElementById('hero').id;
elemento = document.getElementById.id;
elemento = document.getElementById('header').className;

console.log(elemento);

let encabezado;

encabezado = document.getElementById('encabezado');
// encabezado = document.getElementById('encabezado').className;
// encabezado = document.getElementById('encabezado').textContent;
// encabezado = document.getElementById('encabezado').innerText;

//aplicar CSS
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';
//Cambiar texto
encabezado.textContent = "Los mejores cursos";
encabezado.innerText = "Super cursos";

console.log(encabezado);

// Query Selector - sí es necesario simbolo # o .
const cabecera = document.querySelector('#encabezado');

//Aplicar CSS
cabecera.style.background ='#002aff';
cabecera.style.color = '#fff200';
cabecera.style.padding = '30px';
cabecera.textContent = 'Hello kitty';
console.log(cabecera);

let enlace;
enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:nth-child(3)');
enlace = document.querySelector('#principal a:last-child');

console.log(enlace);