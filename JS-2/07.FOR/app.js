// /* For */

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

for (let i = 0; i< arrayObjetos.length; i++){
  if(arrayObjetos[i].armas) {
    console.log(arrayObjetos[i].nombre + ' tiene armas')
    
    for (let x = 0; x < arrayObjetos[i].armasLista.length; x++) {
      console.log(arrayObjetos[i].armasLista[x]);
    }
  } else if (!arrayObjetos[i].armas){
    console.log(arrayObjetos[i].nombre + ' no tiene armas')
  } else {
    console.log('error... ')
  }
}
