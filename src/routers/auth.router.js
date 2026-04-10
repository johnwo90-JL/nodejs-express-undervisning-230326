import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { useValidation } from "../middleware/use-validation.middleware.js";
import { AuthRegisterPostValidationSchema } from "../schemas/auth.schema.js";

export const authRouter = express.Router();

authRouter.post("/register", useValidation(AuthRegisterPostValidationSchema), register);
authRouter.post("/login", login);
