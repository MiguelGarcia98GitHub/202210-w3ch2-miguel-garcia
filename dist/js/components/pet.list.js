import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { AddPet } from './add.pet.js';
import { Component } from './component.js';
export class PetList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.pets = [...PETS];
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-task');
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this.handleAdd.bind(this));
            document
                .querySelectorAll('.eraser')
                .forEach((item) => item.addEventListener('click', this.handlerEraser.bind(this)));
        }, 100);
    }
    createTemplate() {
        let template = `<section>
                <h2>Tareas</h2>
                <slot id="add-task"></slot>
                <ul>`;
        this.pets.forEach((item) => {
            template += `
            <li> ${item.id} - ${item.petname} - ${item.owner}
            <span class="eraser" data-id="${item.id}">🗑️</span>
            </li>`;
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
        this.pets.push(new Pet(name, breed, owner));
        this.manageComponent();
    }
    handlerEraser(ev) {
        const deletedID = ev.target.dataset.id;
        this.pets = this.pets.filter((item) => item.id !== +deletedID);
        this.manageComponent();
    }
}
