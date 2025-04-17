"use client";

import {
  IconButton,
  useColorMode,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();

  const iconColor = useColorModeValue(theme.colors.brand[500], "gray.300");
  const hoverBg = useColorModeValue("gray.100", "gray.700");

  return (
    <IconButton
      aria-label="Toggle color mode"
      variant="ghost"
      size="sm"
      borderRadius="2xl"
      onClick={toggleColorMode}
      _hover={{ bg: hoverBg }}
      icon={
        <motion.div
          key={colorMode}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.4 }}
          style={{ color: iconColor }}
        >
          {colorMode === "light" ? (
            <MdDarkMode size={20} color="black" />
          ) : (
            <MdOutlineLightMode size={20} />
          )}
        </motion.div>
      }
    />
  );
}
