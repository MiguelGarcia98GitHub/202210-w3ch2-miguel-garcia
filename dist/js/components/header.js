import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.HTMLtemplate = this.createTemplate();
        this.renderAdd(this.selector, this.HTMLtemplate);
    }
    createTemplate() {
        return '<header><h1>Pets</h1></header>';
    }
}
