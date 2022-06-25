import { Box, Input, Text } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../../graphql/generated";

export function SubscriberForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    
    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate("/event");
  }

  return (
    <Box p="8" bg="gray.700" border="1px solid #323238" rounded="4">
          <Text fontSize="2xl" fontWeight="bold" mb="6" display="block">
            Inscreva-se gratuitamente
          </Text>

          <Box
            as="form"
            onSubmit={handleSubscribe}
            display="flex"
            flexDirection="column"
            gap="2"
            w="full"
          >
            <Input
              bg="gray.900"
              rounded="4"
              border="none"
              _focus={{
                outline: "transparent",
                boxShadow: "0 0 0 2px #42D3FF",
              }}
              px="5"
              h="14"
              id="name"
              type="name"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <Input
              bg="gray.900"
              rounded="4"
              border="none"
              _focus={{
                outline: "transparent",
                boxShadow: "0 0 0 2px #42D3FF",
              }}
              px="5"
              h="14"
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />
            <Box
              as="button"
              type="submit"
              mt="4"
              bg="brand.500"
              py="4"
              h="14"
              rounded="4"
              fontSize="sm"
              fontWeight="bold"
              color="white"
              disabled={loading}
              _disabled={{
                loading: "opacity 50%",
              }}
              _hover={{
                bg: "brand.600",
                transition: "all 0.2s ease-in-out",
              }}
              filter="brightness(0.85)"
            >
              INSCREVA-SE
            </Box>
          </Box>
        </Box>
  )
}