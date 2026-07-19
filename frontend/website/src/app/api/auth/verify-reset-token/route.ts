import { forgotPassSchema } from "@/validation/forgotPassSchema";
import { NextResponse } from "next/server"


export async function POST(request: Request) {
    const body: unknown = await request.json()

    console.log(body)
    // const result = forgotPassSchema.safeParse(body)
    // let zodErrors = {};

    // if (!result.success) {
    //     result.error.issues.forEach((issue) => {
    //         zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    //     })
    // }

    // Check if Reset token is valid

    let isValid = true


    // return  NextResponse.json(!(Object.keys(zodErrors).length > 0) ? { success: false , errors: {email : "there is not such user with this email"} } : { success: true })
    return NextResponse.json(!isValid ? { success: false, errors: {resetToken : "resetToken is not valid"} } : { success: true })
}
