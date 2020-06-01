//exportar variables
export const nombreEmpresa = 'Init Services';
export let ahorro = 2000000000000;
export const categoria = 'Aprendizaje';

//exportar funciones
export function mostrarInformacion(nombre, ahorro, categoria) {
	return `Cliente ${nombre} - Ahorro ${ahorro} - Categoria: ${categoria}`
}
