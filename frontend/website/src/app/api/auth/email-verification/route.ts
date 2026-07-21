import { otpSchema } from "@/validation/otpSchema";
import { NextResponse } from "next/server"


export async function POST(request: Request) {
    const body: unknown = await request.json()


    const result = otpSchema.safeParse(body)
    let zodErrors = {};

    if (!result.success) {
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
        })
    }


    // return  NextResponse.json(!(Object.keys(zodErrors).length > 0) ? { success: false , errors: {email : "the email is not validate!!!"} } : { success: true })
    // return  NextResponse.json(!(Object.keys(zodErrors).length > 0) ? { success: false , errors: {code : "the code is not valid"} } : { success: true })
    return NextResponse.json(Object.keys(zodErrors).length > 0 ? { success: false , errors: zodErrors } : { success: true , resetToken : "abc123" })
}
