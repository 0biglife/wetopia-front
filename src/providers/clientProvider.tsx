"use client";

import theme from "@/styles/theme";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <RecoilRoot>{children}</RecoilRoot>
      </ChakraProvider>
    </>
  );
}
