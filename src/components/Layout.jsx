import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppButton";
import { AnimatedBackground } from "./AnimatedBackground";

export function Layout({ children }) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column" position="relative">
      {/* Conteúdo: fundo animado ATRÁS (z 0), overlay transparente (z 0.5), conteúdo em cima (z 1) */}
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        minH="100vh"
      >
        {/* 1) Camada do fundo animado — mais atrás */}
        <Box
          position="absolute"
          inset="0"
          zIndex="0"
          overflow="hidden"
          aria-hidden
        >
          <AnimatedBackground />
        </Box>
        {/* 2) Overlay semi-transparente — deixa a animação aparecer por baixo */}
        <Box
          position="absolute"
          inset="0"
          zIndex="1"
          className="layout-content-overlay"
          pointerEvents="none"
          aria-hidden
        />
        {/* 3) Conteúdo em cima */}
        <Box position="relative" zIndex="2" display="flex" flexDirection="column" minH="100vh" className="layout-content">
          <Navbar />
          <Box as="main" flex="1">
            {children}
          </Box>
          <Footer />
        </Box>
      </Box>
      <WhatsAppFloat />
    </Box>
  );
}
