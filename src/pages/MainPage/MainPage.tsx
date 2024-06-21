import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Footer from "src/app/Footer/Footer";
import { Navbar } from "src/app/Navbar/Navbar";
import { GameLinkButton } from "./GameLinkButton";

const bgImgURL_EN = "url('/imgs/sfootball-main_en.jpg')";
const bgImgURL_RU = "url('/imgs/sfootball-main_ru.jpg')";

export const Component = () => {
  const { i18n } = useTranslation();

  const bgImage = useMemo(() => {
    if (i18n.language === "ru") {
      return bgImgURL_RU;
    }
    return bgImgURL_EN;
  }, [i18n.language]);

  return (
    <>
      <Navbar />
      {bgImage && (
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
      )}
      <GameLinkButton />
      <Footer />
    </>
  );
};

Component.displayName = "LandingPage";
