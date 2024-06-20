import { Button, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const GameLinkButton: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const moveToGame = () => {
    navigate("/game");
  };
  return (
    <Flex position={"fixed"} bottom={28} right={8}>
      <Button
        onClick={moveToGame}
        bgColor={"content.violet"}
        color={"whiteAlpha.900"}
      >
        {t("Play game")}
      </Button>
    </Flex>
  );
};
