import express from "express";

/**
 * @param {express.Request} req - HTTP Request
 * @param {express.Response} res - HTTP Response
 * @param {express.NextFunction} [next] - Invoke next handler
 */
export const usersGetHandler = (req, res, next) => { // <-- Request Handler
    res.status(200).send("Endpoint GET '/users' invoked"); // 200 -> OK
};


export const usersPostHandler = (req, res, next) => { // <-- Request Handler
    res.status(200).send("Endpoint POST '/users' invoked"); // 200 -> OK
};