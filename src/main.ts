import './style.css';
import { getComics, getComicDetails } from './api/comicAPI';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Wildly Imaginative</h1>
  <h2>Let your imagination run wild</h2>
  <select id="comic-select" hidden>
  <option value="">Pick a Comic</option>
  </select>
  <div id="details"></div>
`
//creating a function to display the information from the comicAPI
async function showComics() {
 
  //these consts are finding the different elements 
  // that are inside of app.innerHTML so that the 
  // information can be added dynamically
  const select = document.querySelector<HTMLSelectElement>(`#comic-select`)!
  const detailsDiv = document.querySelector<HTMLDivElement>(`#details`)!
  //try to get the comics and throw an 
  // error that is visible on the page if there is an error
  try {
    
    const comics = await getComics();

    //first comic will come first, 
    //sorting from smallest number to largest number
    comics.sort((a,b) => (a.episode ?? 0) - (b.episode ?? 0));

    select.innerHTML = `<option value="">Pick a Comic</option>` + 
    comics.map(comic => `<option value="${comic.comicId}">${comic.episode}. ${comic.title}</option>`).join(' ');

    //telling the code that the select is not hidden because 
    //we have found the information. If the information is 
    // not found the select dropdown disappears for UX reasons
    // 'hidden' is a built-in boolean
    select.hidden = false;

    //change is the event name. It is saying 
    // "when the selected option changes run this"
    select.addEventListener('change', async () => {

      const details = await getComicDetails(Number(select.value));

      detailsDiv.innerHTML = `
        <h3>${details.comic.title}</h3>
        <div class="placeholder">Comic Coming Soon</div>
        <p>${details.comic.description ?? 'No Description Yet'}</p>
      `;
    });

  } catch (error) {

    detailsDiv.innerHTML = `<p>Looks like the kids ran off with the page!</p><p>Please try again later</p>`
    
  }

  //line of code used for testing 
  // to make sure the comics are coming through 
  // if for some reason there are errors on upload
  //commented out for now but can uncomment if needed.
  // getComicDetails(1).then(console.log);

}

showComics();