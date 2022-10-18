import { Component } from './component.js';
export class Main extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.HTMLtemplate = this.createTemplate();
        this.renderAdd(this.selector, this.HTMLtemplate);
    }
    createTemplate() {
        return `
            <main>
            </main>
        `;
    }
}
