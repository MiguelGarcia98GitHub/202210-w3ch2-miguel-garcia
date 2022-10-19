import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { Storage } from '../services/storage.js';
import { AddPet } from './add.pet.js';
import { Component } from './component.js';
import { ItemPet } from './itempet.js';
export class PetList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.storeService = new Storage('Pets');
        if (this.storeService.getLocalStorage().length === 0) {
            this.pets = [...PETS];
            this.storeService.setLocalStorage(this.pets);
        }
        else {
            this.pets = this.storeService.getLocalStorage();
        }
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-task', this.handleAdd.bind(this));
    }
    createTemplate() {
        let template = `<section>
                <h2>Pets</h2>
                <slot id="add-task"></slot>
                <ul>`;
        this.pets.forEach((item) => {
            template += new ItemPet('', item, this.handlerEraser.bind(this), this.handlerComplete.bind(this)).template;
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
    handleAdd(ev) {
        ev.preventDefault();
        const name = document.querySelector('#resp1')
            .value;
        const breed = document.querySelector('#resp2')
            .value;
        const owner = document.querySelector('#resp3')
            .value;
        const isAdoptedCheckbox = document.querySelector('#resp5');
        const isAdopted = isAdoptedCheckbox.checked;
        this.pets.push(new Pet(name, breed, owner, isAdopted));
        this.storeService.setLocalStorage(this.pets);
        this.manageComponent();
    }
    handlerEraser(deletedID) {
        this.pets = this.pets.filter((item) => item.id !== deletedID);
        this.storeService.setLocalStorage(this.pets);
        this.manageComponent();
    }
    handlerComplete(changeID) {
        const i = this.pets.findIndex((item) => item.id === changeID);
        this.pets[i].isAdopted = !this.pets[i].isAdopted;
        this.storeService.setLocalStorage(this.pets);
    }
}
