export class Storage {
    constructor(store) {
        this.store = store;
    }
    getLocalStorage() {
        const dataString = localStorage.getItem(this.store);
        if (!dataString)
            return [];
        return JSON.parse(dataString);
    }
    setLocalStorage(data) {
        localStorage.setItem(this.store, JSON.stringify(data));
    }
}
