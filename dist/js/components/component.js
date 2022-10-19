export class Component {
    render(selector, HTMLtemplate) {
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.innerHTML = HTMLtemplate;
        return true;
    }
    renderAdd(selector, HTMLtemplate) {
        if (!selector)
            return false;
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.innerHTML += HTMLtemplate;
        return true;
    }
    renderOuter(selector, HTMLtemplate) {
        if (!selector)
            return false;
        const element = document.querySelector(selector);
        if (element === null)
            return false;
        element.outerHTML = HTMLtemplate;
        return true;
    }
}
