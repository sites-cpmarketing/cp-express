import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function middleware(request: NextRequest) {
  const { supabase, response } = {
    supabase: createClient(),
    response: NextResponse.next({
      request: {
        headers: request.headers,
      },
    }),
  };

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const publicUrls = ['/login', '/signup', '/auth/callback', '/auth/confirm'];
  const isPublicUrl = publicUrls.includes(request.nextUrl.pathname);

  if (user && isPublicUrl) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (!user && !isPublicUrl) {
    let from = request.nextUrl.pathname;
    if (request.nextUrl.search) {
      from += request.nextUrl.search;
    }
    return NextResponse.redirect(new URL(`/login?from=${encodeURIComponent(from)}`, request.url))
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
