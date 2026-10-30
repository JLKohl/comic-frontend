//adding a comic interface.
//Disappears when Vite turns ts in js

//putting export in front of using
//allows the interface to be exported now
//This is typing (giving a type to) the raw data so 
//we can give it to the Comic Class
export interface ComicData {

    comicId: number; 
    title: string;
    description: string | null;
    episode: number | null;
    createdAt: string | null;

}

export class Comic {

    //have to call again because the class needs its 
    //own properties in order to work correctly
    comicId: number;
    title: string; 
    description: string |null;
    episode: number | null;
    createdAt: string | null;

    
    constructor(data: ComicData) {
      this.comicId = data.comicId;
      this.title = data.title;
      this.description = data.description;
      this.episode  = data.episode;
      this.createdAt = data.createdAt;
    }

}