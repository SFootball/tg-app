// import BigGallery from "./components/BigGallery";
// import Choose from "./components/Choose";
import { Flex, Heading } from "@chakra-ui/react";
// import FrontCarousel from "./components/FrontCarousel";

// import Girl from "./components/Girl";
// import Pricing from "./components/Pricing";
// import Trainer from "./components/Trainer";
// import "./styles/LandingPage.css";
const LandingPage = () => {
  return (
    <Flex h={{ base: "100%" }} w="100%">
      <Flex
        justifyContent={{ base: "center" }}
        alignItems={"center"}
        w={{ base: "100%" }}
      >
        <Heading>Space football</Heading>
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

export default LandingPage;
