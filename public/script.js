const input = document.querySelector('.search');
const list = document.querySelector('.list');
const header = document.querySelector('.header');
const headerH1 = document.querySelector('.header-h1');
const pargragh = document.querySelector('.pargragh');
const domHandlerAutoComplete = (data) => {
  const lowerCase = data.map((ele) => ele.title.toLowerCase());
  lowerCase.forEach((ele) => {
    const li = document.createElement('li');
    li.textContent = ele;
    li.className = 'li';
    list.appendChild(li);
    list.style.display = 'block';
    li.addEventListener('click', () => {
      list.style.display = 'none';
      input.value = li.textContent;
    });
  });
};
document.body.onclick = (e) => {
  if (!e.target.matches('.search')) {
    list.style.display = 'none';
  }
};
input.addEventListener('input', (e) => {
  // eslint-disable-next-line no-undef
  if (e.target.value) {
    fetch('/api/autoComplete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: e.target.value }),
    })
      .then((response) => response.json()).then((result) => domHandlerAutoComplete(result));
  // eslint-disable-next-line no-empty
  } else {
    list.style.display = 'none';
  }
});
const getLastMoves = () => {
  fetch('/api')
    .then((response) => response.json()).then((result) => { 
      header.style.backgroundImage = `url(${'https://image.tmdb.org/t/p/w500' + result.backdrop_path})`
      pargragh.textContent = result.overview;
      headerH1.textContent = result.original_title;
    })
    .catch(console.log);
};
getLastMoves();
