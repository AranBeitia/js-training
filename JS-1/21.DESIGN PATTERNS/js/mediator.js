const Vendedor = function (nombre) {
	this.nombre = nombre
	this.sala = null
}
const Comprador = function (nombre) {
	this.nombre = nombre
	this.sala = null
}
Vendedor.prototype = {
	oferta: function(articulo, precio) {
		console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`)
	},
	vendido: function(comprador) {
		console.log(`Vendido a ${comprador} (sonido de mazo) `)
	}
}

Comprador.prototype = {
	oferta: function (mensaje, comprador) {
		console.log(`${comprador.nombre}: ${mensaje}`)
	}
}
//sería el mediador
const Subasta = function () {
	let compradores = {}
	return {
		registrar: function(usuario) {
			compradores[usuario.nombre] = usuario
			usuario.sala = this
			console.log(compradores)
		}
	}
}

//instanciar las clases
const juan = new Comprador('Juan')
const aran = new Comprador('Aran')
const karen = new Comprador('Karen')

const vendedor = new Vendedor('Vendedor')

const subasta = new Subasta()
subasta.registrar(juan)
subasta.registrar(aran)
subasta.registrar(karen)

vendedor.oferta('Mustang 1966', 3000)
juan.oferta(3500, juan)
aran.oferta(4000, aran)
karen.oferta(10000,karen)
vendedor.vendido(karen.nombre)