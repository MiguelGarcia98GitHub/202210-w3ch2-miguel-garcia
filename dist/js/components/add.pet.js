import { Component } from './component.js';
export class AddPet extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.HTMLtemplate = this.createTemplate();
        this.renderOuter(this.selector, this.HTMLtemplate);
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
            <button type="submit">Guardar</button>
        </form>
        `;
    }
}
