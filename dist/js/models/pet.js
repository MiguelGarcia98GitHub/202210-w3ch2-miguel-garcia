export class Pet {
    constructor(petname, breed, owner, isAdopted) {
        this.petname = petname;
        this.breed = breed;
        this.owner = owner;
        this.isAdopted = isAdopted;
        this.id = Pet.createId();
        this.petname = petname;
        this.breed = breed;
        this.owner = owner;
        this.isAdopted = isAdopted;
    }
    static createId() {
        return Math.round(Math.random() * 1000000);
    }
}
