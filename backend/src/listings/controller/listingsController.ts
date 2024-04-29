import { Request, Response } from "express";

import IListingRepository from "../repository/IListingRepository";
import { NotFoundError } from "../../middlewares/errorHandlers";

export default class ListingsController {
  private repository: IListingRepository;

  constructor(repository: IListingRepository) {
    this.repository = repository;
  }

  onGet = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const listing = await this.repository.getById(id);

    if (!listing) {
      throw new NotFoundError("Listing not found");
      return;
    }

    res.json(listing);
  };

  onGetAll = async (req: Request, res: Response) => {
    const listings = await this.repository.getAll();

    res.json(listings);
  };

  onCreate = async (req: Request, res: Response) => {
    const listing = await this.repository.add(req.body);
    res.status(201).json(listing);
  };

  onUpdate = async (req: Request, res: Response) => {
    const listing = await this.repository.update(req.body);

    res.json(listing);
  };

  onDelete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await this.repository.deleteById(id);

    res.json({ message: "Listing deleted successfully" });
  };
}
