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
  const { backdrop_path, poster_path, title} = movieDetails
  renderBackground(backdrop_path)
  renderPoster(poster_path, title)
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