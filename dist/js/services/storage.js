export class Storage {
    constructor(store = 'Pet') {
        this.store = store;
    }
    getLocalStorage() {
        const dataString = localStorage.getItem(this.store);
        if (!dataString)
            return [];
        return JSON.parse(dataString);
    }
    setLocalStorage(data) {
        const arrayToString = JSON.stringify(data);
        localStorage.setItem(this.store, arrayToString);
    }
}
