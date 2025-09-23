"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// 👇 importa tus helpers de formulario que pegaste arriba
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";

import { sendTelegramContact } from "@/lib/api";

import { useT } from "@/components/layout/i18n-provider";

const schema = z.object({
  name: z.string().min(2, "Ingresá tu nombre completo"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .optional()
    .transform((v) => (v ?? "").trim())
    .refine((v) => v === "" || /^[\d\s()+.-]{6,}$/.test(v), {
      message: "Teléfono inválido",
    }),
  message: z.string().min(10, "Cuéntanos un poco más (mín. 10 caracteres)"),
  // honeypot anti-spam (oculto)
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

export const Contactus = () => {
  const t = useT();
  const [serverMsg, setServerMsg] = useState<string | null>(null);

  const form = useForm<FormValues>({
    //@ts-ignore
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      website: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data: FormValues) => {
    setServerMsg(null);
    try {
      const res = await sendTelegramContact(data);
      if ((res as any)?.error) throw Error((res as any).error);
      setServerMsg("¡Gracias! Te responderemos a la brevedad.");
      form.reset();
    } catch (err: any) {
      setServerMsg(err?.message || "Hubo un problema. Intentá nuevamente.");
    }
  };

  return (
    <Card variant="mixed" className="md:w-xl backdrop-blur">
      <CardHeader>
        <CardTitle className="text-2xl">
          {t("main.footer.contact.title")}
        </CardTitle>
        <CardDescription>{t("main.footer.contact.content")}</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-3"
            //@ts-ignore
            onSubmit={form.handleSubmit(onSubmit)}
            noValidate
          >
            {/* Honeypot: campo oculto para bots */}
            <FormField
              //@ts-ignore
              control={form.control}
              name="website"
              render={({ field }) => (
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  {...field}
                />
              )}
            />

            <FormField
              //@ts-ignore
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("main.footer.contact.input.name")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("main.footer.contact.placeholder.name")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              //@ts-ignore
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("main.footer.contact.input.email")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t("main.footer.contact.placeholder.email")}
                      autoComplete="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              //@ts-ignore
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("main.footer.contact.input.phone")}</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+598 ..." {...field} />
                  </FormControl>
                  <FormDescription>
                    {t("main.footer.contact.placeholder.phone")}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              //@ts-ignore
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {t("main.footer.contact.input.message")}
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={8}
                      placeholder={t("main.footer.contact.placeholder.message")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="flex items-center justify-center"
            >
              {form.formState.isSubmitting
                ? t("main.footer.contact.sending")
                : t("main.footer.contact.button.send")}
            </Button>

            {serverMsg && (
              <p
                className={`text-sm ${
                  serverMsg.startsWith("¡Gracias")
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {serverMsg}
              </p>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
