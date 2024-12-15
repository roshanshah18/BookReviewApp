import cookieParser from "cookie-parser";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { APIError } from "./utils/error";
import { createDBConnection } from "./utils/db";
import { authRouter } from "./modules/auth/router";
import { bookRouter } from "./modules/book/router";
import { reviewRouter } from "./modules/review/router";

createDBConnection()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://book-review-8mm9qjwgl-roshanshah18s-projects.vercel.app",
    ],
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: "Welcome to Book Review App",
    data: null,
    isSuccess: true,
  });
});

app.use("/api/auth", authRouter);
app.use("/api/books", bookRouter);
app.use("/api/review", reviewRouter);

app.use((error: APIError, req: Request, res: Response, next: NextFunction) => {
  console.log("error", error);

  if (error instanceof APIError) {
    res.status(error.status).json({
      message: error.message,
      data: null,
      inSuccess: false,
    });

    return;
  }
  res.status(500).json({
    message: "Internal Server Error",
    data: null,
    inSuccess: false,
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
