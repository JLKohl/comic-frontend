import './style.css';
import { getComics } from './api/comicAPI';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Wildly Imaginative</h1>
  <h2>Let your imagination run wild</h2>
  <div id="list"></div>
`
//creating a function to display the information from the comicAPI
async function showComics() {
  const comics = await getComics();

  //first comic will come first, 
  //sorting from smalles number to largest number
  comics.sort((a,b) => (a.episode ?? 0) - (b.episode ?? 0));

  const list = document.querySelector<HTMLDivElement>(`#list`)!

  list.innerHTML = comics.map(comic => `<p>${comic.episode}. ${comic.title}</p>`).join(' ');

}

showComics();