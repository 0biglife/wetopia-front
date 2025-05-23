"use client";

import { Flex, Link, useColorModeValue } from "@chakra-ui/react";
// import { useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import NextLink from "next/link";
import { useTheme } from "@chakra-ui/react";

const SERVICE_URL = "http://localhost:3001";

export default function Header() {
  const theme = useTheme();

  //   const timeZone = region === "KOR" ? "Asia/Seoul" : "America/New_York";

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       const now = new Date();
  //       const formatter = new Intl.DateTimeFormat("en-US", {
  //         timeZone,
  //         hour: "2-digit",
  //         minute: "2-digit",
  //         second: "2-digit",
  //       });
  //       setTime(formatter.format(now));
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, [region]);

  const bg = useColorModeValue(
    theme.colors.background.light,
    theme.colors.background.dark
  );
  const textColor = useColorModeValue(
    theme.colors.text.light,
    theme.colors.text.dark
  );
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex
      as="header"
      position="sticky"
      top={0}
      zIndex={50}
      justify="space-between"
      align="center"
      px={6}
      py={3}
      bg={bg}
      color={textColor}
      borderBottom="1px solid"
      borderColor={borderColor}
    >
      <Link
        as={NextLink}
        href={SERVICE_URL}
        fontWeight="bold"
        fontStyle="italic"
        fontSize="18px"
        _hover={{ textDecoration: "none", opacity: 0.5 }}
      >
        Wetopia.
      </Link>

      <Flex gap={4} align="center">
        {/* <Select
          size="sm"
          w="100px"
          value={region}
          onChange={(e) => setRegion(e.target.value as "KOR" | "USA")}
          variant="outline"
        >
          <option value="KOR">🇰🇷 한국</option>
          <option value="USA">🇺🇸 미국</option>
        </Select>
        <Text fontSize="sm" minW="70px" textAlign="right">
          {time}
        </Text> */}
        <ThemeToggle />
      </Flex>
    </Flex>
  );
}
