//using type tells the code that the code is only 
// for checking and when the TS turns into JS it 
// will no longer be readable. This is also why 
// the whole import could not be "import type" 
// because we need the class to build the object 
// the whole time.  

import {Comic, type ComicData} from './comic';
import {Tag, type TagData} from './tag';
import { Character, type CharacterData} from './character';

export interface ComicDetailsData {

    comic: ComicData;
    tags: TagData[];
    characters: CharacterData[];

}

export class Details {

    comic: Comic;
    tags: Tag[];
    characters: Character[];

    //building objects inside of the constructor 
    // so that the classes can build them selves
    // makeing the objects more usable
    constructor(data: ComicDetailsData){

        this.comic = new Comic(data.comic);
        this.tags = data.tags.map(t => new Tag(t));
        this.characters = data.characters.map(c => new Character(c));
    }
}