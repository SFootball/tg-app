import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { BaseGame } from "./BaseGame";
import { GameProvider } from "./GameContext/GameProvider";
import { GameHeader } from "./componets/GameHeader";

export const Component: FC = () => {
  return (
    <GameProvider>
      <Box alignSelf="center" top="0" left="0" width="100%" h="100vh">
        <GameHeader />
        <BaseGame />
      </Box>
    </GameProvider>
  );
};

Component.displayName = "GamePage";
