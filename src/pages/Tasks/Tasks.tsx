import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { SubTitle } from "src/shared/components/SubTitle";

export const Component: FC = () => {
  const { t } = useTranslation();
  return (
    <Flex
      direction={"column"}
      gap={6}
      px={{ base: 6 }}
      py={{ base: 8 }}
      pb="200px"
    >
      <SubTitle>{t("Tasks")}</SubTitle>
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
      ></Flex>
    </Flex>
  );
};

Component.displayName = "TasksPage";
