import { Flex, List, ListItem } from "@chakra-ui/react";
import { FC, useMemo } from "react";
import { MainText } from "src/shared/components/MainText";
import { SubTitle } from "src/shared/components/SubTitle";
import { useTgWebAppStore } from "src/store/twWebApp.store";

export const Component: FC = () => {
  const tgWebApp = useTgWebAppStore((state) => state.tgWebApp);

  const userInfo = useMemo(() => {
    const user = tgWebApp?.initDataUnsafe?.user;
    if (user) {
      return user;
    }
    return "";
  }, [tgWebApp]);

  return (
    <Flex direction={"column"} gap={6} px={{ base: 6 }} py={{ base: 8 }}>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <SubTitle>User Info</SubTitle>
      </Flex>
      {!userInfo && (
        <Flex>
          <MainText>User not found</MainText>
        </Flex>
      )}
      {userInfo && (
        <List>
          <ListItem>Username: {userInfo?.username}</ListItem>
        </List>
      )}
    </Flex>
  );
};

Component.displayName = "UserPage";
