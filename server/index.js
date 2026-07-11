import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const allowedOrigins = process.env.FRONTENDS
  ? process.env.FRONTENDS.split(",").map(s => s.trim())
  : ["http://localhost:5173"];


app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());

app.get("/", async (req, res) => res.json({message: "Dockerized express server is successfully connected!"}));

app.listen(port, () => console.log(`Server listening on Port - ${port}`))