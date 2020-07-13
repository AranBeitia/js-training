//getElementsByClassName

let enlaces = document.getElementsByClassName('enlace');
		enlaces = document.getElementsByClassName('enlace')[3];

//CSS
enlaces.style.background = "#88ff00";
enlaces.textContent = "Hello kitty";
console.log(enlaces);

//mezclar querySelector con getElementByClassName
const listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
console.log(listaEnlaces);

const links = document.getElementsByTagName('a');
links[18].style.color ='red';
links[18].textContent = 'Hello kitty satan';
console.log(links);

let arrayEnlaces = Array.from(links);
arrayEnlaces.forEach(function(enlace){
	console.log(enlace.textContent);
});

//querySelectorAll
const enlaces2 = document.querySelectorAll('#principal .enlace');
enlaces2[1].style.background = "#000cff";
enlaces2[1].style.color = "#fff";
console.log(enlaces2);

const enlaces3 = document.querySelectorAll('#principal a:nth-child(odd');
enlaces3.forEach(function(impares){
	impares.style.background = 'red';
	impares.style.color = 'white';
});

console.log(enlaces3);
