import { Router } from "express";

import {
  loginController,
  LogoutController,
  meController,
  registerController,
  updateRoleController,
} from "./controller";
import { checkAuth } from "./middleware";

function CreateAuthRouter() {
  const router = Router();
  router.post("/register", registerController);
  router.post("/login", loginController);
  router.post("/logout", LogoutController);
  router.post("/updateRole", updateRoleController);
  router.get("/me", checkAuth, meController);

  return router;
}
export const authRouter = CreateAuthRouter();
