import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { Storage } from '../services/storage.js';
import { AddPet } from './add.pet.js';
import { Component } from './component.js';
import { ItemPet } from './itempet.js';

export class PetList extends Component {
    template!: string;
    storeService: Storage<Pet>;
    pets: Array<Pet>;

    constructor(public selector: string) {
        super();
        this.storeService = new Storage('pets');
        if (this.storeService.getLocalStorage().length === 0) {
            this.pets = [...PETS];
            this.storeService.setLocalStorage(this.pets);
        } else {
            this.pets = this.storeService.getLocalStorage();
        }
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-pet', this.handleAdd.bind(this));
    }

    createTemplate() {
        let template = `<section>
                <h2>Pets</h2>
                <slot id="add-pet"></slot>
                <ul>`;

        this.pets.forEach((item: Pet) => {
            template += new ItemPet(
                '',
                item,
                this.handlerEraser.bind(this),
                this.handlerisAdopted.bind(this)
            ).template;
            // += `
            // <li> ${item.id} - ${item.petname} - ${item.breed} - ${item.owner}
            //  - ${item.isAdopted ? 'es adoptado' : 'no es adoptado'}
            // <span class="eraser" data-id="${item.id}">🗑️</span>
            // </li>`;
        });

        template += `</ul>
            </section>`;

        return template;
    }
    handleAdd(ev: Event) {
        ev.preventDefault();
        const name = (document.querySelector('#resp1') as HTMLInputElement)
            .value;

        const breed = (document.querySelector('#resp2') as HTMLInputElement)
            .value;

        const owner = (document.querySelector('#resp3') as HTMLInputElement)
            .value;

        // const isAdoptedCheckbox = document.querySelector(
        //     '#resp5'
        // ) as HTMLInputElement;

        // const isAdopted = isAdoptedCheckbox.checked;

        this.pets.push(new Pet(name, breed, owner));
        this.storeService.setLocalStorage(this.pets);
        this.manageComponent();
    }

    handlerEraser(deletedID: number) {
        this.pets = this.pets.filter((item) => item.id !== deletedID);
        this.storeService.setLocalStorage(this.pets);
        this.manageComponent();
    }
    handlerisAdopted(changeID: number) {
        const i = this.pets.findIndex((item) => item.id === changeID);
        this.pets[i].isAdopted = !this.pets[i].isAdopted;
        this.storeService.setLocalStorage(this.pets);
    }
}
