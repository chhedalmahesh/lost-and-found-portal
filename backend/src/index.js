import connectDB from "./db/db.js";
import dotenv from "dotenv";
import { app } from "./app.js";

const PORT = process.env.PORT | 8000;
dotenv.config({
  path: "../env",
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("mongo db connection failed !!!", error);
  });
