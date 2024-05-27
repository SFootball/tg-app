import { Box, Flex, Heading, VStack, keyframes } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MainText } from "src/shared/components/MainText";
import logo from "src/assets/boot.webp";
import { motion } from "framer-motion";

export const Component = () => {
  const { t } = useTranslation();

  const jumpIcon = keyframes`
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(0%);
    }
  }`;

  const handleMouseOver = () => {
    () => {
      animation ? setAnimation("") : setAnimation(bootAnimation);
    };
  };

  const handleDrag = (e) => {
    const coordinateY = e.target.getBoundingClientRect().y;
    if (coordinateY < 200) {
      setStarting(false);
    } else {
      setStarting(true);
    }
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    animation ? setAnimation("") : setAnimation(bootAnimation);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const coordinateY = e.target.getBoundingClientRect().y;
    if (coordinateY < 200) {
      setStarting(false);
    } else {
      setStarting(true);
    }
  };

  const bootAnimation = `${jumpIcon} 0.8s ease infinite`;

  const [starting, setStarting] = useState(true);
  const [animation, setAnimation] = useState(bootAnimation);

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
          as={motion.img}
          position={"absolute"}
          drag="y"
          dragConstraints={{
            top: 0,
            bottom: 0,
          }}
          zIndex={999}
          src={logo}
          animation={animation}
          onMouseOver={handleMouseOver}
          onDrag={handleDrag}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        />
        <Box minW={{ base: "800px", md: "none" }} h="100%" bg="bg.green" />
      </VStack>
    );
  }
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition="all 0.5s linear"
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
        <Heading>Space football</Heading>
      </Flex>
      <Flex justifyContent={{ base: "center" }} alignItems={"center"} mt={10}>
        <MainText>{t("Game comming soon")}</MainText>
      </Flex>
    </Box>
  );
};

Component.displayName = "LandingPage";
