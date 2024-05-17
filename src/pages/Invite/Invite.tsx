import { Flex } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import React, { FC, useMemo } from "react";
import { MainText } from "src/shared/components/MainText";
import { SubTitle } from "src/shared/components/SubTitle";
import { generateRefLink } from "src/shared/utils/tg.utils";
import { useTgWebAppStore } from "src/store/twWebApp.store";

// const BASE_URL = import.meta.env.VITE_API_URL;
const BASE_URL = "https://apiservice.containers.cloud.ru";

export const Component: FC = () => {
  const tg = useTgWebAppStore((state) => state.initData);
  // const url = `/api/users/referral-id`;
  const url = `${BASE_URL}/api/users/referral-id`;
  console.log("url: ", url);
  // TODO get list of referrals
  const { data } = useQuery({
    queryKey: ["refUsers"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  console.log("refUsers: ", data);

  const id = tg?.user?.id;

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
        >
          <MainText onClick={copyLink}>{refLink}</MainText>
        </Flex>
      </Flex>
      <Flex direction="column" gap={6}>
        <SubTitle>Your referals</SubTitle>
        <Flex>
          <MainText></MainText>
        </Flex>
      </Flex>
    </Flex>
  );
};

Component.displayName = "InvitePage";
