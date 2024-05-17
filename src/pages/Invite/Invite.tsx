import { Box, Flex, IconButton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { FC, useMemo } from "react";
import { FaCopy } from "react-icons/fa";
import { MainText } from "src/shared/components/MainText";
import { SubTitle } from "src/shared/components/SubTitle";
import { UserType } from "src/shared/types/User";
import { generateRefLink } from "src/shared/utils/tg.utils";
// import { useTgWebAppStore } from "src/store/twWebApp.store";

// const BASE_URL = import.meta.env.VITE_API_URL;
const BASE_URL = "https://apiservice.containers.cloud.ru";

export const Component: FC = () => {
  // const tg = useTgWebAppStore((state) => state.initData);
  const [initData] = useInitData();
  // const url = `/api/users/referral-id`;
  // const url = `${BASE_URL}/api/users/referral-id`;
  // console.log("url: ", url);

  const id = initData?.user?.id;
  // test
  // const id = 530287867;

  // const { data } = useQuery({
  //   queryKey: [id],
  //   queryFn: () => fetch(`${url}?tgId=${id}`).then((res) => res.json()),
  // });

  const { data: referals } = useQuery<UserType[]>({
    queryKey: ["referals"],
    queryFn: () =>
      fetch(`${BASE_URL}/api/users/referrals?tgId=${id}`).then((res) =>
        res.json()
      ),
  });

  console.log("referals: ", referals);
  const refLink = useMemo(() => {
    if (id) {
      return generateRefLink(id);
    }
    return "No user found";
  }, [id]);

  const copyLink = () => {
    navigator.clipboard.writeText(refLink);
  };

  return (
    <Flex
      direction={"column"}
      px={{ base: 6 }}
      py={{ base: 8 }}
      gap={{ base: 6, md: 8 }}
    >
      <Flex justifyContent={"center"} alignItems={"center"}>
        <SubTitle>Invite your friends</SubTitle>
      </Flex>
      <Flex>
        <Flex
          px={{ base: 6 }}
          py={{ base: 4 }}
          borderRadius={{ base: 8 }}
          borderColor={"green.800"}
          borderStyle={"solid"}
          borderWidth={1}
          justifyContent={"space-between"}
          alignItems={"center"}
          minW={"250px"}
          onClick={copyLink}
        >
          <MainText>
            {id ? "Copy referral code" : "No telegram accaunt"}
          </MainText>
          <IconButton
            colorScheme="black"
            onClick={copyLink}
            aria-label="copy"
            icon={<FaCopy />}
            color="white"
            variant="ghost"
          />
        </Flex>
      </Flex>
      <Flex direction="column" gap={6}>
        {!!referals && <SubTitle>Your referals</SubTitle>}
        <Flex color="gray.100">
          {referals?.map((user) => (
            <Box
              key={user.id}
              px={{ base: 6 }}
              py={{ base: 4 }}
              borderRadius={{ base: 8 }}
              borderColor={"green.800"}
              borderStyle={"solid"}
              borderWidth={1}
              justifyContent={"space-between"}
              alignItems={"center"}
              minW={"250px"}
            >
              <MainText>{user.tg_username}</MainText>
            </Box>
          ))}
          <MainText></MainText>
        </Flex>
      </Flex>
    </Flex>
  );
};

Component.displayName = "InvitePage";
