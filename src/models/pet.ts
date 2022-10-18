export class Pet {
    id: number;
    // name: string;
    // breed: string;
    // isAdopted: boolean;
    // owner: string;
    static createId() {
        return Math.round(Math.random() * 1_000_000);
    }

    constructor(
        public petname: string,
        public breed: string,
        public owner: string
    ) {
        this.id = Pet.createId();
        this.petname = petname;
        this.breed = breed;
        this.owner = owner;
    }
}
