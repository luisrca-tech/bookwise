import "~/styles/globals.css";

import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { nunito } from "~/assets/fonts/nunito";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Bookwise",
  description:
    "Bookwise is a web application designed for book enthusiasts to rate, review, and discuss their favorite books.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { userId } = auth();

  if (userId) redirect("/");

  return (
    <html lang="en" className={`${nunito.variable}`}>
      <ClerkProvider>
        <body className="max-h-screen overflow-hidden bg-gray-800">
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
