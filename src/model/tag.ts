export interface TagData {

    tagId: number;
    tagName: string;

}

export class Tag {

    tagId: number;
    tagName: string;

    constructor(data: TagData){
        this.tagId = data.tagId;
        this.tagName = data.tagName;
    }
    

}