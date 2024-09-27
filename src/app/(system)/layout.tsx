import "~/styles/globals.css";

import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import { nunito } from "~/assets/fonts/nunito";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Bookwise",
  description:
    "Bookwise is a web application designed for book enthusiasts to rate, review, and discuss their favorite books.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <ClerkProvider>
        <body>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </ClerkProvider>
    </html>
  );
}
