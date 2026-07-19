import EmailVertificationForm from "@/forms/emailVertificationForm";
import { emailSchema } from "@/validation/emailSchema";
import { redirect } from "next/navigation";

export default async function EmailVertification({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;
  console.log(email);

  const result = emailSchema.safeParse({email})
  console.log(result);

  if (!email || !result.success) {
    redirect("/auth/forgot-password");
  }

  return <EmailVertificationForm email={email} />;
}
