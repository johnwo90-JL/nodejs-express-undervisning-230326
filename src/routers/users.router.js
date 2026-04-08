import express from "express";

import { usersGetHandler, usersPostHandler } from "../handlers/users.hander.js";
import { UseValidation } from "../middleware/use-validation.middleware.js";
import { UsersPostValidationSchema } from "../schemas/users.schemas.js";




const UsersRouterErrorHandler = (err, req, res, next)  =>  {
    if (err.name === "ZodError") {
        console.error(err);
        res.sendStatus(400) // Bad Request
        return;
    }

    next();
}





export const userRouter = express.Router();

// /users/[...]
userRouter.get("/", usersGetHandler);
userRouter.post("/:id", UseValidation(UsersPostValidationSchema), usersPostHandler);

// Add error-handler **after** other endpoints.
userRouter.use(UsersRouterErrorHandler); // Add error-handler for router.

