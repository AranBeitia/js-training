// También se le conoce como suscriptor-publicador

let observer = {
	obtenerOfertas: function (callback) {
		if(typeof callback === "function") {
			this.subscribers[this.subscribers.length] = callback
		}
	},
	cancelarOfertas: function(callback) {
		for (let i = 0; i < this.subscribers.length; i++) {
			if(this.subscribers[i] === callback) {
				delete this.subscribers[i];
			}
		}
	},
	publicarOferta: function(oferta) {
		for (let i = 0; i < this.subscribers.length; i++) {
			if(typeof this.subscribers[i] === 'function') {
				this.subscribers[i](oferta)
			}
		}
	},
	crear: function(objeto) {
		for (let i in this) {
			if(this.hasOwnProperty(i)) {
				objeto[i] = this[i]
				objeto.subscribers = []
			}
		}
	}
}

//Vendedores
const udemy = {
	nuevoCurso: function() {
		const curso = 'Un nuevo curso de JavaScript'
		this.publicarOferta(curso)
	}
}

const facebook = {
	nuevoAnuncio: function() {
		const oferta = 'Comprar un celular'
		this.publicarOferta(oferta)
	}
}

//crear los publicadores
observer.crear(udemy)
observer.crear(facebook)

const aran = {
	compartir: function(oferta) {
		console.log('Aran dice: Excelente oferta! ' + oferta)
	}
}

const karen = {
	interesa: function(oferta) {
		console.log('Karen dice: Me interesa la oferta de ' + oferta)
	}
}

udemy.obtenerOfertas(aran.compartir)
udemy.obtenerOfertas(karen.interesa)
udemy.nuevoCurso()
udemy.cancelarOfertas(karen.interesa)
udemy.nuevoCurso()


facebook.obtenerOfertas(karen.interesa)
facebook.obtenerOfertas(aran.compartir)
facebook.nuevoAnuncio()