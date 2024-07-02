/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Skeleton, Stack, Text } from "@chakra-ui/react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { FC } from "react";
import { MainText } from "src/shared/components/MainText";
import { useUserQuery } from "src/shared/hooks/useUserQuery";
import style from "./Navbar.module.css";
import { fontsSpecial } from "src/shared/style/fontsSpecial";
import { CupIcon } from "src/shared/components/icons/CupIcon";

export const Navbar: FC = () => {
  const { user, isUserLoading } = useUserQuery();

  return (
    <Flex
      as="header"
      bgColor={"black"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={{ base: 8 }}
      py={{ base: 8 }}
      height="112px"
      borderBottomLeftRadius={{ base: "45px" }}
      borderBottomRightRadius={{ base: "45px" }}
    >
      <Flex>
        <Text
          fontWeight={"bold"}
          fontFamily={fontsSpecial.family}
          backgroundImage={fontsSpecial.bgImage}
          backgroundClip={"text"}
        >
          SFootball
        </Text>
      </Flex>
      {isUserLoading && (
        <Stack>
          <Skeleton h="30px" />
        </Stack>
      )}
      {user && (
        <Flex gap={2} alignItems={"center"}>
          <MainText
            color="white"
            fontWeight={"bold"}
            fontFamily={fontsSpecial.family}
            bgImage={fontsSpecial.bgImage}
            backgroundClip={"text"}
          >
            {user?.sfs_count}
          </MainText>
          <CupIcon isGold />
        </Flex>
      )}
      <Flex gap={4}>
        <TonConnectButton className={style.tonBtn} />
      </Flex>
    </Flex>
  );
};
