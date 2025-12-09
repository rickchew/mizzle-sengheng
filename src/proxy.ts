import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  if (request.nextUrl.pathname == '/') {
    return NextResponse.redirect(new URL('/demos/classic-default', request.url))
  }
  return response
}

// See "Matching Paths" below to learn more
// Note: `next-auth` middleware (Node runtime) was removed to avoid
// `src/proxy.ts` removed - middleware logic is now implemented in project-root `middleware.ts`
// This file intentionally left blank to avoid Next.js picking it up as middleware.

