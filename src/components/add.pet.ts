import { Component } from './component.js';

export class AddPet extends Component {
    HTMLtemplate: string;
    constructor(public selector: string, public handle: (ev: Event) => void) {
        super();
        this.HTMLtemplate = this.createTemplate();
        this.renderOuter(this.selector, this.HTMLtemplate);
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', (ev: Event) => {
                    ev.preventDefault();
                    console.log('Añadiendo cosas al HTML');
                    handle(ev);
                });
        }, 100);
    }
    createTemplate() {
        return `
        <form>
            <div>
                <input type="text" id="resp1" placeholder="Name of pet" required>
            </div>
            <div>
                <input type="text" id="resp2" placeholder="Breed">
            </div>
            <div>
                <input type="text" id="resp3" placeholder="Owner">
            </div>
            <div>
                <div id="resp4">
                <input type="checkbox" name="isAdopted" value="isAdopted" id="resp5">
                <div>
            </div>
            <button type="submit">Guardar</button>
        </form>
        `;
    }
}
