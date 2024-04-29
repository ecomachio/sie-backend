"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const listings_1 = __importDefault(require("./listings/routes/listings"));
const app = (0, express_1.default)();
const port = 3000;
function httpErrorMiddleware(err, req, res, next) {
    console.error(err);
    res.status(500).send("Internal Server Error");
}
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use("/listings", listings_1.default);
app.use(httpErrorMiddleware);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map