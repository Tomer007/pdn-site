import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Detect locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "";
  const preferredLocale = acceptLanguage.includes("he")
    ? "he"
    : acceptLanguage.includes("en")
    ? "en"
    : defaultLocale;

  // Redirect to the locale-prefixed path
  request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images|.*\\..*).*)"],
};
