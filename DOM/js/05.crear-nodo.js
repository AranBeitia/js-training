// crear enlace
const enlace = document.createElement('a');
//agregar la clase
enlace.className = 'nuevo-enlace';
// añadir id
enlace.id = 'nuevo-id';
//atributo de href
enlace.setAttribute('href', '#');
//añadir texto
enlace.textContent = "Nuevo enlace kitty";
// agregarlo al html
document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace);

//REEMPLAZAR ELEMENTOS
const nuevoHead = document.createElement('h2');
//agregar id
nuevoHead.id = 'encabezado';
//agregar nuevo texto
nuevoHead.appendChild(document.createTextNode('Los mejores cursos kitty'));
//elemento anterior reemplazado
const anterior = document.querySelector('#encabezado');
const elPadre = document.querySelector('#lista-cursos');
//reemplazar
elPadre.replaceChild(nuevoHead, anterior);

console.log(anterior.parentElement);