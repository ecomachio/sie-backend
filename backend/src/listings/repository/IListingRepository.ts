import Listing from "../domain/listings";

interface IListingRepository {
  /**
   * Retrieves a listing by its ID.
   * @param id - The ID of the listing.
   * @returns The listing with the specified ID, or `undefined` if not found.
   */
  getById(id: number): Listing | undefined;

  /**
   * Retrieves all listings.
   * @returns An array of all listings.
   */
  getAll(): Listing[];

  /**
   * Adds a new listing.
   * @param listing - The listing to add.
   */
  add(listing: Listing): Listing;

  /**
   * Updates an existing listing.
   * @param listing - The updated listing.
   */
  update(listing: Listing): Listing

  /**
   * Deletes a listing by its ID.
   * @param id - The ID of the listing to delete.
   */
  deleteById(id: number): void;
}

export default IListingRepository;
