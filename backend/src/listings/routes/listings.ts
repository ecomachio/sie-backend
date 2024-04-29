import { Router } from "express";
import ListingsController from "../controller/listingsController";
import InMemoryListingRepository from "../repository/InMemoryListingRepository";

const router = Router();
const controller = new ListingsController(new InMemoryListingRepository());

router.get("/", controller.onGetAll);
router.get("/:id", controller.onGet);
router.post("/", controller.onCreate);
router.delete("/:id", controller.onDelete);

export default router;
