export interface IListing {
  id: number;
  title: string; // the title of the real estate listing (string)
  price: number; // the price of the listing (number)
  description: string; // a brief description of the listing (string)
}

class Listing {
  constructor(
    public readonly title: string,
    public readonly price: number,
    public readonly description: string,
    public readonly id?: number
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }
}

export default Listing;
