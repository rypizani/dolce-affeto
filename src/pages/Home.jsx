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
import { LOGO_IMAGE_URL } from "../constants";

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
        {/* Transição suave para a seção de baixo (evita linha dura) */}
        <Box
          position="absolute"
          left="0"
          right="0"
          bottom="0"
          height="100px"
          bgGradient="linear(180deg, transparent 0%, pink.50/60 60%, pink.50 100%)"
          _dark={{ bgGradient: "linear(180deg, transparent 0%, pink.900/40 60%, pink.900/80 100%)" }}
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
            <Box
              w="20"
              h="20"
              mx="auto"
              borderRadius="full"
              overflow="hidden"
              boxShadow="0 4px 24px rgba(236, 72, 153, 0.15)"
              _dark={{ boxShadow: "0 4px 24px rgba(190, 24, 93, 0.2)" }}
              transition="transform 0.4s ease, box-shadow 0.4s ease"
              _hover={{
                transform: "scale(1.05)",
                boxShadow: "0 8px 32px rgba(236, 72, 153, 0.25)",
                _dark: { boxShadow: "0 8px 32px rgba(190, 24, 93, 0.35)" },
              }}
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
              fontSize="xs"
              fontWeight="semibold"
              color="pink.500"
              letterSpacing="0.2em"
              textTransform="uppercase"
              opacity={0.95}
            >
              Confeitaria Artesanal
            </Text>
            <Box position="relative" w="full">
              <Box
                w="16"
                h="0.5"
                mx="auto"
                mb="3"
                bgGradient="linear(90deg, transparent, pink.400, pink.300, pink.400, transparent)"
                _dark={{ bgGradient: "linear(90deg, transparent, pink.500, pink.400, pink.500, transparent)" }}
                borderRadius="full"
              />
              <Heading
                fontFamily="heading"
                size={{ base: "3xl", md: "5xl" }}
                color="fg"
                lineHeight="1.1"
                letterSpacing="-0.02em"
              >
                Dolce Affeto
              </Heading>
              <Box
                w="16"
                h="0.5"
                mx="auto"
                mt="3"
                bgGradient="linear(90deg, transparent, pink.400, pink.300, pink.400, transparent)"
                _dark={{ bgGradient: "linear(90deg, transparent, pink.500, pink.400, pink.500, transparent)" }}
                borderRadius="full"
              />
            </Box>
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
              transition="all 0.3s ease"
              _hover={{
                bg: "pink.50",
                borderColor: "pink.400",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(236, 72, 153, 0.2)",
                _dark: { bg: "pink.900/30", borderColor: "pink.500", boxShadow: "0 6px 20px rgba(190, 24, 93, 0.25)" },
              }}
            >
              Ver categorias
            </Button>
            </HStack>
          </VStack>
        </Container>
        <CurveDivider />
      </Box>

      {/* Categorias */}
      <Container maxW="7xl" py={{ base: 16, md: 20 }} position="relative">
        <VStack gap="12" align="stretch">
          <VStack gap="4" textAlign="center" className="section-header">
            <Box
              w="12"
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
            <Box
              w="12"
              h="0.5"
              bg="pink.400"
              _dark={{ bg: "pink.500" }}
              borderRadius="full"
            />
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
              transition="all 0.3s ease"
              _hover={{
                bg: "pink.50",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(236, 72, 153, 0.18)",
                _dark: { bg: "pink.900/20", boxShadow: "0 6px 20px rgba(190, 24, 93, 0.2)" },
              }}
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
              Chamar no WhatsApp
            </WhatsAppButton>
          </VStack>
        </Container>
      </Box>
    </>
  );
}
