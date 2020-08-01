// /* COOKIE - EXPIRES */

const crearCookie = (clave, valor) => {
  const valorEscape = escape(valor)
  let mesSiguiente = new Date()
  mesSiguiente.setMonth(mesSiguiente.getMonth() + 1)

  document.cookie = `${clave}=${valorEscape};expires=${mesSiguiente}`
}

// /* COOKIE - DELETE */
const borrarCookies = clave => {
  let mesAnterior = new Date()
  mesAnterior.setMonth(mesAnterior.getMonth() - 1)

  document.cookie = `${clave}=Y;expires=${mesAnterior}`
}

// /* COOKIE - OBTENER COOKIES */

const obtenerCookies = () => {
  const cookies = document.cookie
  const arrayCookies = cookies.split("; ")
  let objetoCookies = {}

  arrayCookies.forEach(cookie => {
    const cookieArray = cookie.split("=")

    const keyItem = cookieArray[0]
    objetoCookies[keyItem] = unescape(cookieArray[1])
  })
  return objetoCookies
}

crearCookie("marcaCoche", "Audi")
crearCookie("potenciaCoche", "175cv")

// borrarCookies('marca coche')

obtenerCookies()

const cookies = obtenerCookies()
console.log(cookies);

//devolvería este objeto
// const cookies = {
//   marcaCoche: 'Audi',
//   potenciaCoche: '175cv'
// }