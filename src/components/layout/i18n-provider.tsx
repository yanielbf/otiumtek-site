"use client";
import React, { createContext, useContext, useMemo } from "react";

type Ctx = { locale: string; dict: Record<string, string>; };
const I18nCtx = createContext<Ctx | null>(null);

export function I18nProvider({ locale, dict, children }:{
  locale: string; dict: Record<string, string>; children: React.ReactNode;
}) {
  const value = useMemo(() => ({ locale, dict }), [locale, dict]);
  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useT() {
  const ctx = useContext(I18nCtx);
  if (!ctx) return (k: string) => k;
  return (k: string) => ctx.dict[k] ?? k;
}

export function useLocale() {
  const ctx = useContext(I18nCtx);
  return ctx?.locale ?? "es";
}
