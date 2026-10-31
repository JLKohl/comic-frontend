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

  let dots = 0;

  const loading = setInterval(() => {
    dots = (dots + 1) % 4;
    detailsDiv.innerHTML = `<p>Loading${'.'.repeat(dots)}</p>`;
  }, 400);
  //try to get the comics and throw an 
  // error that is visible on the page if there is an error
  try {
    
    const comics = await getComics();

    //first comic will come first, 
    //sorting from smallest number to largest number
    //Sorting works by subtracting the number of the 
    // second episode from the first episode that is 
    // given to the sort function. When the result is negative
    // the first number is smaller and stays in front of the second number
    // If the first number is larger the result will be positive and
    // the second number will move in front of the first one. 
    // if and episode is null, ?? 0 treats it as a 0 so the math 
    // still works. 
    comics.sort((first,second) => (first.episode ?? 0) - (second.episode ?? 0));

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
    
  } finally {
    clearInterval(loading);
  }

  //line of code used for testing 
  // to make sure the comics are coming through 
  // if for some reason there are errors on upload
  //commented out for now but can uncomment if needed.
  // getComicDetails(1).then(console.log);

}

showComics();