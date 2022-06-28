import { useAuth0 } from "@auth0/auth0-react";
import { Box } from "@chakra-ui/react";
import { SignOut } from "phosphor-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  function handlelogout() {
    logout({
      returnTo: window.location.origin,
    });
  }

  return (
    <Box
      as="button"
      type="submit"
      onClick={handlelogout}
      cursor="pointer"
      p="4"
      fontSize="sm"
      border="1px solid #3BB8FF"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontWeight="bold"
      rounded="4"
      color="brand.600"
      gap="2"
      _hover={{
        bg: "brand.500",
        color: "gray.900",
        transition: "all .2s ease-in-out",
      }}
    >
      <SignOut size={24} weight="thin" />
      Sair
    </Box>
  );
};
