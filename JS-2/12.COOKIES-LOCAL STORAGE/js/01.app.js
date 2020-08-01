var nombre = escape('Aran;tza')//para que traduzca a codigo html
console.log(nombre);

document.cookie = 'nombre=Arant;za'
document.cookie = 'apellido=Beitia'

let cookies = document.cookie
console.log(cookies);

const crearCookie = (clave, valor) => {
  const valorEscape = escape(valor)
  let mesSiguiente = new Date()
  mesSiguiente.setMonth(mesSiguiente.getMonth() + 1)

  document.cookie = `${clave}=${valorEscape}:expires=${mesSiguiente};`
}

crearCookie('marcaCoche', 'Audi')
crearCookie('potencia Coche', '175cv')