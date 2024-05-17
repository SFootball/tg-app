import logo from "./assets/logo.svg";
import heroImg from "./assets/hero-img.jpg";
import "./App.css";
import { useEffect, useState } from "react";

import "./main.css";

import "./i18n";
import { Image, VStack } from "@chakra-ui/react";
import { router } from "./routes/routes.config";
import { RouterProvider } from "react-router-dom";
import { useTonAddress } from "@tonconnect/ui-react";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { useTgWebAppStore } from "./store/twWebApp.store";
import { useTonStore } from "./store/tonStore";

function App() {
  const [starting, setStarting] = useState(true);

  // console.log("env: ", import.meta.env);
  const tonAddress = useTonAddress();
  // const webApp = useWebApp() as TGWebApp;

  const initDataRaw = useInitData();
  console.log("InitData: ", initDataRaw);

  const { initData, setInitData } = useTgWebAppStore((store) => ({
    // tgWebApp: store.tgWebApp,
    // setTgWebApp: store.setTgWebApp,
    initData: store.initData,
    setInitData: store.setInitData,
  }));

  const [userFriendlyAddress, setUserFriendlyAddress] = useTonStore((store) => [
    store.userFrendlyAddress,
    store.setUserFriendlyAddress,
  ]);

  useEffect(() => {
    if (initData && !initDataRaw) {
      setInitData(initData);
    }
    // if (webApp && !tgWebApp) {
    //   setTgWebApp(webApp);
    // }
  }, [initDataRaw, initData, setInitData]);

  useEffect(() => {
    if (tonAddress && !userFriendlyAddress) {
      setUserFriendlyAddress(tonAddress);
    }
  }, [userFriendlyAddress, tonAddress, setUserFriendlyAddress]);

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
          width={{ base: "200px", md: "400px" }}
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
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
  // return <AllRoutes />;
}

export default App;
