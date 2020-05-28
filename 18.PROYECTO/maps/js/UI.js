class UI {
  constructor() {
    //instancias la API
    this.api = new API();

    //crear los markers con layerGroup
    this.markers = new L.layerGroup();

    // Iniciar el mapa
    this.mapa = this.inicializarMapa();
  }

  inicializarMapa() {
    // Inicializar y obtener la propiedad del mapa
    const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
    const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; ' + enlaceMapa + ' Contributors',
      maxZoom: 18,
    }).addTo(map);
    return map;
  }

  mostrarEstablecimientos() {
    this.api.obtenerDatos()
      .then(datos => {
        const resultado = datos.respuestaJSON.results;

        //ejecutar la funcion para mostrar los pines
        this.mostrarPines(resultado);
      })
  }

  mostrarPines(datos) {
    //limpiar los markers
    this.markers.clearLayers();

    //recorrer los establecimientos
    datos.forEach(dato => {
      //destructuring
      const { latitude, longitude, calle, regular, premium } = dato;

      //crear popup
      const opcionesPopUp = L.popup()
        .setContent(
          `
            <p>Calle: ${calle}</p>
            <p><strong>Regular: </strong>${regular}</p>
            <p><strong>Premium: </strong>${premium}</p>
          `
        );

      //agregar el pin
      const marker = new L.marker([
        parseFloat(latitude),
        parseFloat(longitude)
      ]).bindPopup(opcionesPopUp);

      this.markers.addLayer(marker);

    });

    this.markers.addTo(this.mapa);
  }

// Obtiene las sugerencias de la REST API
  obtenerSugerencias(busqueda){
    this.api.obtenerDatos()
    .then(datos => {
      //obtener los datos
      const resultados = datos.respuestaJSON.results;

      //enviar el JSON y la busqueda para el filtrado
      this.filtrarSugerencias(resultados, busqueda);
    })

  }
  //filtra las sugerencias en base al input
  filtrarSugerencias(resultados, busqueda) {
    //filtrar con .filter
    const filtro = resultados.filter(filtro => filtro.calle.indexOf(busqueda) !== -1);
    
    //mostrar los pines
    this.mostrarPines(filtro);
  }
}