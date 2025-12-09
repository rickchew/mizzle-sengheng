import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/demos/classic-default', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
