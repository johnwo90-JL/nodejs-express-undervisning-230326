import express from "express";

import { usersGetHandler, usersPostHandler } from "../handlers/users.hander.js";

export const userRouter = express.Router();


// /users/[...]
userRouter.get("/", usersGetHandler);
userRouter.post("/", usersPostHandler);