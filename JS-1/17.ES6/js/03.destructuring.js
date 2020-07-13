//Destructuring a funciones

function reserva (completo, opciones) {

	/* forma vieja de hacerlo */
	// opciones = opciones || {};
	// let metodo = opciones.metodoPago,
	// 		cantidad = opciones.cantidad,
	// 		dias = opciones.dias;

	/* forma nueva de hacerlo */
	let { metodoPago, cantidad, dias} = opciones;

	console.log(metodoPago, cantidad, dias);
}

function nuevaReserva(completo, 
	{
		metodoPago = 'efectivo', 
		cantidad = 0, 
		dias = 0
	} = {}) 
{
	if(completo){
		console.log('Proceder a logear...');
	} else {
		console.log('Abandonar');
	}
}

//
reserva (
	true,
	{
		metodoPago: 'tarjeta',
		cantidad: 2000,
		dias: 3
	}
)

nuevaReserva(
	true,
	{
		metodoPago: 'tarjeta',
		cantidad: 5000,
		dias: 5
	}
)

