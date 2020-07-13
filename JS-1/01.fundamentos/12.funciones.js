/*** FUNCIONES IIFE***/
function sumar (){

}
sumar();

//sería lo mismo que:
(function(){
  console.log('Creando IIFE');
})();

(function (tecnologia){
  console.log(`Aprendiendo ${tecnologia}`);
})('JavaScript');//el paréntesis es lo que llama a la función

//Métodos de propiedad
//Cuando una función va dentro de un objeto

const musica = {
  reproducir: function(id){
    console.log(`Reproducir cancion nº${id}`);
  },
  pausar: function(){
    console.log(`Pausar musica`);
  }
}

//los métodos también pueden crearse / guardarse fuera del objeto
musica.borrar = function (id){
  console.log(`Borrar cancion nº${id}`);
}
musica.reproducir(30);
musica.pausar();
musica.borrar(2);

//Fucion try catch para controlar errores
obtenerClientes();
algo();//error, así que detiene la ejecución del programa

function obtenerClientes(){
  console.log(`Descargando...`);

  setTimeout(function(){
    console.log('Completo');
  }, 3000);
}

//de esta forma si hay error, seguirá ejecutando
//solo para funciones que no sabemos si van a tener datos
try {
  algo();
}catch(error){
  console.log(error);
}finally{
  console.log(`No le importa, ejecuta el codigo de todos modos`);
}

obtenerClientes();
