export const locales = ["es", "en"] as const;
export type Locale = typeof locales[number];
export const DEFAULT_LOCALE: Locale = "es";

export function pickFromAcceptLanguage(al?: string): Locale {
  const found = al?.split(",")
    .map(s => s.trim().slice(0,2).toLowerCase())
    .find(code => (locales as readonly string[]).includes(code as any));
  return (found as Locale) ?? DEFAULT_LOCALE;
}

export async function getDictionary(locale: Locale) {
  const mod = await import(`@/dictionaries/${locale}.json`);
  return mod.default as Record<string, string>;
}
