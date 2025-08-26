import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request)

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  const { data: { session } } = await supabase.auth.getSession()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  
  const publicUrls = ['/login', '/signup', '/auth/callback'];
  const isPublicUrl = publicUrls.includes(request.nextUrl.pathname);

  // if user is signed in and the current path is a public one, redirect the user to /
  if (user && isPublicUrl) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // if user is not signed in and the current path is not a public one, redirect the user to /login
  if (!user && !isPublicUrl) {
    return NextResponse.redirect(new URL('/login', request.url))
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
