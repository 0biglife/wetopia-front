"use client";
import { Providers } from "./provider";
import { Global } from "@emotion/react";
import { globalStyle } from "@/styles/emotion";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Global styles={globalStyle} />
      <Providers>{children}</Providers>
    </>
  );
}
