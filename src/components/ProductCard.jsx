import {
  Box,
  CardRoot,
  CardBody,
  CardFooter,
  Text,
  Heading,
} from "@chakra-ui/react";
import { WhatsAppButton } from "./WhatsAppButton";

export function ProductCard({ product }) {
  const message = `Olá! Gostaria de saber mais sobre: ${product.name}`;

  return (
    <CardRoot
      overflow="hidden"
      borderRadius="2xl"
      bg="bg.panel"
      borderWidth="1px"
      borderColor="border"
      transition="all 0.35s ease"
      _hover={{
        shadow: "xl",
        borderColor: "pink.200",
        _dark: { borderColor: "pink.700" },
      }}
    >
      <Box className="card-image-wrap" h="52" overflow="hidden">
        <Box
          as="img"
          src={product.image}
          alt={product.name}
          w="full"
          h="full"
          objectFit="cover"
        />
      </Box>
      <CardBody py="5" px="5">
        <Heading size="md" fontFamily="heading" mb="2" letterSpacing="-0.02em">
          {product.name}
        </Heading>
        <Text color="fg.muted" fontSize="sm" noOfLines={2} lineHeight="tall">
          {product.description}
        </Text>
        <Box
          mt="3"
          display="inline-block"
          px="3"
          py="1"
          borderRadius="full"
          bg="pink.50"
          _dark={{ bg: "pink.900/30" }}
        >
          <Text fontSize="sm" fontWeight="semibold" color="pink.600" _dark={{ color: "pink.400" }}>
            {product.price}
          </Text>
        </Box>
      </CardBody>
      <CardFooter pt="0" px="5" pb="5">
        <WhatsAppButton message={message} w="full" justifyContent="center">
          Pedir pelo WhatsApp
        </WhatsAppButton>
      </CardFooter>
    </CardRoot>
  );
}
