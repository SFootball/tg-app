import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { MainText } from "src/shared/components/MainText";
import logo from "src/assets/boot.webp";
import heroImg from "src/assets/hero-img.jpg";

export const Component = () => {
  const { t } = useTranslation();

  const [starting, setStarting] = useState(true);
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
        position={"relative"}
        minH="100vh"
        justify="center"
        align="center"
        zIndex={99}
      >
        {/* <Image
          zIndex={999}
          width={{ base: "400px", md: "400px" }}
          className="slide-in-blurred-top"
          src={logo}
        /> */}
        <Image zIndex={999} className="slide-in-blurred-top" src={logo} />
        {/* <Image
          position={"absolute"}
          minW={{ base: "800px", md: "none" }}
          h="100%"
          src={heroImg}
        /> */}
        <Box
          position={"absolute"}
          minW={{ base: "800px", md: "none" }}
          h="100%"
          bg="bg.green"
        />
      </VStack>
    );
  }
  return (
    <Flex h={{ base: "100%" }} w="100%" direction={"column"}>
      <Flex
        justifyContent={{ base: "center" }}
        alignItems={"center"}
        w={{ base: "100%" }}
      >
        <Heading>Space football</Heading>
      </Flex>
      <Flex justifyContent={{ base: "center" }} alignItems={"center"} mt={10}>
        <MainText>{t("Game comming soon")}</MainText>
      </Flex>
    </Flex>
  );
};

Component.displayName = "LandingPage";
