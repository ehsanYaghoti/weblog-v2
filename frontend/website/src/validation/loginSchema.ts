import * as z from "zod";

export const loginSchema = z.object({
  email: z.email("email must be valid"),
  password: z
    .string()
    .min(8, "password must be at least 8 characters.")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*\-_+=]).+$/,
      "Password must contain At least one uppercase and lowercase letter, one number, and one symbol.",
    )
});


export type TLoginForm = z.infer<typeof loginSchema>;
