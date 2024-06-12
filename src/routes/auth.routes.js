import { authRequire } from "../middlewares/validateToken.js";
import { Router } from "express";
import {
  login,
  logout,
  register,
  profile,
  verifyToken,
} from "../controllers/auth.controllers.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();
//definimos las rutas en el http://
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authRequire, profile);

export default router;
