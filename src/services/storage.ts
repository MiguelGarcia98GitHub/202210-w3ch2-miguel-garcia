export class Storage<T> {
    constructor(public store: string = 'Pet') {}

    getLocalStorage() {
        const dataString = localStorage.getItem(this.store);
        if (!dataString) return [];
        return JSON.parse(dataString);
    }

    setLocalStorage(data: Array<T>) {
        const arrayToString = JSON.stringify(data);
        localStorage.setItem(this.store, arrayToString);
    }
}
