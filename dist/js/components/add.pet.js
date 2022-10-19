import { Component } from './component.js';
export class AddPet extends Component {
    constructor(selector, handle) {
        super();
        this.selector = selector;
        this.handle = handle;
        this.HTMLtemplate = this.createTemplate();
        this.renderOuter(this.selector, this.HTMLtemplate);
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (ev) => {
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
