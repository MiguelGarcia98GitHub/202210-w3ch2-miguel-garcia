import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { AddPet } from './add.pet.js';
import { Component } from './component.js';

export class PetList extends Component {
    template!: string;
    pets = [...PETS];
    constructor(public selector: string) {
        super();
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-task');
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', this.handleAdd.bind(this));
            document
                .querySelectorAll('.eraser')
                .forEach((item) =>
                    item.addEventListener(
                        'click',
                        this.handlerEraser.bind(this)
                    )
                );
        }, 100);
    }

    createTemplate() {
        let template = `<section>
                <h2>Tareas</h2>
                <slot id="add-task"></slot>
                <ul>`;
        this.pets.forEach((item: Pet) => {
            template += `
            <li> ${item.id} - ${item.petname} - ${item.breed} - ${item.owner}
            <span class="eraser" data-id="${item.id}">🗑️</span>
            </li>`;
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

        this.pets.push(new Pet(name, breed, owner));
        this.manageComponent();
    }

    handlerEraser(ev: Event) {
        const deletedID = (ev.target as HTMLElement).dataset.id;
        this.pets = this.pets.filter(
            (item) => item.id !== +(deletedID as string)
        );
        this.manageComponent();
    }
}
