import express from "express";

import { usersGetHandler, /*usersPostHandler*/ } from "../controllers/users.controller.js";
import { useValidation } from "../middleware/use-validation.middleware.js";
import { UsersGetValidationSchema,/*UsersPostValidationSchema*/ } from "../schemas/users.schema.js";




const UsersRouterErrorHandler = (err, req, res, next)  =>  {
    console.log("ErrorHandlerUsersRouter");
    if (err.name === "ZodError") {
        console.error(err);
        res.sendStatus(400) // Bad Request
        return;
    }

    next();
}





export const userRouter = express.Router();

// /users/[...]
userRouter.get("/", useValidation(UsersGetValidationSchema), usersGetHandler);
// userRouter.post("/", UseValidation(UsersPostValidationSchema), usersPostHandler);

// Add error-handler **after** other endpoints.
userRouter.use(UsersRouterErrorHandler); // Add error-handler for router.

