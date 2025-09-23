"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import ho from "public/images/partners/ho_logo.jpg";
import { useT } from "@/components/layout/i18n-provider";

export const Information = () => {
  const t = useT();
  return (
    <Card variant="mixed" className="border-0 bg-transparent">
      <CardHeader>
        <CardTitle className="text-2xl">
          {t("main.footer.about.title")}
        </CardTitle>
        <CardDescription className="text-base/7 sm:text-base/7">
          {t("main.footer.about.content")}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <div>
          <p>Dirección: Av. 18 de Julio 1240, Montevideo, Uruguay</p>
          <p>Tel: (+598) 95159228 </p>
          <p>Email: negocios@otiumteksrl.com</p>
        </div>
        <div className="mt-5">Partners</div>
        <div className="grid grid-cols-5">
          <Link href="https://ho.com.uy" target="_blank">
            <Image
              src={ho}
              width={0}
              height={0}
              alt=""
              className="w-full rounded-xl"
            />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
