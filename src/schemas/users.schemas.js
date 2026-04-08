import z from "zod";


export const UsersPostValidationSchema = z.object({
    body: z.object({
        name: z.string().min(6).includes(" "),
        email: z.email(),
        password: z.string().includes("$"), // TODO Verify shape
        username: z.string().min(3).max(16),
    }),
    query: z.object({
        flag: z.coerce.number().optional(),
    }),
    params: z.object({
        id: z.coerce.number()
    }).optional(),
})