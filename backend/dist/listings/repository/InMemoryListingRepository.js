"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryListingRepository {
    constructor() {
        this.listings = [];
    }
    getById(id) {
        return this.listings.find((listing) => listing.id === id);
    }
    getAll() {
        return this.listings;
    }
    add(listing) {
        this.listings.push(Object.assign({ id: this.listings.length + 1 }, listing));
        return listing;
    }
    update(listing) {
        const index = this.listings.findIndex((l) => l.id === listing.id);
        this.listings[index] = listing;
        return listing;
    }
    deleteById(id) {
        this.listings = this.listings.filter((listing) => listing.id !== id);
    }
}
exports.default = InMemoryListingRepository;
//# sourceMappingURL=InMemoryListingRepository.js.map