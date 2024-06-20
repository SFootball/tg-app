import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { BaseGame } from "./BaseGame";
import { GameProvider } from "./game-context/GameProvider";
import { GameHeader } from "./componets/GameHeader";

export const Component: FC = () => {
  return (
    <GameProvider>
      <Box
        // position="absolute"
        alignSelf="center"
        top="0"
        left="0"
        width="100%"
        h="100vh"
      >
        {/* header */}
        <GameHeader />
        {/* game */}
        <BaseGame />
      </Box>
    </GameProvider>
  );
};

Component.displayName = "GamePage";
