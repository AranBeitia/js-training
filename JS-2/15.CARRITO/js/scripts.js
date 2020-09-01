const CARD_PRODUCTS = 'cartProductsId'

document.addEventListener('DOMContentLoaded', () => {
  loadProducts()
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
          <button type="button" class="btn btn-primary btn-cart" onClick="idProduct(${product.id})">Añadir al carrito</button>
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

function idProduct(idProduct) {
  let arrayProductId = []
  let localStorageItems = localStorage.getItem(CARD_PRODUCTS)

  if(localStorageItems === null) {
    arrayProductId.push(idProduct)
    localStorage.setItem(CARD_PRODUCTS, arrayProductId)
  } else {
    let productsId = localStorage.getItem(CARD_PRODUCTS)
    if(productsId.length > 0) {
      productsId += ',' + idProduct
    } else {
      productsId = productId
    }
    localStorage.setItem(CARD_PRODUCTS, productsId)
  }
  console.log(localStorageItems);
}
