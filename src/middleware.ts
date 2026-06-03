import { NextRequest, NextResponse } from "next/server";
import {
  defaultLocale,
  isValidLocale,
  localizePath,
  LOCALE_HEADER,
} from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/").filter(Boolean)[0];

  if (segment && isValidLocale(segment)) {
    const response = NextResponse.next();
    response.headers.set(LOCALE_HEADER, segment);
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = localizePath(pathname, defaultLocale);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
