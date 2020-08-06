var operator = null
var inputValueMemo = 0

//coger el valor al hacer click
function getContentClick (event) {
  const value = event.target.innerHTML
  filterAction(value)
}

//tela de araña que manda cada funcion a su sitio
const filterAction= value => { 
  value === '0' ? addValueInput(0) : null
  value === '1' ? addValueInput(1) : null
  value === '2' ? addValueInput(2) : null
  value === '3' ? addValueInput(3) : null
  value === '4' ? addValueInput(4) : null
  value === '5' ? addValueInput(5) : null
  value === '6' ? addValueInput(6) : null
  value === '7' ? addValueInput(7) : null
  value === '8' ? addValueInput(8) : null
  value === '9' ? addValueInput(9) : null
  value === ',' ? addValueInput(',') : null

  value === '+' ? setOperation('+') : null
  value === '-' ? setOperation('-') : null
  value === 'X' ? setOperation('*') : null
  value === '/' ? setOperation('/') : null
  value === '%' ? setOperation('%') : null
  value === '+/-' ? setOperation('+/-') : null

  value == '=' ? calculation() : null
}

function addValueInput (value) {
  const inputScreen = document.getElementsByClassName('calculator__screen')[0]
  const inputValue = inputScreen.value

  if(inputValue === '0' && inputValue.length === 1 && value !== ',') {
    inputScreen.value = value
    return
  }
  inputScreen.value = inputValue + value
}

function setOperation (operator) {
  const inputScreenvalue = document.getElementsByClassName('calculator__screen')[0]
  this.operator = operator

  if(inputScreenvalue != 0) {
    calculation()
  }
}

function calculation() {
  const inputScreen = document.getElementsByClassName('calculator__screen')[0]
  let valueOne = transformCommaToPoint(this.inputValueMemo)
  let valueTwo = transformCommaToPoint(inputScreen.value)
  let total = 0

  if(this.operator === '+' && inputScreen.value !== '') {
    total = valueOne + valueTwo
  }

  total = transformPointToComma(total)
  this.inputValueMemo = total
  inputScreen.value = ''
  inputScreen.placeholder = total
}

function transformCommaToPoint (value) {
  if(typeof value !== 'number') {
    let resultTransform = value.replace(',', '.')
    return parseFloat(resultTransform)
  }
  return value
}

function transformPointToComma(value) {
  let resultTransform = value.toString()
  resultTransform = resultTransform.replace('.', ',')
  return resultTransform
}




/**/
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