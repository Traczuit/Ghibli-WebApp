function create(data){

  data.forEach(movie => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('id', movie.id);
    card.addEventListener('click', () => {
      movieModal(movie.id);
    })
    
    const h1 = document.createElement('h1');
    h1.textContent = movie.title;

    const p = document.createElement('p');
    movie.description = movie.description.substring(0, 300);
    p.textContent = `${movie.description}...`;

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);
  });
    
}

async function movieModal(id) {
  var thisMovie = `${url}/${id}`;
  try {
    const response = await fetch(thisMovie);
    const data = await response.json();
    modalContainer.style.display = 'flex';
    modalContainer.addEventListener('click', (e) => {
      if(e.target === modalContainer){
        modalContainer.style.display = 'none';
      }
    })
    bigTitle.textContent = data.title;
    synopsis.textContent = `${data.description}`;
  }
    
  catch(e){
    console.log(e)
  };
}
