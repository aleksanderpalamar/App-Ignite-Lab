
import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@chakra-ui/react";

interface LogoutButtonProps {
  href: string;
}

export function SocialLogin() {
  const { loginWithRedirect } = useAuth0();

  function handlelogin() {
    loginWithRedirect({
      screen_header: "Login",
      redirect_uri: window.location.origin,
      app_metadata: {
        roles: ["user"],
      },
    });
  }

  return (
    <>
      <Box
        as="button"
        type="submit"
        mt="4"
        w="full"
        bg="brand.500"
        py="4"
        h="14"
        rounded="4"
        fontSize="sm"
        fontWeight="bold"
        color="white"
        onClick={handlelogin}
        _disabled={{
          loading: "opacity 50%",
        }}
        _hover={{
          bg: "brand.600",
          transition: "all 0.2s ease-in-out",
        }}
        filter="brightness(0.85)"
      >
        LOGIN
      </Box>
    </>
  );
}
