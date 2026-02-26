import { Box, Link } from "@chakra-ui/react";
import { LuMessageCircle } from "react-icons/lu";
import { getWhatsAppLink } from "../data/products";

export function WhatsAppButton({ message, children, ...props }) {
  const href = getWhatsAppLink(message);

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      gap="2"
      bg="green.500"
      color="white"
      px="5"
      py="3"
      borderRadius="xl"
      fontWeight="semibold"
      boxShadow="md"
      _hover={{
        bg: "green.600",
        textDecoration: "none",
        transform: "translateY(-2px)",
        boxShadow: "0 8px 24px rgba(34, 197, 94, 0.35)",
      }}
      _active={{ transform: "scale(0.98)" }}
      transition="all 0.25s ease"
      {...props}
    >
      {children}
    </Link>
  );
}

export function WhatsAppFloat() {
  return (
    <Box
      position="fixed"
      bottom={{ base: "5", md: "6" }}
      right={{ base: "5", md: "6" }}
      zIndex="sticky"
    >
      <Link
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="56px"
        h="56px"
        borderRadius="full"
        bg="green.500"
        color="white"
        boxShadow="xl"
        fontSize="26px"
        _hover={{
          bg: "green.600",
          transform: "scale(1.08)",
          color: "white",
          boxShadow: "2xl",
        }}
        _active={{ transform: "scale(0.95)" }}
        transition="all 0.2s"
        aria-label="Abrir WhatsApp"
      >
        <LuMessageCircle size={28} color="white" />
      </Link>
    </Box>
  );
}
