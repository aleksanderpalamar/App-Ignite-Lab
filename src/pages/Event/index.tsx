import { useAuth0 } from "@auth0/auth0-react";
import { Box, Flex, Image, Img, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { ButtonApp } from "../../components/ButtonApp";
import { LogoutButton } from "../../components/ButtonApp/logout";
import { Header } from "../../components/Header";
import { Player } from "../../components/Player";
import { Sidebar } from "../../components/Sidebar";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <>
      {isAuthenticated && (
        <Flex display="flex" flexDirection="column" minH="100vh">
          <Header />
          <Box as="main" display={["block", "flex"]} flex="1">
            {slug ? (
              <Player lessonSlug={slug} />
            ) : (
              <Box flex="1">
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
                    <Box maxW="640px">
                      <Text
                        as="h1"
                        mt="8"
                        fontSize="2.5rem"
                        letterSpacing="tight"
                      >
                        Testes os conhecimento em programação com{" "}
                        <Text as="strong" color="brand.500">
                          CodeSandBox
                        </Text>
                        , com essa aplicação poderá{" "}
                        <Text>
                          criar seus próprio projeto com{" "}
                          <Text as="strong" color="brand.500">
                            ReactJS
                          </Text>{" "}
                          ou outra tecnologia
                        </Text>
                      </Text>
                      <ButtonApp title="CodeSandBox" />
                    </Box>
                    <Box
                      maxW="640px"
                      outline="1px solid #202024"
                      padding="4"
                      rounded={4}
                    >
                      <Box display="flex" mb="4" alignItems="center">
                        <Img
                          src={user?.picture}
                          w="calc(3rem + 12px)"
                          h="calc(3rem + 12px)"
                          borderRadius={8}
                          border="4px solid #202024"
                          outline="2px solid #42D3FF"
                          objectFit="cover"
                          alt="Profile image"
                        />
                        <Text
                          as="p"
                          margin="4"
                          display="block"
                          fontSize="2xl"
                          letterSpacing="tight"
                        >
                          {user?.name}
                          <Text
                            as="span"
                            fontSize="sm"
                            display="block"
                            color="gray.300"
                          >
                            {user?.email}
                          </Text>
                        </Text>
                      </Box>
                      <LogoutButton />
                    </Box>
                  </Box>
                  <Img src="/images/vscode.png" mt="10" />
                </Box>
              </Box>
            )}
            <Sidebar />
          </Box>
        </Flex>
      )}
    </>
  );
}
