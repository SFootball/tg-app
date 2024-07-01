import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCalculateGameAttempts } from "src/entities/game/useCalculateGameAttempts";
import { fontsSpecial } from "src/shared/style/fontsSpecial";

export const GameLinkButton: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { attempts, isGameAttemptsLoading } = useCalculateGameAttempts();

  const moveToGame = () => {
    navigate("/game");
  };
  return (
    <Flex position={"fixed"} bottom={36} right={8}>
      <Button
        onClick={moveToGame}
        // bgColor={"content.violet"}
        borderRadius={"45px"}
        border="5px solid #E7C37E;"
        // color={fontsSpecial.}
        width="160px"
        height={"65px"}
        bgColor={"black"}
        isLoading={isGameAttemptsLoading}
        isDisabled={attempts === 0}
      >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            as="span"
            fontSize={"30px"}
            fontWeight={"700"}
            fontFamily={fontsSpecial.family}
            bgImage={fontsSpecial.bgImage}
            backgroundClip={"text"}
          >
            {t("Play")}
          </Text>
          <Flex display={"inline-flex"}>
            <Text
              fontSize={"12px"}
              fontFamily={fontsSpecial.family}
              bgImage={fontsSpecial.bgImage}
              backgroundClip={"text"}
              lineHeight={"12px"}
            >
              {t("you have attempts", { attempts })}
            </Text>
          </Flex>
          {/* <Text as="span">{attempts}</Text> */}
        </Flex>
      </Button>
    </Flex>
  );
};
