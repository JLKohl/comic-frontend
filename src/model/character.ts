export interface CharacterData {

    characterId: number;
    name: string;
    age: number | null;
    gender: string | string;
    description: string | null;

}

export class Character {

    characterId: number;
    name: string;
    age: number | null;
    gender: string | string;
    description: string | null;

    constructor(data: CharacterData) {
        this.characterId = data.characterId;
        this.name = data.name;
        this.age = data.age;
        this.gender = data.gender;
        this.description = data.description;
    }


}