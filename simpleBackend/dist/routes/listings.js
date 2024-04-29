"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let dataStore = [];
router.get("/", (req, res) => {
    res.json(dataStore);
});
router.get("/:id", (req, res) => {
    const listing = dataStore.find((l) => l.id === Number(req.params.id));
    res.json(listing);
});
router.post("/", (req, res) => {
    const newListing = Object.assign({ id: dataStore.length + 1 }, req.body);
    dataStore.push(newListing);
    res.status(201).json(newListing);
});
router.delete("/:id", (req, res) => {
    dataStore = dataStore.filter((l) => l.id !== Number(req.params.id));
    res.json({
        message: `Listing with id: ${req.params.id} deleted successfully`,
    });
});
exports.default = router;
//# sourceMappingURL=listings.js.map