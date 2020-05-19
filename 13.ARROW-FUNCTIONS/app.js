//function

let aprendiendo;

aprendiendo = function(){
	console.log('Aprendiendo Javascript');
}

aprendiendo = () => {
	console.log('Aprendiendo Javascript arrow');
}

//Una linea no requiere llave
aprendiendo = () => console.log('aprendiendo JS');
//retorna valor
aprendiendo = () => 'aprendiendo JavaScript';
//retorna objeto
aprendiendo = () => ({aprendiendo: 'Aprendiendo mucho'});
//pasar parametros
aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
//pasando un parametrono es necesario el parentesis()
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
//pasando mas de 1 parametro
aprendiendo = (tech1, tech2) => console.log(`Aprendiendo ${tech1} y ${tech2}`);

console.log(aprendiendo('es6', 'SASS'));

const productos = ['Disco', 'Camisa', 'Guitarra'];
//callback
const letrasProductos = productos.map(function(producto){
	return producto.length;
});
//arrow function sustituye function:
const letrasProducto = productos.map(producto =>	producto.length);

console.log(letrasProducto);

//forEach
productos.forEach(function(item){
	console.log(item);
});

//forEach con arrow function
productos.forEach (tile => {
	console.log(tile);
});
//más simple
productos.forEach(product => console.log(product));