// PAGINA
/*
  1. cargar de BBDD items
  2. pintar items

  3. boton añadir item al carrito (y sumar cantidad y precio)
*/
document.addEventListener('DOMContentLoaded', () => {
  loadItems()
})

function getItemDB() {
  const URL = 'dbProducts.json'
  return fetch(URL)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))
}

async function loadItems() {
  const items = await getItemDB()
  let html = ``

  items.forEach(item => {
    html += `
    <div class="col-3 product-container">
      <div class="card product">
        <img src="${item.image}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.extraInfo}</p>
          <p class="card-text">${item.price}€ / ud.</p>
          <button type="button" onClick="addItem(${item.id})" class="btn btn-primary btn-cart">Añadir al
            carrito</button>
        </div>
      </div>
    </div>
    `
  })
  document.getElementsByClassName('products')[0].innerHTML = html
}

// CARRITO
/*
  1. abrir / cerrar carrito
    1.1 carrito vacio
    1.2 carrito items:(localstorage)
      1. crear variales
      2. array variables
      3. añadir items
      4. cargar items (DOM)

  2. boton añadir item (y sumar)
  3. boton restar item (y restar)
  4. boton eliminar item
*/

function addItem (id) {
  console.log('añadir item ' +  id)
}
