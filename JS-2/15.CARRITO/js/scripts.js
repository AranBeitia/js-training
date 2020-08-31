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
  console.log(products);
}