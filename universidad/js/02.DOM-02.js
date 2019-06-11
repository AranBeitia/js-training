//getElementsByClassName
let enlaces = document.getElementsByClassName("enlace")[2];

//enlaces = enlaces[3];
//css
enlaces.style.background = "#333";
enlaces.textContent = "Nuevo enlace";
console.log(enlaces);

//mezclar querySelector con getElementByClassName
const listaEnlaces = document
  .querySelector("#principal")
  .getElementsByClassName("enlace");

console.log(listaEnlaces);

const links = document.getElementsByTagName("a");
links[18].style.color = "red";
links[18].textContent = "nuevo enlace kitty";

console.log(links);

let enlaces2 = Array.from(links);

enlaces2.forEach(function(enlace) {
  console.log(enlace.textContent);
});
//console.log(enlaces2);

//querySelectorAll
const enlaces3 = document.querySelectorAll("#principal .enlace");

console.log(enlaces3);

const enlaces4 = document.querySelectorAll("#principal a:nth-child(odd)");

enlaces4.forEach(function(impares){
  impares.style.backgroundColor = 'red';
  impares.style.color = 'white';
});

console.log(enlaces4);
