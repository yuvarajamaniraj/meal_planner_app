import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthenticated = !!token
  
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Allow access to the home page
  if (path === '/') {
    return NextResponse.next()
  }

  // Check if user is authenticated
  if (!isAuthenticated) {
    // Redirect to the homepage (login page) if not authenticated
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/meal-plan/:path*',
    '/recipes/:path*',
    '/shopping-list/:path*'
  ]
}
