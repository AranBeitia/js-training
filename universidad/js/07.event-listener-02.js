// Variables
const busqueda = document.querySelector('#buscador');

//al presionar tecla
//busqueda.addEventListener('keydown', obtenerEvento);
//al levantar tecla
//busqueda.addEventListener('keyup', obtenerEvento);
//al esctibir cualquier tecla
//busqueda.addEventListener('keypress', obtenerEvento);
//al hacer foco
//busqueda.addEventListener('focus', obtenerEvento);
//saber qué se ha escrito o si no (muy utilizado para validaciones)
//busqueda.addEventListener('blur', obtenerEvento);
//escucha si se ha cortado el texto
//busqueda.addEventListener('cut', obtenerEvento);
//escucha si se ha copiado el texto
//busqueda.addEventListener('copy', obtenerEvento);
//escucha si se ha pegado el texto
//busqueda.addEventListener('paste', obtenerEvento);
//todos los eventos en uno
//busqueda.addEventListener('input', obtenerEvento);
//cambio
busqueda.addEventListener('change', obtenerEvento);


function obtenerEvento(e){
  document.querySelector('#encabezado').innerText = busqueda.value;
  console.log(`EVENTO: ${e.type}`);
}
