//TRAVERSING DE PADRE A HIJO

// const nav = document.querySelector("#principal");

// console.log(nav.nodeName); //los nodos son las etiquetad HTML
// console.log(nav.children[0].nodeName);
// console.log(nav.children[0].nodeType);
// console.log((nav.children[0].textContent = "enlace ss"));

// /**************
// * nodeType devuelve numeros:
//   1 = Elementos
//   2 = Atributos
//   3 = Text Node
//   8 = Comentarios
//   9 = Documentos
//   10 = doctype
// ***************/

// const barra = document.querySelector(".barra");
// //podemos acceder todo lo profundo que queramos en el nodo
// console.log(barra.children[0].children[0].children);

// const card = document.querySelectorAll(".card");
// console.log(card[0].lastChild);
// console.log(card[0].lastElementChild);
// console.log(card[0].firstElementChild);

// //TRAVERSING DE HIJO A PADRE

// const enlaces = document.querySelectorAll(".enlace");
// //elemento padre del nodo
// console.log(enlaces[0].parentNode);
// console.log(enlaces[0].parentElement); //recomendado
// //podemos subir todo lo que queramos
// console.log(enlaces[0].parentElement.parentElement);

// const cursos = document.querySelectorAll(".card");
// console.log(
//   (cursos[0].parentElement.parentElement.parentElement.children[0].textContent =
//     "Kitty satanasa")
// );

// //SIBILING
// const enlaces2 = document.querySelectorAll('.enlace');
// //recorre los hermanos del nodo
// console.log(enlaces2[4].previousSibling);//devuelve espacio en blanco
// console.log(enlaces2[4].previousElementSibling.previousElementSibling);
// console.log(enlaces2[2].nextElementSibling.nextElementSibling.parentElement.children[4]);