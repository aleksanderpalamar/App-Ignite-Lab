import { Box, Divider, Input, Text } from "@chakra-ui/react";
import { SocialLogin } from "../SocialLogin";

export function SubscriberForm() {  

  return (
    <Box p="8" bg="gray.700" border="1px solid #323238" rounded="4">
      <Text fontSize="2xl" fontWeight="bold" mb="6" display="block">
        Login to platform
      </Text>      
      <Divider mt="4" borderWidth="1px" borderColor="gray.500" />
      <SocialLogin />
    </Box>
  );
}
