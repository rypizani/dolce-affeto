import {
  Box,
  Container,
  Link,
  HStack,
  Text,
  VStack,
  Separator,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "../data/products";
import { LOGO_IMAGE_URL } from "../constants";

export function Footer() {
  return (
    <Box
      as="footer"
      bg="bg.muted"
      borderTopWidth="1px"
      borderColor="border"
      mt="auto"
    >
      <Container maxW="7xl" py={{ base: 10, md: 12 }}>
        <VStack gap="10" align="stretch">
          <HStack
            justify={{ base: "center", md: "space-between" }}
            flexWrap="wrap"
            gap="8"
            align={{ base: "center", md: "flex-start" }}
          >
            <VStack align={{ base: "center", md: "start" }} gap="2">
              <HStack gap="2">
                <Box
                  w="10"
                  h="10"
                  borderRadius="full"
                  overflow="hidden"
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
                <Text
                  fontFamily="heading"
                  fontSize="xl"
                  fontWeight="bold"
                  color="fg"
                  letterSpacing="-0.02em"
                >
                  Dolce Affeto Confeitaria
                </Text>
              </HStack>
              <Text fontSize="sm" color="fg.muted">
                Doces com amor e carinho
              </Text>
            </VStack>

            <VStack align={{ base: "center", md: "end" }} gap="2">
              <Text
                fontSize="xs"
                fontWeight="semibold"
                color="fg.muted"
                letterSpacing="0.05em"
              >
                Atendimento
              </Text>
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                color="green.600"
                _dark={{ color: "green.400" }}
                _hover={{ textDecoration: "underline" }}
                transition="color 0.2s"
              >
                {PHONE_DISPLAY}
              </Link>
              <Text fontSize="xs" color="fg.muted">
                Clique para falar no WhatsApp
              </Text>
            </VStack>
          </HStack>

          <Separator />

          <HStack
            justify="center"
            gap="8"
            flexWrap="wrap"
            py="2"
          >
            <Link
              as={RouterLink}
              to="/"
              color="fg.muted"
              _hover={{ color: "pink.500" }}
              fontSize="sm"
              transition="color 0.2s"
            >
              Início
            </Link>
            <Link
              as={RouterLink}
              to="/categorias"
              color="fg.muted"
              _hover={{ color: "pink.500" }}
              fontSize="sm"
              transition="color 0.2s"
            >
              Categorias
            </Link>
            <Link
              as={RouterLink}
              to="/sobre"
              color="fg.muted"
              _hover={{ color: "pink.500" }}
              fontSize="sm"
              transition="color 0.2s"
            >
              Sobre
            </Link>
            <Link
              as={RouterLink}
              to="/contato"
              color="fg.muted"
              _hover={{ color: "pink.500" }}
              fontSize="sm"
              transition="color 0.2s"
            >
              Contato
            </Link>
          </HStack>

          <Text
            textAlign="center"
            fontSize="xs"
            color="fg.muted"
            pt="2"
          >
            © {new Date().getFullYear()} Dolce Affeto Confeitaria. Todos os direitos reservados.
          </Text>
          <Text fontSize="xs" color="fg.muted" opacity={0.9}>
            Feito com carinho para adoçar seu dia.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
