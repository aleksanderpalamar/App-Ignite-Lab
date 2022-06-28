import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Auth0Provider
        domain="dev-y92icslo.us.auth0.com"
        clientId="SLMFqjExj5u3rZoK59IMWX36f10jHkRh"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </ChakraProvider>
  </React.StrictMode>
);
