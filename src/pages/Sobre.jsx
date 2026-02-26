import {
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { LuStar, LuCake, LuMessageCircle } from "react-icons/lu";

export function Sobre() {
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
              Sobre a Dolce Affeto
            </Heading>
            <Text color="fg.muted" fontSize="lg" lineHeight="tall">
              Confeitaria artesanal feita com amor e os melhores ingredientes.
            </Text>
          </VStack>
        </Container>
      </Box>
      <Container maxW="7xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 10, md: 14 }} alignItems="center">
          <VStack align="stretch" gap="5" textAlign={{ base: "center", md: "start" }}>
            <Text
              color="pink.500"
              fontWeight="semibold"
              fontSize="sm"
              letterSpacing="0.15em"
              textTransform="uppercase"
            >
              Nossa história
            </Text>
            <Heading fontFamily="heading" size="lg" letterSpacing="-0.02em">
              Doce com afeto
            </Heading>
            <Text color="fg.muted" lineHeight="tall">
              A Dolce Affeto nasceu do amor pela confeitaria e pelo desejo de
              adoçar momentos especiais. Cada bolo, torta e doce é feito
              artesanalmente, com receitas selecionadas e muita dedicação.
            </Text>
            <Text color="fg.muted" lineHeight="tall">
              Trabalhamos com encomendas para festas, eventos, casamentos e
              também para quem quer um docinho no dia a dia. Entre em contato
              pelo WhatsApp e conte-nos o que você precisa.
            </Text>
          </VStack>
          <Box
            borderRadius="2xl"
            overflow="hidden"
            aspectRatio="4/3"
            bg="bg.muted"
            boxShadow="xl"
          >
            <Box
              as="img"
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              alt="Confeitaria"
              w="full"
              h="full"
              objectFit="cover"
            />
          </Box>
        </SimpleGrid>
        <VStack gap="8" mt="20" textAlign="center">
          <Box
            w="10"
            h="0.5"
            bg="pink.400"
            _dark={{ bg: "pink.500" }}
            borderRadius="full"
          />
          <Heading fontFamily="heading" size="md" letterSpacing="-0.02em">
            Por que nos escolher?
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 3 }} gap="6" w="full">
            <VStack
              gap="3"
              p="8"
              bg="bg.panel"
              borderRadius="2xl"
              borderWidth="1px"
              borderColor="border"
              className="card-panel"
              _hover={{ borderColor: "pink.200", _dark: { borderColor: "pink.700" } }}
              transition="border-color 0.2s"
            >
              <Box color="pink.500" _dark={{ color: "pink.400" }}>
                <LuStar size={40} />
              </Box>
              <Text fontWeight="semibold" fontSize="md">
                Ingredientes de qualidade
              </Text>
              <Text color="fg.muted" fontSize="sm" lineHeight="tall">
                Selecionamos os melhores ingredientes para cada receita.
              </Text>
            </VStack>
            <VStack
              gap="3"
              p="8"
              bg="bg.panel"
              borderRadius="2xl"
              borderWidth="1px"
              borderColor="border"
              className="card-panel"
              _hover={{ borderColor: "pink.200", _dark: { borderColor: "pink.700" } }}
              transition="border-color 0.2s"
            >
              <Box color="pink.500" _dark={{ color: "pink.400" }}>
                <LuCake size={40} />
              </Box>
              <Text fontWeight="semibold" fontSize="md">
                Artesanal
              </Text>
              <Text color="fg.muted" fontSize="sm" lineHeight="tall">
                Tudo feito à mão, com carinho e atenção aos detalhes.
              </Text>
            </VStack>
            <VStack
              gap="3"
              p="8"
              bg="bg.panel"
              borderRadius="2xl"
              borderWidth="1px"
              borderColor="border"
              className="card-panel"
              _hover={{ borderColor: "pink.200", _dark: { borderColor: "pink.700" } }}
              transition="border-color 0.2s"
            >
              <Box color="pink.500" _dark={{ color: "pink.400" }}>
                <LuMessageCircle size={40} />
              </Box>
              <Text fontWeight="semibold" fontSize="md">
                Atendimento pelo WhatsApp
              </Text>
              <Text color="fg.muted" fontSize="sm" lineHeight="tall">
                Fácil e rápido: tire dúvidas e peça pelo celular.
              </Text>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </>
  );
}
