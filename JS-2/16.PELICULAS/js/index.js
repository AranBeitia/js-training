const URL_PATH = 'https://api.themoviedb.org'
const API_KEY = 'c6163ef75c8e34a1d6c622ff9958833e'

document.addEventListener('DOMContentLoaded', () => {
  renderNewMovies()
  renderPopularMovies()
})

const getNewMovies = () => {
  const url = `${URL_PATH}/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`
  
  return fetch(url)
    .then(response => response.json())
    .then(result => result.results)
    .catch(error => console.log(error))
}

const renderNewMovies = async () => {
  const newMovies = await getNewMovies()
  let html = ''

  newMovies.forEach((movie, index) => {
    const { id, title, overview, backdrop_path } = movie
    const urlImage = `https://image.tmdb.org/t/p/original${backdrop_path}`
    const urlMovie = `../movie.html?id=${id}`

    html += `
    <div class="carousel-item ${index === 0 ? 'active' : ''}">
      <img src="${urlImage}" class="d-block w-100" alt="${movie.title}">
      <div class="carousel-caption d-none d-md-block">
        <h5>${title}</h5>
        <p>${overview}</p>
        <a href="${urlMovie}" class="btn btn-primary">Más información</a>
      </div>
    </div>
    `
  })

  html += `
    <a class="carousel-control-prev" href="#carouselNewMovies" role="button" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </a>
    <a class="carousel-control-next" href="#carouselNewMovies" role="button" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Siguiente</span>
    </a>
  `
  document.getElementsByClassName('latest-movies__inner')[0].innerHTML = html
}

const getPopularMovies = () => {
  const url = `${URL_PATH}/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`

  return fetch (url)
  .then(response => response.json())
  .then(result => result.results)
  .catch(error => console.log(error))
}

const renderPopularMovies = async () => {
  const movies = await getPopularMovies()
  let html= ''

  movies.forEach ( (movie, index) => {
    const { id, title, poster_path } = movie
    const moviePoster = `https://image.tmdb.org/t/p/original${poster_path}`
    const urlMovie = `../movie.html?id=${id}`

    if(index < 5) {
      html += `
        <li class="list-group-item popular__item">
          <img src="${moviePoster}" alt="${title}" class="movie__image">
          <h3 class="movie__title">${title}</h3>
          <a href="${urlMovie}" class="btn btn-primary">Ver más</a>
        </li>
      `
    }
  })

  document.getElementsByClassName('popular__list')[0].innerHTML = html
}