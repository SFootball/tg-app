import { Box, Flex, Heading, VStack, keyframes } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MainText } from "src/shared/components/MainText";
import logo from "src/assets/boot.webp";
import { motion } from "framer-motion";

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

export const Component = () => {
  const { t } = useTranslation();

  const bootAnimation = `${slideIcon} 3.5s ease forwards`;

  const [starting, setStarting] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (starting) {
        setStarting(false);
      }
    }, 3700);
  }, []);
  if (starting) {
    return (
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
        <Box minW={{ base: "800px", md: "none" }} h="100%" bg="bg.green" />
      </VStack>
    );
  }
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition="0.7s linear"
      display={"flex"}
      h={{ base: "100%" }}
      w="100%"
      flexDirection={"column"}
    >
      <Flex
        justifyContent={{ base: "center" }}
        alignItems={"center"}
        w={{ base: "100%" }}
      >
        <Heading>SFootball</Heading>
      </Flex>
      <Flex justifyContent={{ base: "center" }} alignItems={"center"} mt={10}>
        <MainText>{t("Game comming soon")}</MainText>
      </Flex>
    </Box>
  );
};

Component.displayName = "LandingPage";
