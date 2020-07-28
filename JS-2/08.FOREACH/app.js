// /* ForEACH */

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

arrayObjetos.forEach(heroe => {
  if (heroe.armas) {
    console.log(heroe.nombre + ' tiene armas:');
    heroe.armasLista.forEach(arma => console.log(arma))
  } else {
    console.log(heroe.nombre + ' no tiene armas');
  }
})
