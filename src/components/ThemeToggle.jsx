import { IconButton } from "@chakra-ui/react";
import { LuSun, LuMoon } from "react-icons/lu";
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
      _hover={{ bg: "bg.muted" }}
      {...props}
    >
      {isDark ? <LuSun size={20} /> : <LuMoon size={20} />}
    </IconButton>
  );
}
