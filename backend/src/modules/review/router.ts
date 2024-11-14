import { Router } from "express";
import { checkAuth } from "../auth/middleware";
import {
  addReviewController,
  deleteReviewController,
  getReviewByBookIdController,
  updateReviewController,
} from "./controller";

function createReviewRouter() {
  const router = Router();

  router.post("/:bookId", checkAuth, addReviewController);
  router.post("/update/:reviewId", checkAuth, updateReviewController);
  router.delete("/:reviewId", checkAuth, deleteReviewController);
  router.get("/:bookId", getReviewByBookIdController);
  return router;
}
export const reviewRouter = createReviewRouter();
