import { Component } from './component.js';

export class Main extends Component {
    HTMLtemplate: string;
    constructor(public selector: string) {
        super();
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
