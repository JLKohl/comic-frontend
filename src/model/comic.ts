//adding a comic interface. 
// This is sort of like a model but made for the font end only.
//Dissapears when Vite turns ts in js

//putting export in front of using
//allows the interface to be exported now
export interface ComicData {

    comic_id: number; 

    title: string;

    description: string | null;

    episode: number | null;

    createdAt: string | null;

}