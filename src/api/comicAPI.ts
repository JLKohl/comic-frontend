import {Comic, type ComicData} from '../model/comic';

const API_URL = "http://localhost:5147";

export async function getComics(): Promise<Comic[]> {
    const response = await fetch(`${API_URL}/comics`);
    const data: ComicData[] = await response.json();
    return data.map(data=> new Comic(data));
}