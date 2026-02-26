import { Box } from "@chakra-ui/react";

/**
 * Divisor ondulado entre seções — usa a cor do conteúdo para transição suave (sem linha branca).
 * Usa variável CSS --layout-bg-solid para combinar com o fundo da página.
 */
export function CurveDivider({ fill }) {
  return (
    <Box
      position="absolute"
      left="0"
      right="0"
      bottom="-1px"
      width="100%"
      height={{ base: "56px", md: "72px" }}
      sx={{ bg: fill || "var(--layout-bg-solid)" }}
      clipPath="polygon(0 70%, 20% 55%, 40% 65%, 60% 50%, 80% 60%, 100% 55%, 100% 100%, 0 100%)"
      pointerEvents="none"
    />
  );
}
