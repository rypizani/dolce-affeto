import {
  Box,
  CardRoot,
  CardBody,
  CardFooter,
  Text,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { WhatsAppButton } from "./WhatsAppButton";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1565958011703-44f9825ba770?w=600&q=80";

export function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false);
  const message = `Olá! Gostaria de saber mais sobre: ${product.name}`;
  const imgSrc = imgError ? FALLBACK_IMAGE : product.image;

  return (
    <CardRoot
      className="card-panel"
      overflow="hidden"
      borderRadius="2xl"
      bg="bg.panel"
      borderWidth="1px"
      borderColor="border"
      transition="all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
      _hover={{
        shadow: "xl",
        borderColor: "pink.200",
        _dark: { borderColor: "pink.700" },
        transform: "translateY(-4px)",
      }}
    >
      <Box className="card-image-wrap" h="52" overflow="hidden" bg="bg.muted">
        <Box
          as="img"
          src={imgSrc}
          alt={product.name}
          w="full"
          h="full"
          objectFit="cover"
          onError={() => setImgError(true)}
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
