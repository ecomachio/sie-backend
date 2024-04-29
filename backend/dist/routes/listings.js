"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listings_1 = __importDefault(require("../domain/listings"));
const listingRoute = (0, express_1.Router)();
listingRoute.get("/", (req, res) => {
    const listing = new listings_1.default();
    return res.send(listing.getAll());
});
listingRoute.get("/:id", (req, res) => {
    const { id } = req.params;
    const listing = new listings_1.default();
    return res.send(listing.get(Number(id)));
});
listingRoute.post("/", (req, res) => {
    const { title, price, description } = req.body;
    const listing = new listings_1.default();
    listing.add({ title, price, description });
    return res.send(listing);
});
listingRoute.delete("/:id", (req, res) => {
    const { id } = req.params;
    const listing = new listings_1.default();
    listing.remove(Number(id));
    res.send(listing);
});
exports.default = listingRoute;
//# sourceMappingURL=listings.js.map