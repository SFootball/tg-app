import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Footer from "src/app/Footer/Footer";
import { Navbar } from "src/app/Navbar/Navbar";

const bgImgURL_EN = "url('/imgs/sfootball-main_en.jpg')";
const bgImgURL_RU = "url('/imgs/sfootball-main_ru.jpg')";

export const Component = () => {
  const { i18n } = useTranslation();
  return (
    <Flex position={"relative"} direction="column">
      <Navbar />
      <Box
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition="1s linear"
        display={"flex"}
        h={{ base: "calc(100vh - 188px)" }}
        w="100%"
        flexDirection={"column"}
        bgImage={i18n.language === "ru" ? bgImgURL_RU : bgImgURL_EN}
        bgRepeat="no-repeat"
        bgSize="contain"
        bgPosition="center"
      />
      <Footer />
    </Flex>
  );
};

Component.displayName = "HomePage";
