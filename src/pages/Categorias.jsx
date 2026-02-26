import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Box,
} from "@chakra-ui/react";
import { categories } from "../data/products";
import { CategoryCard } from "../components/CategoryCard";

export function Categorias() {
  return (
    <Container maxW="7xl" py={{ base: 12, md: 16 }}>
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
            Categorias
          </Heading>
          <Text color="fg.muted" maxW="md" lineHeight="tall">
            Escolha uma categoria para ver os produtos e encomendar pelo WhatsApp.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
