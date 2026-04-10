import z from "zod";


export const UsersGetValidationSchema = z.object({
    query: z.object({
        flag: z.coerce.number().min(100).max(1000),
    })
});
