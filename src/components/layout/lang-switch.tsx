"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "@/components/layout/i18n-provider";

import { cn } from "@/lib/utils";

export function LangSelector() {
  const router = useRouter();
  const current = useLocale();
  const [isMounted, setIsMounted] = useState(false);

  async function setLang(lang: string) {
    localStorage.setItem("lang", lang);
    await fetch("/api/lang", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lang }),
    });
    router.refresh();
  }

  const modes = [
    {
      icon: <div>ES</div>,
      name: "es",
    },
    {
      icon: <div>EN</div>,
      name: "en",
    },
  ];

  useEffect(() => setIsMounted(true), []);

  return (
    <div className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
      {modes.map(({ name, icon }) => (
        <ModeButton
          key={name}
          onClick={() => setLang(name)}
          icon={icon}
          name={name}
          isActive={isMounted && current === name}
        />
      ))}
    </div>
  );
}

const ModeButton = ({
  onClick,
  icon,
  isActive,
  name,
}: {
  onClick: () => void;
  icon: any;
  isActive: boolean;
  name: string;
}) => (
  <button
    className={cn(
      "cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-background",
      isActive && "bg-background text-foreground shadow",
      !isActive && "hover:text-foreground"
    )}
    onClick={onClick}
    type="button"
  >
    <div className="sr-only">Toggle {name} mode</div>
    {icon}
  </button>
);
