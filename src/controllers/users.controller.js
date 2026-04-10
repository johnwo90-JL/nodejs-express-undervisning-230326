import express from "express";
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


// export const usersPostHandler = (req, res, next) => { // <-- Request Handler
//     const csvPath = "src/data/users.csv";
//     const users = readCSV(csvPath);
//     const { name, email, password, username } = req.parsed.body;
//     const id = randomUUID();

//     console.log("Users:", users.entries);
//     appendCSV(csvPath, [`${id},${name},${email},${password},${username}`]);

//     res.status(200).send("Endpoint POST '/users' invoked"); // 200 -> OK
// };
