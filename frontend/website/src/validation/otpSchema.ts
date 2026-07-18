import * as z from "zod";

export const otpSchema = z.object({
  code: z.string().length(6 , "the code length must be 6 character"),
});


export type TOtpForm = z.infer<typeof otpSchema>;
