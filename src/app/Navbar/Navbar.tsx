/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Skeleton, Stack, Text } from "@chakra-ui/react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { FC, useMemo } from "react";
import { bgNavGradient } from "src/shared/style/bgGradient";
import { useTgWebAppStore } from "src/store/twWebApp.store";
import { useTonStore } from "src/store/tonStore";
import { MainText } from "src/shared/components/MainText";

import { useUserQuery } from "src/shared/api/useUserQuery";
import { SfsIcon } from "src/shared/components/icons/SfsIcon";

const formatAddress = (address: string) => {
  return address.slice(0, 4) + "..." + address.slice(-4);
};

export const Navbar: FC = () => {
  const initData = useTgWebAppStore((state) => state.initData);

  const tgUserId = initData?.user?.id;
  // test
  // const tgUserId = 530287867;
  const { user, isUserLoading } = useUserQuery(tgUserId);

  const userFriendlyAddress = useTonStore((state) => state.userFrendlyAddress);

  const userInfo = useMemo(() => {
    if (initData?.user) {
      return {
        username: initData?.user?.username,
        avatar: initData?.user?.photo_url,
      };
    }
    return null;
  }, [initData]);

  const userInfoEl = useMemo(() => {
    if (userInfo) {
      return <Text>{userInfo.username}</Text>;
    }
    if (userFriendlyAddress) {
      return <Text>{formatAddress(userFriendlyAddress)}</Text>;
    }
    return null;
  }, [userInfo, userFriendlyAddress]);

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
        <Text>Space Football</Text>
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
      <Flex gap={4}>{userInfoEl ? userInfoEl : <TonConnectButton />}</Flex>
    </Flex>
  );
};
