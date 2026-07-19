import { emailSchema } from "@/validation/emailSchema";
import { forgotPassSchema } from "@/validation/forgotPassSchema";
import { NextResponse } from "next/server"


export async function POST(request: Request) {
    const body: unknown = await request.json()

    const result = emailSchema.safeParse(body)
    let zodErrors = {};


    // if (!result.success) {
    //     result.error.issues.forEach((issue) => {
    //         zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    //     })
    // }

    // Check if forgot token and email is valid

    let isValid = true


    // return  NextResponse.json(!(Object.keys(zodErrors).length > 0) ? { success: false , errors: {email : "there is not such user with this email"} } : { success: true })
    return NextResponse.json(!isValid ? { success: false, errors: {resetToken : "forgot token is not valid"} } : { success: true })
}
