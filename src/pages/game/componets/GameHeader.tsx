import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useGameContext } from "../GameContext/useGameContext";
import style from "../game.module.css";
import { TimerIcon } from "src/shared/components/icons/TimerIcon";
import { CupIcon } from "src/shared/components/icons/CupIcon";

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
    <Box
      as="header"
      position={"fixed"}
      left={0}
      top={0}
      width="100%"
      height="112px"
      zIndex={10}
    >
      <Flex
        py={4}
        px="11px"
        height="100%"
        bgColor="black"
        borderRadius={{ base: "0 0 45px 45px" }}
        overflow={"hidden"}
        align="center"
        justify="space-between"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          h="78px"
          w="78px"
          className={style.gameBage}
          borderRadius="20px"
          fontSize="30px"
          pb="6px"
        >
          <Box className={`${style.gameTextGradient} ${style.gameText}`}>
            20
          </Box>
          <TimerIcon />
        </Flex>
        <Flex
          direction="column"
          align="center"
          justify="center"
          h="78px"
          w="132px"
          className={style.gameBage}
          borderRadius="20px"
        >
          <Flex
            align="center"
            justify="space-between"
            fontSize="30px"
            className={`${style.gameTextGradient} ${style.gameText}`}
          >
            1000 <CupIcon />
          </Flex>
          <Box
            fontSize="20px"
            className={`${style.gameTextGradient} ${style.gameText}`}
          >
            TOTAL
          </Box>
        </Flex>
        <Flex
          direction="column"
          align="center"
          justify="center"
          h="78px"
          w="132px"
          className={style.gameBage}
          borderRadius="20px"
        >
          <Flex
            align="center"
            justify="space-between"
            fontSize="30px"
            className={`${style.gameTextGradient} ${style.gameText}`}
          >
            100 <CupIcon />
          </Flex>
          <Box
            fontSize="20px"
            className={`${style.gameTextGradient} ${style.gameText}`}
          >
            SCORE
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
  // return (
  //   <Flex alignItems={"center"} py={2} px={4} gap={6}>
  //     <Button
  //       onClick={closeGame}
  //       bgColor={"content.violet"}
  //       color={"whiteAlpha.900"}
  //     >
  //       {t("Close game")}
  //     </Button>
  //     <Text>{t("Game points")}:</Text>
  //     <Text color="white" fontSize="3xl" fontWeight="bold" textAlign="center">
  //       {gamePoints}
  //     </Text>
  //   </Flex>
  // );
};
