/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Skeleton, Stack, Text } from "@chakra-ui/react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { FC } from "react";
import { bgNavGradient } from "src/shared/style/bgGradient";

import { MainText } from "src/shared/components/MainText";

import { useUserQuery } from "src/shared/hooks/useUserQuery";
import { SfsIcon } from "src/shared/components/icons/SfsIcon";

// const formatAddress = (address: string) => {
//   return address.slice(0, 4) + "..." + address.slice(-4);
// };

export const Navbar: FC = () => {
  // const initData = useTgWebAppStore((state) => state.initData);
  // const [initDataUnsafe, initData] = useInitData();

  // const tgUserId = initDataUnsafe?.user?.id;
  // test
  // const tgUserId = 530287867;
  const { user, isUserLoading } = useUserQuery();

  // const userFriendlyAddress = useTonStore((state) => state.userFrendlyAddress);

  // const userInfo = useMemo(() => {
  //   if (initDataUnsafe?.user) {
  //     return {
  //       username: initDataUnsafe?.user?.username,
  //       avatar: initDataUnsafe?.user?.photo_url,
  //     };
  //   }
  //   return null;
  // }, [initDataUnsafe?.user]);

  // const userInfoEl = useMemo(() => {
  //   if (userFriendlyAddress) {
  //     return <Text>{formatAddress(userFriendlyAddress)}</Text>;
  //   }
  //   // if (userInfo) {
  //   //   return <Text>{userInfo.username}</Text>;
  //   // }
  //   return null;
  // }, [user, userFriendlyAddress]);

  return (
    <Flex
      as="header"
      bgGradient={bgNavGradient}
      // bgColor="bg.violet"
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
        <TonConnectButton className="ton-btn" />
      </Flex>
    </Flex>
  );
};
