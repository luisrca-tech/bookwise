import "~/styles/globals.css";

import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { nunito } from "~/assets/fonts/nunito";
import { TRPCReactProvider } from "~/trpc/react";
import { Header } from "../_components/ui/Header";

export const metadata: Metadata = {
  title: "Bookwise",
  description:
    "Bookwise is a web application designed for book enthusiasts to rate, review, and discuss their favorite books.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  auth().protect({
    unauthenticatedUrl: "/login",
    unauthorizedUrl: "/",
  });

  return (
    <html lang="en" className={`${nunito.variable}`}>
      <ClerkProvider>
        <body className="bg-gray-800 flex gap-24">
            <Header />
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
