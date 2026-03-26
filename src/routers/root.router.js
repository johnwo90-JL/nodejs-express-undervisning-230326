import express from "express";

import { endpointHandler } from "../handlers/root.handler.js";

export const rootRouter = express.Router();

rootRouter.get("/", endpointHandler);