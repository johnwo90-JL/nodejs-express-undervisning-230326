/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
export function useLogging(req, res, next) {
    console.log(`${new Date().toISOString()}  -  ${req.method} ${req.url} ${req.id}`);
    next();
}