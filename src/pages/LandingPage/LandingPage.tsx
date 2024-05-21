// import BigGallery from "./components/BigGallery";
// import Choose from "./components/Choose";
import { Flex, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MainText } from "src/shared/components/MainText";
// import FrontCarousel from "./components/FrontCarousel";

// import Girl from "./components/Girl";
// import Pricing from "./components/Pricing";
// import Trainer from "./components/Trainer";
// import "./styles/LandingPage.css";
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
      {/* <FrontCarousel /> */}
      {/* <Choose /> */}
      {/* <Girl /> */}
      {/* <Pricing /> */}
      {/* <BigGallery /> */}
      {/* <Trainer /> */}
    </Flex>
  );
};

Component.displayName = "LandingPage";
// export default LandingPage;
