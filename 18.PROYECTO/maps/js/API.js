class API {
  async obtenerDatos() {
    const total = 1000;
    //obtener los datos
    const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

    //retornar datos como jsom
    const respuestaJSON = await datos.json();

    return {
      respuestaJSON
    }
  }
}