import logo from "./assets/logo.png";
import heroImg from "./assets/hero-img.jpg";
import "./App.css";
import { useEffect, useState } from "react";
import i18n from "./i18n";
import { Image, VStack } from "@chakra-ui/react";
import { router } from "./app/routes.config";
import { RouterProvider } from "react-router-dom";
// import { useTonAddress } from "@tonconnect/ui-react";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { useTgWebAppStore } from "./store/twWebApp.store";
// import { useTonStore } from "./store/tonStore";
import { I18nextProvider } from "react-i18next";

import "./main.css";

function App() {
  // const [starting, setStarting] = useState(true);
  // test
  const [starting, setStarting] = useState(false);

  // console.log("env: ", import.meta.env);
  // const tonAddress = useTonAddress();
  // const webApp = useWebApp() as TGWebApp;

  const initDataRaw = useInitData();

  const initData = useTgWebAppStore((store) => store.initData);

  const setInitData = useTgWebAppStore((store) => store.setInitData);

  // console.log("initDataRaw: ", initDataRaw);
  // console.log("InitData: ", initData);

  // const [userFriendlyAddress, setUserFriendlyAddress] = useTonStore((store) => [
  //   store.userFrendlyAddress,
  //   store.setUserFriendlyAddress,
  // ]);

  useEffect(() => {
    if (!initData && initDataRaw?.[0]) {
      setInitData(initDataRaw[0]);
    }
    // if (webApp && !tgWebApp) {
    //   setTgWebApp(webApp);
    // }
  }, [initDataRaw, initData, setInitData]);

  // useEffect(() => {
  //   if (tonAddress && !userFriendlyAddress) {
  //     setUserFriendlyAddress(tonAddress);
  //   }
  // }, [userFriendlyAddress, tonAddress, setUserFriendlyAddress]);

  useEffect(() => {
    setTimeout(() => {
      setStarting(false);
    }, 2000);
  }, []);

  if (starting) {
    return (
      <VStack
        overflow={"hidden"}
        bg="black"
        position={"relative"} // bgImage={women}     bgSize={"80%"}
        minH="100vh"
        justify="center"
        align="center"
      >
        <Image
          zIndex={999}
          width={{ base: "400px", md: "400px" }}
          className="slide-in-blurred-top"
          src={logo}
        />
        <Image
          position={"absolute"}
          minW={{ base: "800px", md: "none" }}
          h="100%"
          src={heroImg}
        />
      </VStack>
    );
  }
  return (
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </I18nextProvider>
  );
  // return <AllRoutes />;
}

export default App;
