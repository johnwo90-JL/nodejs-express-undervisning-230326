import express from "express";

import { endpointHandler } from "../controllers/root.controller.js";

export const rootRouter = express.Router();

rootRouter.get("/", endpointHandler);