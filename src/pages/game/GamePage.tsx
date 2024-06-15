import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { BaseGame } from "./BaseGame";
import { useNavigate } from "react-router-dom";

export const Component: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [gamePointCount, setGamePointCount] = useState(0);

  const moveToMain = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Box
      position="absolute"
      alignSelf="center"
      top="0"
      left="0"
      width="100%"
      h="100vh"
    >
      <Flex alignItems={"center"} pl={4} gap={6}>
        <Button
          onClick={moveToMain}
          bgColor={"content.violet"}
          color={"whiteAlpha.900"}
        >
          {t("Close game")}
        </Button>
        <Text>{t("Game points")}:</Text>
        <Text color="white" fontSize="3xl" fontWeight="bold" textAlign="center">
          {gamePointCount}
        </Text>
      </Flex>
      <BaseGame setGamePointCount={setGamePointCount} />
    </Box>
  );
};

Component.displayName = "GamePage";
