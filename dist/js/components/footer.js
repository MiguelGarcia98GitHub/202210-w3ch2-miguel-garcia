import { Component } from './component.js';
export class Footer extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return '<footer><address>Miguel - ISDI Coders</address></footer>';
    }
}
