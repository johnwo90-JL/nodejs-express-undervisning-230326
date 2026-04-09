import { ZodSchema } from "zod/v3";

/**
 * 
 * @param {ZodSchema} validationSchema 
 * @returns 
 */
export const UseValidation = (validationSchema) => {
    return async (req, res, next) => {
        const result = await validationSchema.parseAsync(req);
        req.parsed = result;
                   
        console.log("Validation Passed!");
        next();
    }
}