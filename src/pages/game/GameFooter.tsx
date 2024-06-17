import { Box, Button, Flex } from "@chakra-ui/react";
import Timer from "./Timer";

type GameFooterProps = {
  handleRunGame: () => void;
  delay: number | null;
};

const GameFooter: React.FC<GameFooterProps> = ({ handleRunGame, delay }) => {
  return (
    <Flex
      bgColor="bg.violet"
      h="100px"
      bottom="0"
      left="0"
      position="fixed"
      w="100%"
      align="center"
      justify="space-between"
      px="16px"
    >
      <Box className="game-text" fontSize="30px">
        <Timer delay={delay} />
      </Box>
      <Button className="game-text" fontSize="30px" onClick={handleRunGame}>
        PLAY
      </Button>
    </Flex>
  );
};

export default GameFooter;
