let valor;
//no es necesario declatar el tipo de variable
// valor = 'Cadena de texto';
// valor = 20;
// valor = true;
// valor = null;
// valor = undefined;
// valor = {
//   nombre: 'Aran'
// }

valor = 'Aran';
//todos son de tipo number, ni float ni integer
valor = 20;
valor = 20.20;
valor = -30;
valor = "20";//string

/*TIPO PRIMITIVOS*/
//booleanos
valor = true;
valor = false;

// null
valor = null;//tipo objeto

// symbol (nuevo en js)
valor = Symbol('Simbolo');

/*TIPO OBJETO O DE REFERENCIA*/
//array y objeto
valor = [1, 2, 3, 4];
valor = {
  nombre: 'Aran',
  profesion: 'Desarrollador web'
}

// fecha
valor = new Date();

console.log(typeof valor);