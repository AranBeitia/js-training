// Crear objeto {}

const persona = {
  nombre: 'Miguel',
  apellido: 'Martinez',
  profesion: 'Diseñador',
  email: 'correo@correo.com',
  edad: 20, //podemos mezclar strings, enteros, objetos, arrays, funciones
  musica: ['Punk', 'Psycho', 'jazz'],
  hogar: {
    ciudad: 'Bilbao',
    pais: 'Pais Vasco'
  },
  nacimiento: function(){
    return new Date().getFullYear() - this.edad;
  }
}

const persona2 = {
  nombre: 'Miguel',
  apellido: 'Martinez',
  profesion: 'Diseñador',
  email: 'correo@correo.com',
  edad: 30, //podemos mezclar strings, enteros, objetos, arrays, funciones
  musica: ['Punk', 'Psycho', 'jazz'],
  hogar: {
    ciudad: 'Bilbao',
    pais: 'Pais Vasco'
  },
  nacimiento: function(){
    return new Date().getFullYear() - this.edad;
  }
}

persona.musica.push('Soul');
console.log(persona);
console.log(persona.hogar.pais);
console.log(persona.nacimiento());

console.log(persona2.nacimiento());

