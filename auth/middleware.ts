import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    const adminRoutes = ['/admin', '/api/admin'];
    const isAdminRoute = adminRoutes.some(r => path.startsWith(r));

    if (isAdminRoute && token?.role !== 'admin') {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const publicRoutes = ['/', '/auth/login', '/api/auth', '/precios', '/servicios', '/contacto'];
        const isPublic = publicRoutes.some(r => req.nextUrl.pathname.startsWith(r));
        if (isPublic) return true;
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/api/protected/:path*'],
};
