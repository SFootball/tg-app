import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { BaseGame } from "./BaseGame";
import { GameProvider } from "./GameContext/GameProvider";

export const Component: FC = () => {
  return (
    <GameProvider>
      <Box
        alignSelf="center"
        top="0"
        left="0"
        width="100vw"
        h="100vh"
        overflow={"hidden"}
        position={"relative"}
      >
        <BaseGame />
      </Box>
    </GameProvider>
  );
};

Component.displayName = "GamePage";
