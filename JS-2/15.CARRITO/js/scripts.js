const CARD_PRODUCTS = 'cartProductsId'

document.addEventListener('DOMContentLoaded', () => {
  loadProducts()
  loadProductCard()
})

function getProductsDB() {
  const url = './dbProducts.json'
  return fetch(url)
  .then(response =>  response.json())
  .then(result =>  result)
  .catch(err => console.log(err))
}

async function loadProducts () {
  const products = await getProductsDB()
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
          <button type="button" class="btn btn-primary btn-cart" onClick="addProductCart(${product.id})">Añadir al carrito</button>
        </div>
      </div>
    </div>
    `
  })
  document.getElementsByClassName('products')[0].innerHTML = html
}

function openCloseCart () {
  const constainerCart = document.getElementsByClassName('cart-products')[0]

  constainerCart.classList.forEach( item => {
    if (item === 'hidden') {
      constainerCart.classList.remove('hidden')
      constainerCart.classList.add('active')
    }

    if (item === 'active') {
      constainerCart.classList.remove('active')
      constainerCart.classList.add('hidden')
    }
  })
  console.log(constainerCart.classList)
}

function addProductCart (idProduct) {
  let arrayProductId = []
  let localStorageItems = localStorage.getItem(CARD_PRODUCTS)

  if(localStorageItems === null) {
    arrayProductId.push(idProduct)
    localStorage.setItem(CARD_PRODUCTS, arrayProductId)
  } else {
    let productsId = localStorage.getItem(CARD_PRODUCTS)

    if (productsId.length > 0) {
      productsId += ',' + idProduct
    } else {
      productsId = productId
    }
    localStorage.setItem(CARD_PRODUCTS, productsId)
  }
  loadProductCard()
}

async function loadProductCard () {
  const products = await getProductsDB()

  //Convertimos el resultado de localStorage en un array
  const localStorageItems = localStorage.getItem(CARD_PRODUCTS)
  let html = ''

  if (!localStorageItems) {
    html = `
      <div class="cart-product empty">
        <p>Carrito vacío</p>
      </div>
    `
  } else {
    const idProductsSplit = localStorageItems.split(',')
    //Eliminar ids duplicados
    const idProductsCart = Array.from(new Set(idProductsSplit))

    idProductsCart.forEach(id => {
    products.forEach(product => {
      if(id == product.id) {
        const quantity = countDuplicatesID(id, idProductsSplit)
        const totalPrice = product.price * quantity
        html += `
          <div class="cart-product">
            <img src="${product.image}" alt="${product.name}" />
            <div class="cart-product-info">
              <span class="quantity">${quantity}</span>
              <p>${product.name}</p>
              <p>${totalPrice.toFixed(2)}</p>
              <div class="change-quantity">
                <button onClick="decreaseQuantity(${product.id})">-</button>
                <button onClick="increaseQuantity(${product.id})">+</button>
              </div>
              <div class="cart-product-delete">
                <button onClick="deleteProductCart(${product.id})">Eliminar</button>
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

function deleteProductCart (idProduct) {
  const idProductsCart = localStorage.getItem(CARD_PRODUCTS)
  const arrayIdProductsCart = idProductsCart.split(',')
  const resultIdDelete = deleteAllIds(idProduct, arrayIdProductsCart)

  if (resultIdDelete) {
    let count = 0
    let idsString = ''

    resultIdDelete.forEach(id => {
      count ++
      if(count < resultIdDelete.length) {
        idsString += id + ','
      } else {
        idsString += id
      }
    })
    localStorage.setItem(CARD_PRODUCTS, idsString)
  }
  const idsLocalStorage = localStorage.getItem(CARD_PRODUCTS)
  if(!idsLocalStorage) {
    localStorage.removeItem(CARD_PRODUCTS)
  }
  loadProductCard()
}

function increaseQuantity(idProduct) {
  const idProductsCart = localStorage.getItem(CARD_PRODUCTS)
  const arrayIdProductsCart = idProductsCart.split(',')
  arrayIdProductsCart.push(idProduct)

  let count = 0
  let idsString =''
  arrayIdProductsCart.forEach(id => {
    count++
    if (count < arrayIdProductsCart.length) {
      idsString += id + ','
    } else {
      idsString += id
    }
  })
  localStorage.setItem(CARD_PRODUCTS, idsString)
  loadProductCard()
}

function decreaseQuantity(idProduct) {
  const idProductsCart = localStorage.getItem(CARD_PRODUCTS)
  const arrayIdProductsCart = idProductsCart.split(',')

  const deleteItem = idProduct.toString()
  let index = arrayIdProductsCart.indexOf(deleteItem)
  if (index > -1) {
    arrayIdProductsCart.splice(index, 1)
  }

  let count = 0
  let idString = ''
  arrayIdProductsCart.forEach(id => {
    count ++
    if(count < arrayIdProductsCart.length) {
      idString += id + ','
    } else {
      idString += id
    }
  })
  localStorage.setItem(CARD_PRODUCTS, idString)
  loadProductCard()
 
}

function countDuplicatesID (value, arrayIds) {
  let count = 0
  arrayIds.forEach(id => {
    if(value == id) {
      count ++
    }
  })
  return count
}

function deleteAllIds (id, arrayIds) {
  return arrayIds.filter(itemId => {
    return itemId != id
  })
}
