import EmailVerificationForm from "@/forms/emailVerificationForm";
import verifyEmailForgotToken from "@/helpers/verifyEmailForgotToken";
import { emailSchema } from "@/validation/emailSchema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function EmailVerification() {
  const cookieStore = await cookies();

  const email = cookieStore.get("verification_email")?.value;
  const forgot_token = cookieStore.get("verification_token")?.value;

  const result = emailSchema.safeParse({ email });


  if (!email || !result.success || !forgot_token) {
    redirect("/auth/forgot-password");
  }


  const isValid = await verifyEmailForgotToken(email, forgot_token);

  if (!isValid) {
    redirect("/auth/forgot-password");
  }

  return <EmailVerificationForm email={email} />;
}
