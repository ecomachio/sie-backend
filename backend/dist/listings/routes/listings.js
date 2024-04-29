"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listingsController_1 = __importDefault(require("../controller/listingsController"));
const InMemoryListingRepository_1 = __importDefault(require("../repository/InMemoryListingRepository"));
const router = (0, express_1.Router)();
const controller = new listingsController_1.default(new InMemoryListingRepository_1.default());
router.get("/", controller.onGetAll);
router.get("/:id", controller.onGet);
router.post("/", controller.onCreate);
router.delete("/:id", controller.onDelete);
exports.default = router;
//# sourceMappingURL=listings.js.map