const header = document.querySelector('.header');
const headerH1 = document.querySelector('.header-h1');
const headerH2 = document.querySelector('.header-h2');
const imagMove = document.querySelector('.imag-move');
const pargragh = document.querySelector('.pargragh');

const searchParam = new URLSearchParams(window.location.search);
const movieId = searchParam.get('q') || 162;

fetch(`/api/getmoveInfo/${movieId}`)
  .then((response) => response.json())
  .then((result) => {
    header.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${result.backdrop_path})`;
    headerH1.textContent = result.original_title;
    headerH2.textContent = result.tagline;
    imagMove.src = `https://image.tmdb.org/t/p/w400${result.poster_path}`;
    pargragh.textContent = result.overview;
  });
