import './style.css';
import { getComics, getComicDetails } from './api/comicAPI';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Wildly Imaginative</h1>
  <h2>Let your imagination run wild</h2>
  <select id="comic-select">
  <option value="">Pick a Comic Category</option>
  </select>
  <div id="details"></div>
`
//creating a function to display the information from the comicAPI
async function showComics() {
 
  const list = document.querySelector<HTMLDivElement>(`#list`)!
  const select = document.querySelector<HTMLSelectElement>(`#comic-select`)!
  //try to get the comics and throw an 
  // error that is visable on the page if there is an error
  try {
    
    const comics = await getComics();

    //first comic will come first, 
    //sorting from smalles number to largest number
    comics.sort((a,b) => (a.episode ?? 0) - (b.episode ?? 0));

    select.innerHTML = `<option value="">Pick a Comic</option>` + 
    comics.map(comic => `<option value="${comic.comicId}">${comic.episode}. ${comic.title}</option>`).join(' ');

  } catch (error) {

    list.innerHTML = `<p>Looks like the kids ran off with the page!</p><p>Please try again later</p>`
    
  }

  getComicDetails(1).then(console.log);

}

showComics();