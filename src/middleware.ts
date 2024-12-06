import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  // Redirect if no token is found
  if (!token) {
    return NextResponse.redirect(new URL('/pages/error', req.url));
  }

  try {
    // Verify JWT using jose
    const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
    const { payload } = await jwtVerify(token, secret);



    // Role-based protection
    const urlPath = req.nextUrl.pathname;

    // Protect '/pages/dashboard' for admin only
    if (urlPath.startsWith('/pages/dashboard') && payload.role !== 'admin') {
      return NextResponse.redirect(new URL('/pages/error', req.url));
    }

    // Allow access if the role is admin or the path is not '/pages/dashboard'
    return NextResponse.next();

  } catch (error: any) {
    console.error("Token verification failed:", error.message);
    return NextResponse.redirect(new URL('/pages/error', req.url));
  }
}

export const config = {
  matcher: ['/pages/article/:path*', '/pages/dashboard/:path*'],
};
