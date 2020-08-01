// /* LOCALSTORAGE CON OBJETOS */

const coche = {
  marca: 'Ferrari',
  color: 'rojo',
  precio: 600000
}

// console.log(coche)
// localStorage.setItem('coche', coche)
// console.log(localStorage.getItem('coche'))

const cocheString = JSON.stringify(coche)
localStorage.setItem('coche', cocheString)

let cocheStorage = localStorage.getItem('coche')
cocheStorage = JSON.parse(cocheStorage)//pasa el json a objeto
cocheStorage.color= 'negro'

//para actualizar en localstorage el valor modificado
cocheStorage = JSON.stringify(cocheStorage)
localStorage.setItem('coche', cocheStorage)

console.log(cocheStorage);
