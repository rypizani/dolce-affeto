import { Box } from "@chakra-ui/react";

/**
 * Fundo animado com blobs em gradiente — estilos e animação no global.css para garantir visibilidade.
 */
export function AnimatedBackground() {
  return (
    <Box className="animated-bg">
      <Box className="bg-blob bg-blob-1" />
      <Box className="bg-blob bg-blob-2" />
      <Box className="bg-blob bg-blob-3" />
      <Box className="bg-blob bg-blob-4" />
      <Box className="bg-blob bg-blob-5" />
    </Box>
  );
}
