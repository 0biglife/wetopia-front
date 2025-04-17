import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./provider";
import { Header } from "@/components";
import { ChakraColorModeScript } from "@/components/layout/ChakraColorModeScript";

export const metadata: Metadata = {
  title: "Wetopia",
  description:
    "Wetopia is a social media platform that connects people for next-level experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning={true}>
        <ChakraColorModeScript />
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
