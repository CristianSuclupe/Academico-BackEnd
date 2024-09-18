import express from "express";
import cors from "cors";
import morgan from "morgan";
import { createAuthRouter } from "./routes";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", createAuthRouter());

export default app;
