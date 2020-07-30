// /* FUNCIONES MAP() */
//siempre tiene que devolver algo (return)

const numeros = [1, 5, 10, 99, 209, 50]
const dobles = numeros.map( numero => { 
  return numero * 2
})

console.log(dobles);

const arrayClaveValor = [
  { 
    clave: 'nombre',
    valor: 'Aran'
  },
  {
    clave: 'apellido',
    valor: 'Beitia'
  },
  {
    clave: 'apellido2',
    valor: 'Martinez'
  }
]

//resetear en esto:
// [
//   { nombre: 'Aran' },
//   { apellido: 'Beitia' },
//   { apellido2: 'Martinez' }
// ]

const reformatearArray = arrayClaveValor.map( item => {
  let obj = {}
  obj[item.clave] = item.valor
  return obj
})

console.log(reformatearArray);

// /* FUNCIONES FILTER() */

const arrayHeroes= [
  'Iron Man',
  'Thor',
  'Spiderman',
  'Deadpool'
]

const resultHeroesFiler = arrayHeroes.filter((heroe) => {
  return heroe.length > 8
})

console.log(resultHeroesFiler);

// filtro por tipo
const arrayList = [ 'Thor', 77, 88, false, 'Deadpool', true]

const resultado = arrayList.filter(item => {
  console.log(typeof item)
  return typeof item === 'number'
})

console.log(resultado);