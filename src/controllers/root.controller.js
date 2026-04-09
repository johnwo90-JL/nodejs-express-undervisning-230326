import express from "express";

/**
 * @param {express.Request} req - HTTP Request
 * @param {express.Response} res - HTTP Response
 * @param {express.NextFunction} [next] - Invoke next handler
 */
export const endpointHandler = (req, res, next) => { // <-- Request Handler
    console.log("Request ID:", req.id);
    res.status(200).send("Hello, World!"); // 200 -> OK
};