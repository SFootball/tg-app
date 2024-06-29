import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import Footer from "src/app/Footer/Footer";
import { Navbar } from "src/app/Navbar/Navbar";
import { GameLinkButton } from "./GameLinkButton";

const bgImage = "/imgs/game/main-game-bg.png";

export const Component: FC = () => {
  return (
    <Flex
      direction="column"
      h="100vh"
      bgImage={`url(${bgImage})`}
      bgRepeat="no-repeat"
      bgSize="contain"
      bgPosition="center"
    >
      <Navbar />
      <GameLinkButton />

      <Footer />
    </Flex>
  );
};

Component.displayName = "MainGamePage";
