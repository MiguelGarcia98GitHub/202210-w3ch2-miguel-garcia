export class Pet {
    constructor(petname, breed, owner // public isAdopted: boolean
    ) {
        this.petname = petname;
        this.breed = breed;
        this.owner = owner;
        this.id = Pet.createId();
        // this.petname = petname;
        // this.breed = breed;
        // this.owner = owner;
        this.isAdopted = false;
    }
    static createId() {
        return Math.round(Math.random() * 1000000);
    }
}
