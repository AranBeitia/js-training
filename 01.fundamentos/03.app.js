let valor;
//no es necesario declarar el tipo de variable
valor = "Cadena de texto"; //string
valor = 20; //number
valor = true; //boolean
valor = null; //null
valor = undefined; //undefined
valor = {
  nombre: "Aran" //object
};

valor = "Aran";
//todos los numeros son de tipo number, ni float ni integer
valor = 20;
valor = 20.2;
valor = -30;
valor = "20"; //string

/*TIPO PRIMITIVOS*/
//booleanos
valor = true;
valor = false;

// null
valor = null; //tipo objeto

// symbol (nuevo en js)
valor = Symbol("Simbolo");

/*TIPO OBJETO O DE REFERENCIA*/
//array y objeto
valor = [1, 2, 3, 4];
valor = {
  nombre: "Aran",
  profesion: "Desarrollador web"
};

// fecha
valor = new Date();

console.log(typeof valor);
