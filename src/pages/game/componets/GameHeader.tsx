import { Button, Flex, Text } from "@chakra-ui/react";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../GameContext/useGameContext";

type GameHeaderProps = {
  // gamePointCount: number;
};

export const GameHeader: React.FC<GameHeaderProps> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { gamePoints, setGameStarted } = useGameContext();
  const closeGame = useCallback(() => {
    setGameStarted(false);
    navigate("/");
  }, [navigate, setGameStarted]);
  return (
    <Flex alignItems={"center"} py={2} px={4} gap={6}>
      <Button
        onClick={closeGame}
        bgColor={"content.violet"}
        color={"whiteAlpha.900"}
      >
        {t("Close game")}
      </Button>
      <Text>{t("Game points")}:</Text>
      <Text color="white" fontSize="3xl" fontWeight="bold" textAlign="center">
        {gamePoints}
      </Text>
    </Flex>
  );
  // return (
  //   <>
  //     <Flex
  //       alignItems={"center"}
  //       pl={4}
  //       gap={6}
  //       h="80px"
  //       position="relative"
  //       bgColor="bg.violet"
  //     >
  //       <Text className="game-text" fontSize="30px">
  //         Game points:
  //       </Text>
  //       <Text
  //         className="game-text"
  //         color="white"
  //         fontSize="5xl"
  //         textAlign="center"
  //       >
  //         {gamePointCount}
  //       </Text>
  //       <Image
  //         position="absolute"
  //         src="/imgs/game/player1.png"
  //         height="70%"
  //         width="auto"
  //         right="16px"
  //         top="15%"
  //       />
  //     </Flex>
  //   </>
  // );
};
