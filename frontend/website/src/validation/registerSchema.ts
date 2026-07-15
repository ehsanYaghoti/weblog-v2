import * as z from "zod";

export const registerSchema = z.object({
  username: z
    .string("username is required")
    .min(5, "username must be at least 5 characters.")
    .max(32, "username must be at most 32 characters."),
  email: z.email("email must be valid"),
  password: z
    .string()
    .min(8, "password must be at least 8 characters.")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*\-_+=]).+$/,
      "Password must contain At least one uppercase and lowercase letter, one number, and one symbol.",
    )
});


export type TRegisterForm = z.infer<typeof registerSchema>;
