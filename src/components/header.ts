import { Component } from './component.js';

export class Header extends Component {
    HTMLtemplate: string;
    constructor(public selector: string) {
        super();
        this.HTMLtemplate = this.createTemplate();
        this.renderAdd(this.selector, this.HTMLtemplate);
    }
    createTemplate() {
        return '<header><h1>Pets</h1></header>';
    }
}
