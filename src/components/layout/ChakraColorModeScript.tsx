"use client";

import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/styles/theme";

export function ChakraColorModeScript() {
  return <ColorModeScript initialColorMode={theme.config.initialColorMode} />;
}
