import Listing from "../domain/listings";
import IListingRepository from "./IListingRepository";

class InMemoryListingRepository implements IListingRepository {
  private listings: Listing[];

  constructor() {
    this.listings = [];
  }

  getById(id: number): Listing {
    return this.listings.find((listing) => listing.id === id);
  }
  getAll(): Listing[] {
    return this.listings;
  }
  add(listing: Listing): Listing {
    this.listings.push({ id: this.listings.length + 1, ...listing });
    return listing;
  }
  update(listing: Listing): Listing {
    const index = this.listings.findIndex((l) => l.id === listing.id);
    this.listings[index] = listing;
    return listing;
  }
  deleteById(id: number): void {
    this.listings = this.listings.filter((listing) => listing.id !== id);
  }
}

export default InMemoryListingRepository;
