import { Box, Flex, VStack, keyframes } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { useExpand } from "@vkruglikov/react-telegram-web-app";
import logo from "src/assets/boot_2.png";

const slideIcon = keyframes`
0% {
  transform: translateX(120%);
}
18% {
  transform: translateX(0%);
}
31% {
  transform: translateY(-10%);
}
44% {
  transform: translateX(0%);
}
57% {
  transform: translateY(-10%);
}
70% {
  transform: translateX(0%);
}
83% {
  transform: translateY(-10%);
}
100% {
  transform: translateX(-120%);
}`;

export const Layout: FC = () => {
  const [isExpanded, expand] = useExpand();
  useEffect(() => {
    if (!isExpanded) {
      expand();
    }
  }, [isExpanded, expand]);

  const bootAnimation = `${slideIcon} 3.5s ease forwards`;

  const [starting, setStarting] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (starting) {
        setStarting(false);
      }
    }, 3700);
  }, [starting]);

  if (starting) {
    return (
      <>
        <Navbar />
        <VStack
          overflow={"hidden"}
          bg="black"
          position={"relative"}
          h="calc(100vh - 104px)"
          justify="center"
          align="center"
          zIndex={99}
        >
          <Box
            as={"img"}
            position={"absolute"}
            zIndex={999}
            src={logo}
            animation={bootAnimation}
            onClick={() => setStarting(false)}
          />
          <Box minW={{ base: "800px", md: "none" }} h="100%" bg="bg.green_1" />
        </VStack>
      </>
    );
  }

  return (
    <>
      {/* <Navbar /> */}
      <Flex as="main" direction="column" position="relative">
        <Outlet />
      </Flex>
      {/* <Footer /> */}
    </>
  );
};
