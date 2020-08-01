// /* LOCALSTORAGE */

var nombre = 'Aran'
var apellido = 'Beitia'
var edad = 25

//crear variables en localstorage
localStorage.setItem('nombre', nombre)
localStorage.setItem('apellido', apellido)
localStorage.setItem('edad', edad)

//sacar por pantalla las vars de localstorage
console.log(localStorage.getItem('nombre'));
console.log(localStorage.getItem('apellido'));
console.log(localStorage.getItem('edad'));

//borrar variables de localstorage
localStorage.removeItem('apellido')

console.log(localStorage.getItem('nombre'));
console.log(localStorage.getItem('apellido'));//null
console.log(localStorage.getItem('edad'));

//actualizar un valor en localstorage
localStorage.setItem('apellido', 'Gomez')
console.log(localStorage.getItem('apellido'));

//borrar tod al final del proceso
localStorage.clear()
