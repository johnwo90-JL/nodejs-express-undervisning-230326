import z from "zod";


export const UsersPostValidationSchema = z.object({
    body: z.object({
        name: z.string().min(6).includes(" "),
        email: z.email(),
        password: z.string().includes("$"), // TODO Verify shape
        username: z.string().min(3).max(16),
    })
});


export const UsersGetValidationSchema = z.object({
    query: z.object({
        flag: z.coerce.number().min(100).max(1000),
    })
});
