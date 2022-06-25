import { Box, Img } from "@chakra-ui/react";
import { SubscriberForm } from "../../components/Form";
import { Hero } from "../../components/Hero";

export function Subscribe() {
  return (
    <Box
      minH="100vh"
      display="flex"
      backgroundImage="url(/blur-background.png)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        w="full"
        maxW="1100px"
        display={["block", "flex"]}
        padding={["4", "0"]}
        alignItems="center"
        justifyContent="space-between"
        mt={["5", "20"]}
        mx="auto"
      >
        <Hero />
        <SubscriberForm />
      </Box>
      <Img src="/images/vscode.png" mt="10" />
    </Box>
  );
}
