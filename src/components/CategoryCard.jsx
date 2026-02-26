import { Box, CardRoot, CardBody, Link, Text, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CategoryIcon } from "./CategoryIcon";

export function CategoryCard({ category }) {
  return (
    <Link
      as={RouterLink}
      to={`/categorias/${category.slug}`}
      _hover={{ textDecoration: "none" }}
      display="block"
      h="full"
    >
      <CardRoot
        className="card-panel"
        overflow="hidden"
        borderRadius="2xl"
        bg="bg.panel"
        borderWidth="1px"
        borderColor="border"
        h="full"
        transition="all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
        _hover={{
          shadow: "xl",
          borderColor: "pink.200",
          _dark: { borderColor: "pink.700" },
          transform: "translateY(-8px)",
        }}
      >
        <Box
          className="card-image-wrap"
          position="relative"
          h="52"
          overflow="hidden"
        >
          <Box
            as="img"
            src={category.image}
            alt={category.name}
            w="full"
            h="full"
            objectFit="cover"
          />
        </Box>
        <CardBody py="6" px="5">
          <CategoryIcon categoryId={category.id} boxSize={8} mb="2" />
          <Heading size="md" fontFamily="heading" mb="2" letterSpacing="-0.02em">
            {category.name}
          </Heading>
          <Text color="fg.muted" fontSize="sm" noOfLines={2} lineHeight="tall">
            {category.description}
          </Text>
          <Text
            mt="3"
            fontSize="xs"
            fontWeight="semibold"
            color="pink.500"
            _dark={{ color: "pink.400" }}
          >
            Ver produtos →
          </Text>
        </CardBody>
      </CardRoot>
    </Link>
  );
}
