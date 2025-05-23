import { clerkMiddleware, createRouteMatcher, clerkClient, currentUser } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/']);

export default clerkMiddleware(async (auth, request) => {
  // 1. Protect non-public routes
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
  
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};