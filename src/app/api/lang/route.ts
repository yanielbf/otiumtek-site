import { NextResponse } from "next/server";
import { locales } from "@/lib/i18n";

export async function POST(req: Request) {
  const { lang } = await req.json() as { lang?: string };
  if (!lang || !locales.includes(lang as any)) {
    return NextResponse.json({ ok: false, error: "invalid_lang" }, { status: 400 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set("lang", lang, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return res;
}
