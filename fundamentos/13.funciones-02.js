/*** FUNCIONES IIFE***/
function sumar(){

}
sumar();

//sería lo mismo que:
(function sumar(){

})();

(function(tecnología) {
  console.log(`Aprendiendo ${tecnología}`);
})('JavaScript');//el paréntesis es lo que llama a la función

//Métodos de propiedad
//Cuando una función va dentro de un objeto

const musica = {
  reproducir: function(id){
    console.log(`Reproducir canción nº ${id}`);
  },
  pausar: function(){
    console.log(`Pausar la música`);
  }
}
//los métodos también pueden crearse / guardarse fuera del objeto
musica.borrar = function(id) {
  console.log(`Borrar canción nº ${id}`)
}
musica.reproducir(30);
musica.pausar();
musica.borrar(2);

//Fucion try catch para controlar errores

//algo();//error, así que detiene la ejecución del programa

//de esta forma si hay error, seguirá ejecutando
//solo para funciones que no sabemos si van a tener datos
try {
  algo();
} catch (error) {
  console.log(error);
} finally{
  console.log('No le importa, ejecuta de todos modos');
}

function obtenerClientes() {
  console.log('Descargando...');

  setTimeout(function() {
    console.log('Completo');
  }, 3000);
}
obtenerClientes();
