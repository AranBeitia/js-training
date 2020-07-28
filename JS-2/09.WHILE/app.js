// /* WHILE - DO WHILE */

var i = 0;

while(i < 10) {
/*
  if (i === 3) {
    break
  }*/
  i++
  
  if (i === 5 && i === 2) {
    continue
  }
  console.log('estamos en el indice ' + i)
}

var x = 0;

do {
  console.log(x++);
} while (x < 10)

