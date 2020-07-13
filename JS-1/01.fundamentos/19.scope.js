var a = `a`;
let b = `b`;
const c = `c`;

//Scope de la funcion
function funcionScope(){
	var a = `A`;
	let b = `B`;
	const c = `C`;
	console.log(`FUNCION: ` + a, b, c);
}
funcionScope();

//Scope de bloque{}
//Let y const sólo están disponibles en su scope, 
//no así con var. Por eso no usar var
if (true) {
	var a = `AA`;
	let b = `BB`;
	const c = `CC`;
	console.log(`BLOQUE: ` + a, b, c);
}

console.log(`GLOBALES: ` + a, b, c);

//for. Var sobreescribe a global
for (var a = 0; a < 5; a++) {
	console.log(a);
}
//let no sobreescribe b
for (let b = 0; b<5; b++){
  console.log(b);
}

console.log('GLOBALES: ' + a,b,c);
