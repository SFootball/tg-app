/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Skeleton, Stack, Text } from "@chakra-ui/react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { FC } from "react";
import { bgNavGradient } from "src/shared/style/bgGradient";
import { MainText } from "src/shared/components/MainText";
import { useUserQuery } from "src/shared/hooks/useUserQuery";
import { SfsIcon } from "src/shared/components/icons/SfsIcon";
import style from "./Navbar.module.css";

export const Navbar: FC = () => {
  const { user, isUserLoading } = useUserQuery();

  return (
    <Flex
      as="header"
      bgGradient={bgNavGradient}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={{ base: 8 }}
      py={{ base: 8 }}
    >
      <Flex>
        <Text fontWeight={"bold"}>SFootball</Text>
      </Flex>
      {isUserLoading && (
        <Stack>
          <Skeleton h="30px" />
        </Stack>
      )}
      {user && (
        <Flex gap={2} alignItems={"center"}>
          <MainText color="white" fontWeight={"bold"}>
            {user?.sfs_count}
          </MainText>
          <SfsIcon />
        </Flex>
      )}
      <Flex gap={4}>
        <TonConnectButton className={style.tonBtn} />
      </Flex>
    </Flex>
  );
};
