import fetcher from "@/service/fetch";

type VerifyEmailForgotTokenResponse = {
    success: boolean;
};

export default async function verifyEmailForgotToken(email : string , forgotToken: string): Promise<boolean> {


    const data = await fetcher<{email : string , token: string }, VerifyEmailForgotTokenResponse>({
        url: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/verify-email-forgot-token`,
        body: {email ,  token: forgotToken },
        method: "POST"
    })

    return data.success

}
