import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    console.log("Middleware executed");
    const authToken = request.cookies.get("token")?.value;


    const isProtectedPath = request.nextUrl.pathname === "/article";

    // Redirect unauthenticated users to the login page
    if (isProtectedPath && !authToken) {
        console.log("Unauthenticated access to /article, redirecting to /login");
        return NextResponse.redirect(new URL('/login', request.url));
    }

    /
    return NextResponse.next();
}

export const config = {
    matcher: ['/article'],
};
