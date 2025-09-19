import type { Metadata } from "next/types";

import { redirect } from "next/navigation";
// export const dynamic = 'force-static'
export const revalidate = 600;

export default async function Page() {
  return redirect("/");
}

export const metadata: Metadata = {
  title: `Otiumtek Solutions`,
};
