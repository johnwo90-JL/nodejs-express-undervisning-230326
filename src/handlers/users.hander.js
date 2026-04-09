import express from "express";
import { UsersPostValidationSchema } from "../schemas/users.schemas.js";

/**
 * @param {express.Request} req - HTTP Request
 * @param {express.Response} res - HTTP Response
 * @param {express.NextFunction} [next] - Invoke next handler
 */
export const usersGetHandler = (req, res, next) => { // <-- Request Handler
    console.log(`[GET /users]: flag=${req.parsed.query.flag}`);
    res.status(200).send("Endpoint GET '/users' invoked"); // 200 -> OK
};


export const usersPostHandler = (req, res, next) => { // <-- Request Handler
    console.log(req.parsed);
    console.log("?flag="+req.query.flag);
    console.log("id:"+req.params.id);

    res.status(200).send("Endpoint POST '/users' invoked"); // 200 -> OK
};