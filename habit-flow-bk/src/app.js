import express from "express";
import cors from "cors";
import router from "./routes/habitsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Assalamualikum");
  console.log("assalamualikum");
});

app.use("/api/habits", router);

export default app;
