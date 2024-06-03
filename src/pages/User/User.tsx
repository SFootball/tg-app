import {
  Flex,
  List,
  Image,
  ListItem,
  VStack,
  Skeleton,
} from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import { MainText } from "src/shared/components/MainText";
import { SubTitle } from "src/shared/components/SubTitle";
// for TEST
// import { mockTgUser } from "src/shared/mock/tgUser";
import { Select, chakraComponents } from "chakra-react-select";
import ruIcon from "../../assets/ru-flag.png";
import enIcon from "../../assets/en-flag.png";
import { useTranslation } from "react-i18next";
import { BoldText } from "src/shared/components/BoldText";
import { useTonAddress } from "@tonconnect/ui-react";
import { useUserQuery } from "src/shared/hooks/useUserQuery";

type SelectOptionType = {
  value: string;
  label: string;
  icon: JSX.Element;
};

const languages: SelectOptionType[] = [
  {
    value: "en",
    label: "english",
    icon: <Image src={enIcon} mr={2} h={4} w={4} />,
  },
  {
    value: "ru",
    label: "русский",
    icon: <Image src={ruIcon} mr={2} h={4} w={4} />,
  },
];

const customComponents = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Option: ({ ...props }: any) => (
    <chakraComponents.Option {...props} width="6">
      {props.data.icon}
    </chakraComponents.Option>
  ),
};

export const Component: FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  // const userFriendlyAddress = useTonStore((state) => state.userFrendlyAddress);
  const userFriendlyAddress = useTonAddress();

  const defaultLang = i18n.language === "ru" ? languages[1] : languages[0];

  const { user, isUserLoading } = useUserQuery();
  // // const [initData] = useInitData();
  // const userInfo = useMemo(() => {
  //   const user = initData?.user;
  //   // for TEST
  //   // const user = mockTgUser;
  //   if (user) {
  //     return user;
  //   }
  //   return null;
  // }, [initData]);

  return (
    <Flex
      direction={"column"}
      gap={6}
      px={{ base: 6 }}
      py={{ base: 8 }}
      w="100%"
    >
      <Flex alignItems={"center"}>
        <SubTitle>{t("User info")}</SubTitle>
      </Flex>
      {/* {!userInfo && (
        <Flex>
          <MainText>{t("User not found")}</MainText>
        </Flex>
      )} */}

      {isUserLoading && (
        <VStack>
          <Skeleton height="30px" />
          <Skeleton height="30px" />
          <Skeleton height="30px" />
        </VStack>
      )}

      <List
        spacing={6}
        bgColor="bg.violet"
        boxShadow="2xl"
        p={{ base: "20px" }}
        borderRadius={{ base: 8 }}
      >
        <ListItem>
          <KeyItem> {t("Username")}:</KeyItem>
          <ValueItem>
            {user?.tg_username ? user?.tg_username : t("User not found")}
          </ValueItem>
        </ListItem>

        <ListItem>
          <KeyItem> {t("Wallet address")}:</KeyItem>
          <ValueItem>
            {userFriendlyAddress
              ? userFriendlyAddress
              : t("Please connect wallet")}
          </ValueItem>
        </ListItem>
        <ListItem w="200px">
          <Flex alignItems={"center"}>
            <KeyItem> {t("Language")}:</KeyItem>
            <ValueItem>
              <Select
                onChange={(o) => {
                  if (o) {
                    changeLanguage(o?.value);
                  }
                }}
                variant={"unstyled"}
                defaultValue={defaultLang}
                options={languages}
                components={customComponents}
              />
            </ValueItem>
          </Flex>
        </ListItem>
      </List>
    </Flex>
  );
};

Component.displayName = "UserPage";

const KeyItem: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <BoldText as="span" {...props}>
      {children}
    </BoldText>
  );
};

const ValueItem: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <MainText as="span" ml={6} {...props}>
      {children}
    </MainText>
  );
};
