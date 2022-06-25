import { Box, Text } from "@chakra-ui/react";
import { Logo } from "../Header/Logo";

export function Hero() {
  return (
    <Box maxW="640px">
      <Logo />
      <Text as="h1" mt="8" fontSize="2.5rem" letterSpacing="tight">
        Bem vindos ao{" "}
        <Text as="strong" color="brand.500">
          Ignite Lab
        </Text>
        , nesta plataforma você irá encontrar conteúdos sobre{" "}
        <Text as="strong" color="brand.500">
          ReactJS e Linux
        </Text>
      </Text>
      <Text as="p" mt="4" color="gray.200">
        Em apenas uma semana você vai dominar na prática uma das tecnologias
        mais utilizadas e com alta demanda para acessar as melhores
        oportunidades do mercado.
      </Text>
    </Box>
  );
}
