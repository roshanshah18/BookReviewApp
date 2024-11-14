import { Router } from "express";
import { checkAdmin, checkAuth } from "../auth/middleware";
import {
  addBookController,
  deleteBookController,
  getBookByIdController,
  getBooksController,
  updateBookController,
} from "./controller";

function createBookRouter() {
  const router = Router();
  router.post("/addbook", checkAuth, checkAdmin, addBookController);
  router.post("/:bookId", checkAuth, checkAdmin, updateBookController);
  router.delete("/:bookId", checkAuth, checkAdmin, deleteBookController);

  router.get("/", getBooksController);
  router.get("/:bookId", getBookByIdController);

  return router;
}

export const bookRouter = createBookRouter();
