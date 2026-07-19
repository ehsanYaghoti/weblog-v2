import ResetPasswordForm from "@/forms/resetPasswordForm";
import verifyResetToken from "@/helpers/verifyResetToken";
import { redirect } from "next/navigation";

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: Promise<{ resetToken?: string }>;
}) {
  const { resetToken } = await searchParams;

  if (!resetToken || resetToken === "undefined") {
    redirect("/auth/login");
  }

  const isValid = await verifyResetToken(resetToken);

  if (!isValid) {
    redirect("/auth/forgot-password");
  }

  return <ResetPasswordForm />;
}
