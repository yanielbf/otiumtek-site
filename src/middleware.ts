import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { pickFromAcceptLanguage } from "@/lib/i18n";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Excluir API, estáticos y chunks
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    /\.[a-z0-9]+$/i.test(pathname)
  ) return NextResponse.next();

  // Si ya hay cookie 'lang', seguir
  const existing = req.cookies.get("lang")?.value;
  if (existing) return NextResponse.next();

  // Elegir por Accept-Language y setear cookie
  const chosen = pickFromAcceptLanguage(req.headers.get("accept-language") || undefined);
  const res = NextResponse.next();
  res.cookies.set("lang", chosen, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = { matcher: ["/((?!_next|.*\\..*).*)"] };
