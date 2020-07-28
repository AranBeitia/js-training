// /* Switch */

let nombre = 'Hulk'

switch (nombre) {
  case 'Hulk':
    hulkFn()
    console.log('es el caso 1')
    break
  case 2:
    console.log('es el caso 2')
    break
  case 3:
    console.log('es el caso 3')
    break
  default:
    console.log('caso desconocido')
}

function hulkFn () {
  console.log('hulk es muy fuerte');
}