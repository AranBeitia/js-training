const URL_PATH = 'https://api.themoviedb.org'
const API_KEY = 'c6163ef75c8e34a1d6c622ff9958833e'
let movie_ID = ''

document.addEventListener('DOMContentLoaded', () => {
  movie_ID = getUrlvars().id
  renderMovieDetails(movie_ID)
})

const getUrlvars = () => {
  let vars = {}
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value){
    vars[key] = value
  })
  return vars
}

const getMoviedetails = () => {
  const url = `${URL_PATH}/3/movie/${movie_ID}?api_key=${API_KEY}&language=es-ES`
  
  return fetch(url)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log(error))
}

const renderMovieDetails = async (movie_ID) => {
  const movieDetails = await getMoviedetails(movie_ID)
  const { backdrop_path, poster_path, title, overview, genres, release_date } = movieDetails
  renderBackground(backdrop_path)
  renderPoster(poster_path, title)
  renderMovieData(title, overview, genres, release_date)
  getTrailer(movie_ID)
}

const renderBackground = (backdrop_path) => {
  const urlBackground = `https://image.tmdb.org/t/p/original${backdrop_path}`
  document.getElementsByClassName('movie-detail')[0].style.backgroundImage = `url('${urlBackground}')`
}

const renderPoster = (poster_path, title) => {
  const urlPoster = `https://image.tmdb.org/t/p/original${poster_path}`
  const html= `<img src="${urlPoster}" alt="${title}" class="img-fluid movie-details__image"/>`
  document.getElementsByClassName('movie-detail__poster')[0].innerHTML = html
}

const renderMovieData = (title, overview, genres, release_date) => {
  const dataSplit = release_date.split('-')
  let htmlGenres = ''

  genres.forEach(genre => {
    htmlGenres += `<li class="list-item">${genre.name}</li>`
  })

  const html = `
    <header class="movie-description__header">
      <h1 class="main-title">${title} <span class="date-any">${dataSplit[0]}</span></h1>
      <span class="movie-detail__teaser" data-bs-toggle="modal" data-bs-target="#video-trailer">Ver más</span>
      <i class="fas fa-play"></i>
    </header>
    <h2>General</h2>
    <p>${overview}</p>
    <h2>Generos</h2>
    <ul>${htmlGenres}</ul>
  ` 
  document.getElementsByClassName('movie-description')[0].innerHTML = html
  console.log(title, overview, genres, release_date)
}

const getTrailer = (movie_ID) => {
  const url = `${URL_PATH}/3/movie/${movie_ID}/videos?api_key=${API_KEY}&language=es-ES`

  fetch (url)
    .then(response => response.json())
    .then(result => { renderTrailer(result) })
    .catch(error => console.log(error))
}

const renderTrailer = (objVideo) => {
  console.log(objVideo)
  let keyVideo = ''

  objVideo.results.forEach(video => {
    if(video.type === 'Trailer' && video.site === 'YouTube') {
      keyVideo = video.key
    }
  })

  let urlIframe = ''
  if(keyVideo !== '') {
    urlIframe = `
      <iframe
        width="100%"
        height="440px"
        src="https://www.youtube.com/embed/${keyVideo}"
        frameborder="0"
        allow="accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture"
        allowfullscreen
      ></iframe>
    `
  } else {
    urlIframe = '<div class="no-trailer">La película no tiene trailer</div>'
  }
  document.getElementsByClassName('modal-body')[0].innerHTML = urlIframe
}
