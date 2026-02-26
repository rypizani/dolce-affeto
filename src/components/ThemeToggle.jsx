import { IconButton } from "@chakra-ui/react";
import { useTheme } from "../ThemeContext";

export function ThemeToggle(props) {
  const { appearance, toggleTheme } = useTheme();
  const isDark = appearance === "dark";

  return (
    <IconButton
      size="md"
      variant="ghost"
      aria-label={isDark ? "Modo claro" : "Modo escuro"}
      onClick={toggleTheme}
      fontSize="xl"
      _hover={{ bg: "bg.muted" }}
      {...props}
    >
      {isDark ? "☀️" : "🌙"}
    </IconButton>
  );
}
