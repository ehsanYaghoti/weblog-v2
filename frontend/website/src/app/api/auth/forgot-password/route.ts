import { forgotPassSchema } from "@/validation/forgotPassSchema";
import { cookies } from "next/headers";
import { NextResponse } from "next/server"


export async function POST(request: Request) {
    const body: unknown = await request.json()

    // Check if the email is valid and if this email exist
    const result = forgotPassSchema.safeParse(body)
    let zodErrors = {};

    if (!result.success) {
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
        })
    }

    if (Object.keys(zodErrors).length > 0) {
        return NextResponse.json({ success: false, errors: zodErrors })
    }

    const data = result.data;

    const isEmailExist = true;

    if (!isEmailExist) {
        return NextResponse.json({ success: false, errors: { email: "there is not such user with this email" } })
    }

    // Generate OTP
    // Store it {id : "sdsf2w334e32" , token : "123abc" , used : false , expire : 1hour}
    // Send email

    const cookieStore = await cookies()


    // Creates a temporary verification token
    cookieStore.set("verification_token", "eyJhbGci", { maxAge: 24 * 3600, path: "/auth", sameSite: "lax", httpOnly: true, secure: true })
    if (data)
        cookieStore.set("verification_email", data.email, { maxAge:  3600, path: "/auth", sameSite: "lax", httpOnly: true, secure: true })




    return NextResponse.json({ success: true })
}
