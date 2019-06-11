const product1 = 'Pizza',
      precio1 = 30,
      product2 = 'Hamburguesa',
      precio2 = 40;

let html;
/*forma antigua
html = '<ul>' +
        '<li>Orden: ' + product1 + '</li>' +
        '<li>Precio: ' + precio1 + '</li>' +
        '<li>Orden: ' + product2 + '</li>' +
        '<li>Precio: ' + precio2 + '</li>' +
        '<li>Total: ' + (precio2 + precio1) + '</li>' +
        '</ul>';
*/

html = `
      <ul>
        <li>Orden: ${product1}</li>
        <li>Precio: ${precio1}</li>
        <li>Orden: ${product2}</li>
        <li>Orden: ${precio2}</li>
        <li>Total: ${total(precio1, precio2)}</li>
      </ul>`;

      function total(precio1, precio2) {
        return precio1 + precio2;
      }

document.getElementById('app').innerHTML = html;