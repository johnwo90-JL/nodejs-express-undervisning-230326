import express from "express";
import { databaseService } from "../services/db.service.js";
import { csvDbAdapter } from "../services/db.service.adapters/db.service.adapter.csv.js";
import { randomUUID } from "node:crypto";
import { CSV_HEADER } from "../utils/test-utils.js";
import bcrypt from "bcrypt";

const dbService = databaseService(csvDbAdapter);

/**
 * @param {express.Request} req - HTTP Request
 * @param {express.Response} res - HTTP Response
 * @param {express.NextFunction} [next] - Invoke next handler
 */
export const register = (req, res, next) => { // <-- Request Handler
    /** @type Array */
    const users = dbService.getAll();
    const { email } = req.parsed.body;
    
    // Map from Comma-Separated to object
    
    const result = [];
    
    for (const user of users.map(e => e.split(","))) {
        let i = 0;
        let temp = {};
        for (const value of user) {
            temp[CSV_HEADER.split(",")[i++]] = value;
        }
        result.push(temp);
    }
    
    const password = bcrypt.hashSync(req.parsed.body.password, 14);
    if (result.some(e => e.email === email)) {
        res.sendStatus(409);
        console.error("Couldn't create user, email already exists in database!");
        return;
    }
    
    dbService.create(`${randomUUID()},${Object.values({ ...req.parsed.body, password }).join(",")}`);
    res.sendStatus(201); // 200 = OK, 201 = Created
}


/**
 * @param {express.Request} req - HTTP Request
 * @param {express.Response} res - HTTP Response
 * @param {express.NextFunction} [next] - Invoke next handler
 */
export const login = (req, res, next) => { // <-- Request Handler
res.sendStatus(500);
}