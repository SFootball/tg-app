import { Box, Button, Flex, Text, useInterval } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../game.module.css";
import { useGameContext } from "../GameContext/useGameContext";
import { useCalculateGameAttempts } from "src/entities/game/useCalculateGameAttempts";

type GameFooterProps = {
  onEndEffect: () => void;
};

const timerDelay = 1000;
const gamePeriod = 20;

export const GameFooter: React.FC<GameFooterProps> = ({ onEndEffect }) => {
  const [seconds, setSeconds] = useState(gamePeriod);

  const { attempts, isGameAttemptsLoading } = useCalculateGameAttempts();

  const { t } = useTranslation();
  const { isGameStarted } = useGameContext();

  useInterval(
    () => {
      if (seconds !== 0) {
        setSeconds(seconds - 1);
      } else {
        onEndEffect();
        setSeconds(gamePeriod);
      }
    },
    !isGameStarted ? null : timerDelay
  );

  return (
    <Flex
      bgColor="bg.violet"
      h={"70px"}
      bottom="0"
      left="0"
      position="fixed"
      w="100%"
      align="center"
      justify="space-between"
      px="16px"
      py={2}
      zIndex={10}
    >
      <Box className={style.gameText} fontSize="30px">
        {isGameStarted && <Text>{`${t("TIMER")}: ${seconds}`}</Text>}
      </Box>
      {!isGameStarted && (
        <Flex gap={4} alignItems={"center"}>
          <Text fontWeight="bold">
            {t("ATTEMPTS")}: {attempts}
          </Text>
          <Button
            fontSize="30px"
            isDisabled={attempts === 0}
            isLoading={isGameAttemptsLoading}
          >
            {t("PLAY")}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
