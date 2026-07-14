import * as z from "zod";

export const resetPassSchema = z.object({
  password: z
    .string()
    .min(8, "password must be at least 8 characters.")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*\-_+=]).+$/,
      "Password must contain At least one uppercase and lowercase letter, one number, and one symbol.",
    ),
    confirmPassword : z
    .string()
    .min(8, "password must be at least 8 characters.")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*\-_+=]).+$/,
      "Password must contain At least one uppercase and lowercase letter, one number, and one symbol.",
    ),
}).refine(data => data.password === data.confirmPassword , {
    error : "Password must match",
    path : ["confirmPassword"]
});


export type TResetPassForm = z.infer<typeof resetPassSchema>;
