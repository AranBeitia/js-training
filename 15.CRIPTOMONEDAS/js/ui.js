class Interfaz {
	mostrarMensaje(mensaje, clases){
		const div = document.createElement('div');
		div.className = clases;
		div.appendChild(document.createTextNode(mensaje));
		console.log(div);

		//seleccionar mensajes
		const divMensaje = document.querySelector('.mensajes');
		//mostrar contenido
		divMensaje.appendChild(div);
		setTimeout(() => {
			document.querySelector('.mensajes div').remove();
		}, 3000);
	}
}