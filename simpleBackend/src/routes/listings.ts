import { Router, Request, Response } from "express";
import { IListing } from "../app";

const router = Router();
let dataStore: IListing[] = [];

router.get("/", (req: Request, res: Response) => {
  res.json(dataStore);
});

router.get("/:id", (req: Request, res: Response) => {
  const listing = dataStore.find((l) => l.id === Number(req.params.id));
  res.json(listing);
});

router.post("/", (req: Request, res: Response) => {
  const newListing = {
    id: dataStore.length + 1, // Simple id increment
    ...req.body,
  };

  dataStore.push(newListing);
  res.status(201).json(newListing);
});

router.delete("/:id", (req: Request, res: Response) => {
  dataStore = dataStore.filter((l) => l.id !== Number(req.params.id));

  res.json({
    message: `Listing with id: ${req.params.id} deleted successfully`,
  });
});

export default router;
