import { Flex, Image, Text } from "@chakra-ui/react";

type GameHeaderProps = {
  gamePointCount: number;
};

const GameHeader: React.FC<GameHeaderProps> = ({ gamePointCount }) => {
  return (
    <>
      <Flex
        alignItems={"center"}
        pl={4}
        gap={6}
        h="80px"
        position="relative"
        bgColor="bg.violet"
      >
        <Text className="game-text" fontSize="30px">
          Game points:
        </Text>
        <Text
          className="game-text"
          color="white"
          fontSize="5xl"
          textAlign="center"
        >
          {gamePointCount}
        </Text>
        <Image
          position="absolute"
          src="/imgs/game/player1.png"
          height="70%"
          width="auto"
          right="16px"
          top="15%"
        />
      </Flex>
    </>
  );
};

export default GameHeader;
