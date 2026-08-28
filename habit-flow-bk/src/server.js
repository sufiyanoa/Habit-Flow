import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./config/database.js";

dotenv.config({ path: "./src/.env" });

const PORT = process.env.PORT || 5000;

connectDb();

app.listen(PORT, () => {
  console.log(`listening on the port ${PORT}`);
});
