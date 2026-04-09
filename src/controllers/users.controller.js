import express from "express";
import { UsersPostValidationSchema } from "../schemas/users.schemas.js";
import { readCSV, appendCSV } from "../utils/test-utils.js";
import { randomUUID } from "node:crypto";

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
    // const csvPath = "src/data/users.csv";
    
    // const users = readCSV();

    console.log("Users:", users.entries);
    
    // users.entries.push(`${randomUUID()},${req.parsed.body.name},${req.parsed.body.email},${req.parsed.body.password},${req.parsed.body.username}`);
    // appendCSV(csvPath, users.entries);

    res.status(200).send("Endpoint POST '/users' invoked"); // 200 -> OK
};