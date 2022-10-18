export class Pet {
    constructor(petname, breed, owner) {
        this.petname = petname;
        this.breed = breed;
        this.owner = owner;
        this.id = Pet.createId();
        this.petname = petname;
        this.breed = breed;
        this.owner = owner;
    }
    static createId() {
        return Math.round(Math.random() * 1000000);
    }
}
