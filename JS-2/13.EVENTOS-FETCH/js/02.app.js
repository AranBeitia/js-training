/* PETICIONES FETCH */

function getPeliculasPopulares() {
  const url = 'https://api.themoviedb.org/3/movie/popular?api_key=6ab99dee1a49db72df4b11be39bc5062&language=es-ES&page=1'

  fetch(url).then(response => {
    return response.json()
  }).then(result => {
    console.log(result);
    const peliculas = result.results

    peliculas.forEach(pelicula => {
      const { title, vote_count, vote_average, poster_path } = pelicula
      console.log(title);
    });
  })
}

getPeliculasPopulares()