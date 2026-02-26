import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Box,
  Link,
} from "@chakra-ui/react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { getCategoryBySlug, getProductsByCategoryId } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { CategoryIcon } from "../components/CategoryIcon";

export function CategoriaDetail() {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug);
  const categoryProducts = category ? getProductsByCategoryId(category.id) : [];

  if (!category) {
    return (
      <Container maxW="7xl" py="16">
        <VStack gap="6" textAlign="center">
          <Heading fontFamily="heading" size="lg">
            Categoria não encontrada
          </Heading>
          <Link
            as={RouterLink}
            to="/categorias"
            color="pink.500"
            _hover={{ textDecoration: "underline" }}
          >
            Voltar para categorias
          </Link>
        </VStack>
      </Container>
    );
  }

  return (
    <Box>
      <Box bg="bg.muted" py={{ base: 10, md: 14 }} position="relative">
        <Container maxW="7xl">
          <VStack gap="4" textAlign="center">
            <CategoryIcon categoryId={category.id} boxSize={12} />
            <Box
              w="10"
              h="0.5"
              bg="pink.400"
              _dark={{ bg: "pink.500" }}
              borderRadius="full"
            />
            <Heading fontFamily="heading" size="xl" letterSpacing="-0.02em">
              {category.name}
            </Heading>
            <Text color="fg.muted" maxW="lg" lineHeight="tall">
              {category.description}
            </Text>
          </VStack>
        </Container>
      </Box>
      <Container maxW="7xl" py={{ base: 10, md: 14 }}>
        {categoryProducts.length === 0 ? (
          <VStack gap="6" py="16">
            <Text color="fg.muted">
              Nenhum produto nesta categoria no momento.
            </Text>
            <Link
              as={RouterLink}
              to="/categorias"
              color="pink.500"
              _hover={{ textDecoration: "underline" }}
            >
              Ver outras categorias
            </Link>
          </VStack>
        ) : (
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 6, md: 8 }}>
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </Box>
  );
}
