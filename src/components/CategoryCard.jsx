import { Box, CardRoot, CardBody, Link, Text, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

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
        overflow="hidden"
        borderRadius="2xl"
        bg="bg.panel"
        borderWidth="1px"
        borderColor="border"
        h="full"
        transition="all 0.35s ease"
        _hover={{
          shadow: "xl",
          borderColor: "pink.200",
          _dark: { borderColor: "pink.700" },
          transform: "translateY(-6px)",
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
          <Text fontSize="2xl" mb="2" aria-hidden lineHeight="1">
            {category.icon}
          </Text>
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
