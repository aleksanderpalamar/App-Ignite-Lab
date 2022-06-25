import { Box, Img, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <>
      <Box
        as="div"
        h="5rem"
        margin="0 auto"
        maxW="1120px"
        padding="0 2rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="2"
      >
        <Img src="/images/Ignite-logo.svg" h="2rem" alt="Logotipo" />
        <Text
          as="p"
          fontSize={["2xl", "3xl"]}
          fontWeight="bold"
          lineHeight="1.6"
          display="flex"
          alignItems="center"
          gap="2"
        >
          Ignite Lab<Text as="span" color="brand.500" >|</Text>          
        </Text>
        <Text as="span" fontSize="md" color="gray.300">ReactJS & Linux</Text>        
      </Box>
    </>
  );
}