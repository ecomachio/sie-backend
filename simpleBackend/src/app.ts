import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import listingRouter from "./routes/listings";

export interface IListing {
  id: number;
  title: string; // the title of the real estate listing (string)
  price: number; // the price of the listing (number)
  description: string; // a brief description of the listing (string)
}

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use("/listings", listingRouter);

app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
