// For loops
for (let i = 0; i < 10; i++) {
  console.log(`Numero: ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log(`Voy por el 5`);
    continue; //con esto continúa el loop en su orden
  }
  console.log(`Numero: ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(`El numero ${i} es par`);
  } else {
    console.log(`El numero ${i} es impar`);
  }
}

const arrayProductos = ["Camisa", "Pantalon", "Jersey", "Vestido"];

for (let i = 0; i < arrayProductos.length; i++) {
  console.log(`Tu producto ${arrayProductos[i]} fue agragado`);
}

//While
/*let i = 0;

while (i < 10) {
  if (i === 5) {
    console.log("Cinco");
    i++;
    break;
  }
  console.log(`Numero: ${i}`);
  i++;
}*/
/*
const musica = ['cancion1', 'cancion2', 'cancion3'];

let i = 0;
while (i < musica.length) {
  console.log(`Reproduciendo la cancion: ${musica[i]}`);
  i++;
}*/

//Do while
// corre la condición una vez sin importar si se cumple 
let i = 1000;
do {
  console.log(`Numero: ${i}`);
  i++;
}while(i<10);