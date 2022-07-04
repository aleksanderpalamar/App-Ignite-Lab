import { Box, Img, Text, useColorMode } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Header() {  
  return (
    <Box as="header" w="full" display="flex" alignItems="center" justifyContent="center" borderBottom="1px solid #202024">
      <Logo />      
    </Box>
  );
}
