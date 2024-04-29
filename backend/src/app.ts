import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import listingRouter from "./listings/routes/listings";
import errorHandler from "./middlewares/errorHandlers";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use("/listings", listingRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
