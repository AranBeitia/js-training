const comprarBoleto = (function () {
	//privado
	let evento = 'Conferencia JS 2020';
	let precio = 200;

	//publico
	return {
		mostrarBoleto: function(){
			console.log(evento)
		}
	}
})();

comprarBoleto.mostrarBoleto();

//no está definida la variable porque es privada (encima del return)
console.log(precio);
