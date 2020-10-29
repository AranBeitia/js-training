
document.addEventListener('DOMContentLoaded', () => {
  loadProducts()
})

function getProductsDB () {
  const URL = './dbProducts.json'

  return fetch(URL)
  .then(response => response.json())
  .then(result => result)
  .catch(err => console.log(err))
}

async function loadProducts () {
  const products = await getProductsDB()

  let html = ''

  products.forEach (product => {
    html += `
    <div class="col-3 product-container">
      <div class="card product">
        <img src="${product.image}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.extraInfo}</p>
          <p class="card-text">${product.price} € / Unidad</p>
          <button type="button" class="btn btn-primary btn-cart" onClick="">Añadir al carrito</button>
        </div>
      </div>
    </div>
    ` 
  })

  document.getElementsByClassName('products')[0].innerHTML = html

  console.log(products);
}

function openCloseCart () {
  const cartProducts = document.getElementsByClassName('cart-products')[0]

  cartProducts.classList.forEach(item => {
    if (item === 'hidden') {
      cartProducts.classList.remove('hidden')
      cartProducts.classList.add('active')
    }

    if(item === 'active') {
      cartProducts.classList.remove('active')
      cartProducts.classList.add('hidden')
    }
  })
  console.log(cartProducts.classList)

}




















// const CARD_PRODUCTS = "cartProductsId"

// document.addEventListener('DOMContentLoaded', () => {
//   loadProducts()
// })

// function getProductsDB() {
//   const url = './dbProducts.json'
//   return fetch(url)
//   .then(response =>  response.json())
//   .then(result =>  result)
//   .catch(err => console.log(err))
// }

// async function loadProducts () {
//   const products = await getProductsDB()
//   let html = ''
//   products.forEach(product => {
//     html += `
//     <div class="col-3 product-container">
//       <div class="card product">
//         <img src="${product.image}" class="card-img-top" alt="${product.name}">
//         <div class="card-body">
//           <h5 class="card-title">${product.name}</h5>
//           <p class="card-text">${product.extraInfo}</p>
//           <p class="card-text">${product.price} € / Unidad</p>
//           <button type="button" class="btn btn-primary btn-cart" onClick="addProduct(${product.id})">Añadir al carrito</button>
//         </div>
//       </div>
//     </div>
//     `
//   })
//   document.getElementsByClassName('products')[0].innerHTML = html
// }

// function openCloseCart () {
//   const constainerCart = document.getElementsByClassName('cart-products')[0]

//   constainerCart.classList.forEach( item => {
//     if (item === 'hidden') {
//       constainerCart.classList.remove('hidden')
//       constainerCart.classList.add('active')
//     }

//     if (item === 'active') {
//       constainerCart.classList.remove('active')
//       constainerCart.classList.add('hidden')
//     }
//   })
//   console.log(constainerCart.classList)
// }

// function addProductCart (idProduct) {

// }
