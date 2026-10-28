import {Comic, type ComicData} from '../model/comic';

const API_URL = "http://localhost:5147";

//this function is fething the data from the comicAPI 
// so that it can be sent to the front of the site 
export async function getComics(): Promise<Comic[]> {
    const response = await fetch(`${API_URL}/comics`);

    if (!response.ok) {
    throw new Error(`Not found (${response.status})`);
}

    const data: ComicData[] = await response.json();
    return data.map(data=> new Comic(data));
}


// export async function getComicDetails(comicId: number) {
    
// }