// setItem - Agregar local storage (dura hasta que el usuario borra cache)
localStorage.setItem('nombre','Aran');

// setItem - Agregar session storage (dura hasta que se cierra el navegador)
sessionStorage.setItem('nombre','Aran');

//  getItem - Obtener
const nombre = localStorage.getItem('nombre');
console.log(nombre);

// removeItem - Eliminar local storage 
//localStorage.removeItem('nombre','Aran');
//metodo para limpiar tambien el localStorage
localStorage.clear();