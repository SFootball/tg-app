import i18n from "./i18n";
import { router } from "./app/routes.config";
import { RouterProvider } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { ChakraBaseProvider } from "@chakra-ui/react";
import { appTheme } from "./theme/theme.ts";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { APP_URL } from "./shared/constants/api.constants.ts";
import { WebAppProvider } from "@vkruglikov/react-telegram-web-app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./main.css";
import "./App.css";

export const queryClient = new QueryClient();

function App() {
  return (
    <WebAppProvider
      options={{
        smoothButtonsTransition: true,
      }}
    >
      <TonConnectUIProvider manifestUrl={`${APP_URL}/tonconnect-manifest.json`}>
        <ChakraBaseProvider theme={appTheme}>
          <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n} defaultNS={"translation"}>
              <RouterProvider
                router={router}
                fallbackElement={<div>Loading...</div>}
              />
            </I18nextProvider>
          </QueryClientProvider>
        </ChakraBaseProvider>
      </TonConnectUIProvider>
    </WebAppProvider>
  );
}

export default App;
