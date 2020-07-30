// /* ASYNC AWAIT */
//la promesa tiene que ser (resolve, reject)

var nombre = null

function actualizarNombre() {
  console.log('Actualizacion empezada')
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Actualizacion comletada');
      resolve ('Aran')
    }, 1000)
  })
}

async function saludar() {
  nombre = await actualizarNombre()
  console.log('Actualizacion completada');
  console.log('Hola, me llamo ' + nombre);
}

saludar()
