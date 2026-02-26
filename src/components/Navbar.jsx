import { Box, Container, Link, HStack } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { LOGO_IMAGE_URL } from "../constants";

const navItems = [
  { to: "/", label: "Início" },
  { to: "/categorias", label: "Categorias" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export function Navbar() {
  const location = useLocation();

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="bg.panel"
      backdropFilter="blur(14px)"
      borderBottomWidth="1px"
      borderColor="border"
    >
      <Container maxW="7xl" py={{ base: 3, md: 4 }}>
        <HStack justify="space-between" gap="4" flexWrap="wrap">
            <Link
              as={RouterLink}
              to="/"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              fontFamily="heading"
              color="fg"
              letterSpacing="-0.02em"
              _hover={{ color: "pink.500", textDecoration: "none" }}
              transition="color 0.2s, transform 0.2s"
              display="flex"
              alignItems="center"
              gap="2"
            >
              <Box
                w={{ base: "8", md: "9" }}
                h={{ base: "8", md: "9" }}
                flexShrink="0"
                borderRadius="full"
                overflow="hidden"
                transition="transform 0.3s ease, box-shadow 0.3s ease"
                _hover={{ transform: "scale(1.08)", boxShadow: "0 2px 12px rgba(236, 72, 153, 0.2)" }}
              >
              <Box
                as="img"
                src={LOGO_IMAGE_URL}
                alt=""
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
            Dolce Affeto
          </Link>

          <HStack gap={{ base: 0, md: 1 }} flexWrap="wrap">
            {navItems.map(({ to, label }) => (
              <Link
                key={to}
                as={RouterLink}
                to={to}
                px={{ base: 2, md: 4 }}
                py="2"
                borderRadius="lg"
                fontWeight={location.pathname === to ? "semibold" : "medium"}
                color={location.pathname === to ? "pink.500" : "fg.muted"}
                _hover={{
                  color: "pink.500",
                  bg: "bg.muted",
                  textDecoration: "none",
                }}
                transition="all 0.2s"
                fontSize="sm"
              >
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
