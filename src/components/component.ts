export class Component {
    render(selector: string, HTMLtemplate: string) {
        const element = document.querySelector(selector);
        if (element === null) return false;
        element.innerHTML = HTMLtemplate;
        return true;
    }

    renderAdd(selector: string, HTMLtemplate: string) {
        if (!selector) return false;
        const element = document.querySelector(selector);
        if (element === null) return false;
        element.innerHTML += HTMLtemplate;
        return true;
    }

    renderOuter(selector: string, HTMLtemplate: string) {
        if (!selector) return false;
        const element = document.querySelector(selector);
        if (element === null) return false;
        element.outerHTML = HTMLtemplate;
        return true;
    }
}
