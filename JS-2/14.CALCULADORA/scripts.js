//coger el valor
function getContentClick (event) {
  const value = event.target.innerHTML
  filterAction(value)
}

//tela de araña que manda cada funcion a su sitio
const filterAction= value => { 
  value === '0' ? addValueInput(0) : null
}

function addValueInput (value) {
  const inputScreen = document.getElementsByClassName('calculator__screen')[0]
  inputScreen.value = value
}



function presionarBoton () {
  console.log('presiona boton');
}

function mostrarPantalla () {

}

function calcular () {

}

function resultado () {

}

function borrar () {

}