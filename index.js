import express from "express";

import cors from "cors";

import dotenv from "dotenv";

import { connectDB } from "./config/db.js";

import StudentRouter from "./routers/studentRouter.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.json());

connectDB();

app.use("/", StudentRouter);

app.listen(port, () => {
  console.log(`Express server connected with the Port : ${port}`);
});