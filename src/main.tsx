import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.tsx";
import "./main.css";
import { appTheme } from "./theme/theme.ts";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
// import "./i18n";
import { APP_URL } from "./shared/constants/api.constants.ts";
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function Root() {
  return (
    <WebAppProvider
      options={{
        smoothButtonsTransition: true,
      }}
    >
      <TonConnectUIProvider manifestUrl={`${APP_URL}/tonconnect-manifest.json`}>
        <ChakraProvider theme={appTheme}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </ChakraProvider>
      </TonConnectUIProvider>
    </WebAppProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
