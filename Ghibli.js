const app = document.getElementById('root');
const modalContainer = document.getElementById('overlay');
const bigTitle = document.getElementById('title');
const synopsis = document.getElementById('summary');
const logo = document.createElement('img');
logo.src = 'logo.png';
const url = 'https://ghibliapi.herokuapp.com/films';
const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(logo);
app.appendChild(container);

pageLoad();

async function pageLoad(){
  try {
    const response = await fetch(url);
    const data = await response.json();
    create(data);
  }catch(e){
    console.log(e)
  }
}


