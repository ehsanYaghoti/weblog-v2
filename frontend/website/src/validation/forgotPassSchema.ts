import * as z from "zod";

export const forgotPassSchema = z.object({
  email: z.email("email must be valid"),
});


export type TforgotPassForm = z.infer<typeof forgotPassSchema>;
