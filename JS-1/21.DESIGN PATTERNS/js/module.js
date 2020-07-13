const comprarBoleto = (function () {
	//privado
	let evento = 'Conferencia JS 2020';
	let precio = 200;

	const adquirirBoleto = () => {
		const elemento = document.createElement('p');
		elemento.textContent = `Comprado boleto para: ${evento}`;
		document.querySelector('#app').appendChild(elemento);
	}

	//publico
	return {
		mostrarBoleto: function(){
			adquirirBoleto();
			// console.log(evento);
			// console.log(precio);
		}
	}
})();

comprarBoleto.mostrarBoleto();
console.log(comprarBoleto.evento);

//no está definida la variable porque es privada (encima del return)
// console.log(precio);

const comprarEntrada = (function() {
	//privado
	let evento = 'Conferencias CSS 2020';
	const adquirirEntrada = () => {
		const item = document.createElement('p');
		item.textContent = `Comprando entrada para: ${evento}`;
		document.querySelector('#app').appendChild(item);
	}

	//publico
	return {
		mostrarEntrada: function(){
			adquirirEntrada()
		}
	}
})();

comprarEntrada.mostrarEntrada();
console.log(comprarEntrada.evento)
