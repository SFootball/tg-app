import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { MainText } from "src/shared/components/MainText";
import { SubTitle } from "src/shared/components/SubTitle";

export const Component: FC = () => {
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
        <MainText>Comming soon</MainText>
      </Flex>
    </Flex>
  );
};

Component.displayName = "InvitePage";
