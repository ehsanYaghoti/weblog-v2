import fetcher from "@/service/fetch";

type VerifyResetTokenResponse = {
    success: boolean;
};

export default async function verifyResetToken(resetToken: string): Promise<boolean> {


    const data = await fetcher<{ token: string }, VerifyResetTokenResponse>({
        url: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/verify-reset-token`,
        body: { token: resetToken },
        method: "POST"
    })

    return data.success

}
