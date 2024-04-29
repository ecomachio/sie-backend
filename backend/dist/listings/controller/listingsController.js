"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ListingsController {
    constructor(repository) {
        this.onGet = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const listing = yield this.repository.getById(id);
            if (!listing) {
                res.status(404).json({ message: "Listing not found" });
                return;
            }
            res.json(listing);
        });
        this.onGetAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const listings = yield this.repository.getAll();
            res.json(listings);
        });
        this.onCreate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const listing = yield this.repository.add(req.body);
            res.status(201).json(listing);
        });
        this.onUpdate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const listing = yield this.repository.update(req.body);
            res.json(listing);
        });
        this.onDelete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            yield this.repository.deleteById(id);
            res.json({ message: "Listing deleted successfully" });
        });
        this.repository = repository;
    }
}
exports.default = ListingsController;
//# sourceMappingURL=listingsController.js.map