var nombre = escape('Aran;tza')//para que traduzca a codigo html
console.log(nombre);

document.cookie = 'nombre=Arant;za'
document.cookie = 'apellido=Beitia'

let cookies = document.cookie
console.log(cookies);
