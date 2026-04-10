import z from "zod";

export const AuthRegisterPostValidationSchema = z.object({
    body: z.object({
        name: z.string().min(6).includes(" "),
        email: z.email(),
        password: z.string().includes("$"), // TODO Verify shape
        username: z.string().min(3).max(16),
    })
});