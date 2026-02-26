import { Box } from "@chakra-ui/react";

/** Divisor ondulado entre seções - usa a cor de fundo da seção de baixo */
export function CurveDivider({ fill = "bg" }) {
  return (
    <Box
      position="absolute"
      left="0"
      right="0"
      bottom="-1px"
      width="100%"
      height={{ base: "48px", md: "64px" }}
      bg={fill}
      clipPath="polygon(0 60%, 25% 40%, 50% 55%, 75% 35%, 100% 50%, 100% 100%, 0 100%)"
      pointerEvents="none"
    />
  );
}
