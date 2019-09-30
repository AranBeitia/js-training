// // crear enlace
// const enlace = document.createElement('a');
// //agregar la clase
// enlace.className = 'enlace';
// // añadir id
// enlace.id = 'nuevo-id';
// //atributo de href
// enlace.setAttribute('href', '#');
// //añadir texto
// enlace.textContent = 'Nuevo enlace';
// enlace.appendChild(document.createTextNode('Nuevo enlace 2'));
// // agregarlo al html
// document.querySelector('#secundaria').appendChild(enlace);
// console.log(enlace);

// //REEMPLAZAR ELEMENTOS

// const nuevoHead = document.createElement('h2');
// //agregar id
// nuevoHead.id = 'encabezado';
// // agregar nuevo texto
// nuevoHead.appendChild(document.createTextNode('Los mejores cursos'));
// //elemento anterior reemplazado
// const anterior = document.querySelector('#encabezado');

// const elPadre = document.querySelector('#lista-cursos');

// //reemplazar
// elPadre.replaceChild(nuevoHead, anterior);

// console.log(anterior.parentElement);