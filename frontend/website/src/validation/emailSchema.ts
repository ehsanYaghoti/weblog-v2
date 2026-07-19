import * as z from "zod";

export const emailSchema = z.object({
  email: z.email("email must be valid"),
});
