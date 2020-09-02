const CARD_PRODUCTS = 'cart-Products-Id'

document.addEventListener('DOMContentLoaded', () => {
  loadProducts()
  loadProductCard()
})

function getProductsDb() {
  const url = './dbProducts.json'
  return fetch(url)
  .then(response => {
    return response.json()
  })
  .then(result => {
    return result
  })
  .catch(err => {
    console.log(err);
  })
}

async function loadProducts() {
  const products = await getProductsDb()
  let html = ''
  products.forEach(product => {
    html += `
    <div class="col-3 product-container">
      <div class="card product">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.extraInfo}</p>
          <p class="card-text">${product.price} € / Unidad</p>
          <button type="button" class="btn btn-primary btn-cart" onClick="addProduct(${product.id})">Añadir al carrito</button>
        </div>
      </div>
    </div>
    `
  })
  document.getElementsByClassName('products')[0].innerHTML = html
}

function openCloseCart() {
  const containerCart = document.getElementsByClassName('cart-products')[0]
  containerCart.classList.forEach(item => { 
    if(item === 'hidden') {
      containerCart.classList.remove('hidden')
      containerCart.classList.add('active')
    }
    if (item === 'active') {
      containerCart.classList.remove('active')
      containerCart.classList.add('hidden')
    }
   })
  console.log(containerCart);
}

function addProduct(idProduct) {
  let arrayProductId = []
  let localStorageItems = localStorage.getItem(CARD_PRODUCTS)

  if(localStorageItems === null) {
    arrayProductId.push(idProduct)
    localStorage.setItem(CARD_PRODUCTS, arrayProductId)
  } else {
    let productsId = localStorage.getItem(CARD_PRODUCTS)
    if(productsId.length > 0) {
      productsId += ', ' + idProduct
    } else {
      productsId = productId
    }
    localStorage.setItem(CARD_PRODUCTS, productsId)
  }
  loadProductCard()
}

async function loadProductCard () {
  const products = await getProductsDb()
  //convetir resultado del localStorage en un array
  const localStorageItems = localStorage.getItem(CARD_PRODUCTS)
  let html = ''
  if (!localStorageItems) {
    html = `
      <div class="cart-product empty">
        <p>Carrito vacío</p>
      </div>
    `
  } else {
    const idProductsSplit = localStorageItems.split(', ')

    //eliminar los id duplicados
    const idProductCard = Array.from(new Set(idProductsSplit))

    idProductCard.forEach(id => {
      products.forEach(product => {
        if(id == product.id) {
          const quantity = countDuplicatesId(id, idProductsSplit)
          const totalPrice = product.price * quantity
          html += `
            <div class="cart-product">
              <img src="${product.image}" alt="${product.name}">
              <div class="cart-product-info">
                <span class="quantity">${quantity}</span>
                <p>${product.name}</p>
                <p>${totalPrice.toFixed(2)}</p>
                <div class="change-quantity">
                  <button>-</button>
                  <button>+</button>
                </div>
                <div class="cart-product-delete">
                  <button>Eliminar</button>
                </div>
              </div>
            </div>
          `
        }
      })
    })
  }
  document.getElementsByClassName('cart-products')[0].innerHTML = html
}

function countDuplicatesId(value, arrayIds) {
  let count = 0
  arrayIds.forEach(id => {
    if(value == id) {
      count++
    }
  })
  return count
}
