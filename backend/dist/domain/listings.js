"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// in memory data store
const dataStore = [];
class Listing {
    constructor() { }
    add({ title, price, description }) {
        dataStore.push({ id: dataStore.length, title, price, description });
        this.id = dataStore.length - 1;
        this.title = title;
        this.price = price;
        this.description = description;
        return this;
    }
    remove(id) {
        dataStore.splice(id, 1);
        return dataStore[id];
    }
    update(id, { title, price, description }) {
        const idx = dataStore.findIndex((listing) => listing.id === id);
        dataStore[idx] = Object.assign(Object.assign({}, dataStore[idx]), { title, price, description });
        this.title = title;
        this.description = description;
        this.price = price;
        return this;
    }
    get(id) {
        const listing = dataStore.find((l) => l.id === id);
        this.id = listing.id;
        this.title = listing.title;
        this.description = listing.description;
        this.price = listing.price;
        return this;
    }
    getAll() {
        return dataStore;
    }
}
exports.default = Listing;
//# sourceMappingURL=listings.js.map