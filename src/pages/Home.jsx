import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { categories } from "../data/products";
import { CategoryCard } from "../components/CategoryCard";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { CurveDivider } from "../components/CurveDivider";

export function Home() {
  const featuredCategories = categories.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <Box
        bg="bg.muted"
        py={{ base: 20, md: 28 }}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(135deg, pink.50 0%, transparent 40%, transparent 60%, pink.100 100%)"
          _dark={{ bgGradient: "linear(135deg, pink.950 0%, transparent 40%, transparent 60%, pink.900/30 100%)" }}
          pointerEvents="none"
        />
        <Box
          position="absolute"
          inset="0"
          className="bg-pattern-dots bg-pattern-dots-dark"
          color="pink.400"
          _dark={{ color: "pink.600" }}
          pointerEvents="none"
        />
        <Container maxW="7xl" position="relative">
          <VStack gap="8" textAlign="center" maxW="2xl" mx="auto">
            <Text
              fontSize="xs"
              fontWeight="semibold"
              color="pink.500"
              letterSpacing="0.2em"
              textTransform="uppercase"
              opacity={0.95}
            >
              Confeitaria Artesanal
            </Text>
            <Heading
              fontFamily="heading"
              size={{ base: "3xl", md: "5xl" }}
              color="fg"
              lineHeight="1.1"
              letterSpacing="-0.02em"
            >
              Dolce Affeto
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              lineHeight="tall"
              maxW="md"
            >
              Doces feitos com carinho para os seus momentos especiais.
              Peça pelo WhatsApp e receba em casa.
            </Text>
            <HStack gap="4" flexWrap="wrap" justify="center" pt="2">
              <WhatsAppButton size="lg">
                Fazer pedido no WhatsApp
              </WhatsAppButton>
              <Button
                as={RouterLink}
                to="/categorias"
                variant="outline"
                colorPalette="pink"
                size="lg"
                borderWidth="1.5px"
                borderColor="pink.300"
                _dark={{ borderColor: "pink.600" }}
                _hover={{
                  bg: "pink.50",
                  borderColor: "pink.400",
                  _dark: { bg: "pink.900/30", borderColor: "pink.500" },
                }}
              >
                Ver categorias
              </Button>
            </HStack>
          </VStack>
        </Container>
        <CurveDivider fill="bg" />
      </Box>

      {/* Categorias */}
      <Container maxW="7xl" py={{ base: 16, md: 20 }} position="relative">
        <VStack gap="12" align="stretch">
          <VStack gap="3" textAlign="center">
            <Box
              w="10"
              h="0.5"
              bg="pink.400"
              _dark={{ bg: "pink.500" }}
              borderRadius="full"
            />
            <Text
              color="pink.500"
              fontWeight="semibold"
              fontSize="sm"
              letterSpacing="0.15em"
              textTransform="uppercase"
            >
              Cardápio
            </Text>
            <Heading fontFamily="heading" size="xl" letterSpacing="-0.02em">
              O que você precisa?
            </Heading>
          </VStack>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
            {featuredCategories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </SimpleGrid>
          <Box textAlign="center" pt="2">
            <Button
              as={RouterLink}
              to="/categorias"
              variant="outline"
              colorPalette="pink"
              size="lg"
              borderWidth="1.5px"
              _hover={{ bg: "pink.50", _dark: { bg: "pink.900/20" } }}
            >
              Ver todas as categorias
            </Button>
          </Box>
        </VStack>
      </Container>

      {/* CTA */}
      <Box
        bg="bg.muted"
        py={{ base: 16, md: 20 }}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(180deg, transparent 0%, pink.50/30 50%, transparent 100%)"
          _dark={{ bgGradient: "linear(180deg, transparent 0%, pink.900/20 50%, transparent 100%)" }}
          pointerEvents="none"
        />
        <Container maxW="7xl" position="relative">
          <VStack gap="8" textAlign="center" maxW="xl" mx="auto">
            <Heading fontFamily="heading" size="lg" letterSpacing="-0.02em">
              Pronto para encomendar?
            </Heading>
            <Text color="fg.muted" fontSize="lg" lineHeight="tall">
              Entre em contato pelo WhatsApp. Atendemos encomendas para festas,
              eventos e dia a dia.
            </Text>
            <WhatsAppButton size="lg" px="8" py="4" fontSize="md">
              💬 Chamar no WhatsApp
            </WhatsAppButton>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
