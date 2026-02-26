import {
  Container,
  Heading,
  Text,
  VStack,
  Box,
  Link,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { getWhatsAppLink, PHONE_DISPLAY } from "../data/products";

export function Contato() {
  return (
    <>
      <Box bg="bg.muted" py={{ base: 14, md: 20 }} position="relative">
        <Container maxW="7xl">
          <VStack gap="4" textAlign="center" maxW="2xl" mx="auto">
            <Box
              w="10"
              h="0.5"
              bg="pink.400"
              _dark={{ bg: "pink.500" }}
              borderRadius="full"
            />
            <Heading fontFamily="heading" size="xl" letterSpacing="-0.02em">
              Contato
            </Heading>
            <Text color="fg.muted" fontSize="lg" lineHeight="tall">
              Fale conosco pelo WhatsApp ou confira nossas redes.
            </Text>
          </VStack>
        </Container>
      </Box>
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 10, md: 14 }} alignItems="start">
          <VStack align="stretch" gap="6">
            <Text
              color="pink.500"
              fontWeight="semibold"
              fontSize="sm"
              letterSpacing="0.15em"
              textTransform="uppercase"
            >
              Atendimento
            </Text>
            <Text color="fg.muted" lineHeight="tall">
              Para encomendas, dúvidas sobre cardápio ou valores, entre em
              contato pelo WhatsApp. Respondemos o mais rápido possível.
            </Text>
            <Box
              p="6"
              borderRadius="2xl"
              bg="bg.panel"
              borderWidth="1px"
              borderColor="border"
              className="card-panel"
              w="full"
            >
              <Text fontSize="xs" color="fg.muted" mb="2" fontWeight="medium">
                Telefone / WhatsApp
              </Text>
              <Link
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="green.600"
                _dark={{ color: "green.400" }}
                _hover={{ textDecoration: "underline" }}
                display="block"
                transition="color 0.2s"
              >
                {PHONE_DISPLAY}
              </Link>
              <Text fontSize="xs" color="fg.muted" mt="1">
                Toque para abrir o WhatsApp
              </Text>
            </Box>
            <WhatsAppButton w="full" justifyContent="center" size="lg">
              Abrir conversa no WhatsApp
            </WhatsAppButton>
          </VStack>
          <VStack align="stretch" gap="6">
            <Text
              color="pink.500"
              fontWeight="semibold"
              fontSize="sm"
              letterSpacing="0.15em"
              textTransform="uppercase"
            >
              Horário
            </Text>
            <Box
              p="6"
              borderRadius="2xl"
              bg="bg.panel"
              borderWidth="1px"
              borderColor="border"
              className="card-panel"
              w="full"
            >
              <Text>Segunda a Sexta: 9h às 18h</Text>
              <Text>Sábado: 9h às 13h</Text>
              <Text color="fg.muted" fontSize="sm" mt="2" lineHeight="tall">
                Encomendas com antecedência para datas especiais.
              </Text>
            </Box>
            <Text
              color="pink.500"
              fontWeight="semibold"
              fontSize="sm"
              letterSpacing="0.15em"
              textTransform="uppercase"
            >
              Redes sociais
            </Text>
            <HStack gap="6" flexWrap="wrap">
              <Link
                href="#"
                color="fg.muted"
                _hover={{ color: "pink.500" }}
                fontSize="sm"
                transition="color 0.2s"
              >
                Instagram
              </Link>
              <Link
                href="#"
                color="fg.muted"
                _hover={{ color: "pink.500" }}
                fontSize="sm"
                transition="color 0.2s"
              >
                Facebook
              </Link>
            </HStack>
          </VStack>
        </SimpleGrid>
      </Container>
    </>
  );
}
