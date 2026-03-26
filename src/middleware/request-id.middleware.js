import { randomUUID } from "node:crypto";


/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
export function useRequestId(req, res, next) {
    req.id = randomUUID();
    console.log("[Middleware] Request ID:", req.id);
    next();
}