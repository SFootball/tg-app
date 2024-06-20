import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../game.module.css";

type GameFooterProps = {
  onEndEffect: () => void;
};

const timerDelay = 1000;

export const GameFooter: React.FC<GameFooterProps> = ({ onEndEffect }) => {
  const [seconds, setSeconds] = useState(2);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds !== 0) {
        setSeconds(seconds - 1);
      } else {
        onEndEffect();
        clearInterval(timer);
      }
    }, timerDelay);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, onEndEffect]);

  return (
    <Flex
      bgColor="bg.violet"
      h="5vh"
      bottom="0"
      left="0"
      position="fixed"
      w="100%"
      align="center"
      justify="space-between"
      px="16px"
      zIndex={10}
    >
      <Box className={style.gameText} fontSize="30px">
        <Text>{`${t("TIMER")}: ${seconds}`}</Text>
      </Box>
    </Flex>
  );
};
