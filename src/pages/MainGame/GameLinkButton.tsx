import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCalculateGameAttempts } from "src/entities/game/useCalculateGameAttempts";

export const GameLinkButton: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { attempts, isGameAttemptsLoading } = useCalculateGameAttempts();

  const moveToGame = () => {
    navigate("/game");
  };
  return (
    <Flex position={"fixed"} bottom={28} right={8}>
      <Button
        onClick={moveToGame}
        bgColor={"content.violet"}
        color={"whiteAlpha.900"}
        isLoading={isGameAttemptsLoading}
        isDisabled={attempts === 0}
      >
        <Flex display="inline-flex" gap={4}>
          <Text as="span">{t("Play game")}</Text>
          <Text as="span">{attempts}</Text>
        </Flex>
      </Button>
    </Flex>
  );
};
