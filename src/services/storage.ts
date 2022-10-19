export class Storage<T> {
    constructor(public store: string) {}

    getLocalStorage(): Array<T> {
        const dataString = localStorage.getItem(this.store);
        if (!dataString) return [];
        return JSON.parse(dataString);
    }

    setLocalStorage(data: Array<T>) {
        localStorage.setItem(this.store, JSON.stringify(data));
    }
}
