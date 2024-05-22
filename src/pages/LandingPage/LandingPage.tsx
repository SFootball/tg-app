import { Flex, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MainText } from "src/shared/components/MainText";

export const Component = () => {
  const { t } = useTranslation();
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
// export default LandingPage;
