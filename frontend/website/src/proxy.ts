import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { decrypt } from "./lib/session"

const protectedRoutes = ["/user/dashboard"]
const publicRoutes = ["/auth/login" , "/auth/register" , "/auth/forgot-password" , "/auth/email-verification" , "/auth/reset-password"]

export async function proxy(request: NextRequest) {

    const path = request.nextUrl.pathname

    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const cookie = (await cookies()).get("session")?.value
    const session = await decrypt(cookie)

    // console.log("protected" , isProtectedRoute)
    // console.log("public" , isPublicRoute)


    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL('/auth/login', request.nextUrl))
    }

    if (isPublicRoute && session?.userId &&
        !request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/user/dashboard', request.nextUrl))
    }

    return NextResponse.next();
}


export const config = {
    matcher : ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}
