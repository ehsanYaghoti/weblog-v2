import { createSession, encrypt } from "@/lib/session";
import { loginSchema } from "@/validation/loginSchema";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server"


export async function POST(request: Request) {
    const body: unknown = await request.json()


    const result = loginSchema.safeParse(body)
    let zodErrors = {};


    if (!result.success) {
        result.error.issues.forEach((issue) => {
            zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
        })

        if (Object.keys(zodErrors).length > 0) {
            return NextResponse.json({ success: false, errors: zodErrors })
        }
    }

    // check if such a user exist and password is right
    const user = true
    if (!user) {
        return NextResponse.json({ success: false, errors: { email: "there is not a such user with this email" } })
    }

    const isPasswordValidate = true
    if (!isPasswordValidate) {
        return NextResponse.json({ success: false, errors: { email: "user information is not right" , password : "user information is not right" } })
    }

    // set user session
    await createSession(randomUUID() , result.data?.email as string , "ehsan" , 'user')

    return NextResponse.json({ success: true })
}
