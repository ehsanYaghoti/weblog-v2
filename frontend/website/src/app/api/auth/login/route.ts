import { loginSchema } from "@/validation/loginSchema";
import { NextResponse } from "next/server"


export async function POST(request: Request) {
    const body: unknown = await request.json()


    const result = loginSchema.safeParse(body)
    let zodErrors = {};

    if (!result.success) {
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
        })
    }


    // return  NextResponse.json(!(Object.keys(zodErrors).length > 0) ? { success: false , errors: {email : "there is not a such user with this email"} } : { success: true })
    return NextResponse.json(Object.keys(zodErrors).length > 0 ? { success: false , errors: zodErrors } : { success: true })
}
