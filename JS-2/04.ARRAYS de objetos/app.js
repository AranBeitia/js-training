// /* Array de objetos*/

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

console.log(arrayObjetos);

arrayObjetos.forEach( item => console.log(item.armas))

if (arrayObjetos[2].armas === true) {
  console.log(arrayObjetos[2].nombre);
  console.log(arrayObjetos[2].armasLista);
} else {
  console.log('no tiene armas');
}

arrayObjetos.push(
  {
    nombre: 'ciclope',
    edad: 29,
    superpoderes: ['rayos laser', 'fuerza'],
    armas: false,
    armasLista: []
  }
)

console.log(arrayObjetos);