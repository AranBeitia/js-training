const URL_PATH = 'https://api.themoviedb.org'
const API_KEY = 'c6163ef75c8e34a1d6c622ff9958833e'

document.addEventListener('DOMContentLoaded', () => {
  let { page } = getUrlvars()
  page == undefined ? page = 1 : null
  renderNewsMovies(page)
  renderControls(page)
})

const getUrlvars = () => {
  let vars = {}
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value
  })
  return vars
}

const getNewsMovies = (page) => {
  const url = `${URL_PATH}/3/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=${page}`

  return fetch(url)
    .then(response => (response.json()))
    .then(result => result.results)
    .catch(error => console.log(error))
}

const renderNewsMovies = async (page) => {
  const movies = await getNewsMovies(page)
  let html = ''

  movies.forEach(movie => {
    const { id, original_title, poster_path } = movie
    const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
    const urlMoreInfo = `movie.html?id=${id}`

    html += `
      <div class="col-3 pb-3">
        <a href="${urlMoreInfo}">
          <div class="card">
            <img src="${imgUrl}" class="card-img-top" alt="${original_title}">
            <div class="card-body">
              <h5 class="card-title">${original_title}</h5>
            </div>
          </div>
        </a>
      </div>
    `
  })
  document.getElementsByClassName('list-cards')[0].innerHTML = html
}

const renderControls = (page) => {
  const baseUrlPage = 'now-playing.html?page='
  const pageNumber = parseInt(page)
  const previous = pageNumber - 1
  const next = pageNumber + 1

  let html = ''

  if(page == 1) {
    html = `
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#">
            <i class="fas fa-chevron-left"></i>
          </a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="${baseUrlPage + "1"}">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="${baseUrlPage + "2"}">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="${baseUrlPage + "3"}">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    `
  } else {
    html = `
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="${baseUrlPage + previous}">
            <i class="fas fa-chevron-left"></i>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="${baseUrlPage + previous}">${previous}</a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="${baseUrlPage + page}">${page}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="${baseUrlPage + next}">${next}</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="${baseUrlPage + next}">
            <i class="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    `
  }
  document.getElementsByClassName('navigation')[0].innerHTML = html
}