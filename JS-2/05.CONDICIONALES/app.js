// /* If ... else */

let arrayObjetos = [
  {
    nombre: 'spiderman',
    edad: 17,
    superpoderes: ['escalar', 'telaaraña', 'super agilidad'],
    armas: false,
    armasLista: []
  },
  {
    nombre: 'Hulk',
    edad: 32,
    superpoderes: ['Super fuerza', 'cabreo máximo', 'color verde moco'],
    armas: false,
    armasLista: []
  },
  {
    nombre: 'Ironman',
    edad: 41,
    superpoderes: ['tecnología', 'inteligencia', 'mucha cash'],
    armas: true,
    armasLista: ['robots', 'laser', 'misiles']
  }
]

let nombreHeroe = arrayObjetos[2].nombre
let armas = arrayObjetos[2].armas
let edad = arrayObjetos[2].edad

console.log(nombreHeroe);

if(armas === true || edad < 10) {
  console.log(nombreHeroe + ' tiene armas')
} else if (armas === false){
  console.log(nombreHeroe + ' no tiene armas')
} else {
  console.log('Heroe desconocido...')
}

// if ternario
console.log(arrayObjetos[1].armas ? 'tiene armas' : 'no tiene armas')

//simplificado
if (armas) {
  console.log(nombreHeroe + ' tiene armas')
} else if (!armas){
  console.log(nombreHeroe + ' no tiene armas')
} else {
  console.log('Heroe desconocido...')
}
