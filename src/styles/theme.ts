"use client";

import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

// 다크모드 기본 설정
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  gray: {
    800: "#1e1e1e",
  },
  text: {
    light: "gray.800",
    dark: "gray.200",
  },
  background: {
    light: "#ffffff",
    dark: "#121315", // gray.900
  },
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    body: {
      bg: mode(colors.background.light, colors.background.dark)(props),
      color: mode(colors.text.light, colors.text.dark)(props),
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      lineHeight: "1.6",
    },
  }),
};

const fonts = {
  heading: `'Pretendard', sans-serif`,
  body: `'Pretendard', sans-serif`,
};

const components = {
  Button: {
    defaultProps: {
      colorScheme: "brand",
    },
  },
};

// const theme = extendTheme({
//   config,
//   colors,
//   styles,
//   fonts,
//   components,
// });

const theme = extendTheme(
  {
    colors,
    styles,
    fonts,
    components,
  },
  {
    config,
  }
);

export default theme;
