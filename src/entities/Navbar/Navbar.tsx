/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Image, Text } from "@chakra-ui/react";
import { TonConnectButton, useTonAddress } from "@tonconnect/ui-react";
import { FC } from "react";
import { Select, chakraComponents } from "chakra-react-select";
import { useTranslation } from "react-i18next";
import ruIcon from "../../assets/ru-flag.png";
import enIcon from "../../assets/en-flag.png";

type SelectOptionType = {
  value: string;
  label: string;
  icon: JSX.Element;
};

const formatAddress = (address: string) => {
  return address.slice(0, 4) + "..." + address.slice(-4);
};

const languages: SelectOptionType[] = [
  { value: "en", label: "en", icon: <Image src={enIcon} mr={2} h={4} w={4} /> },
  { value: "ru", label: "ru", icon: <Image src={ruIcon} mr={2} h={4} w={4} /> },
];

const customComponents = {
  Option: ({ ...props }: any) => (
    <chakraComponents.Option {...props} width="6">
      {props.data.icon}
    </chakraComponents.Option>
  ),
};

export const Navbar: FC = () => {
  const userFriendlyAddress = useTonAddress();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Flex
      as="header"
      justifyContent={"space-between"}
      alignItems={"center"}
      h={{ base: "130px" }}
      px={{ base: 8 }}
      backgroundColor={"gray.700"}
      color={"gray.100"}
      pb={{ base: 12 }}
    >
      <Text>Space Football</Text>
      <Flex>
        <Select
          onChange={(o) => {
            if (o) {
              changeLanguage(o?.value);
            }
          }}
          variant={"unstyled"}
          defaultValue={languages[0]}
          options={languages}
          components={customComponents}
        />
        {/* {languages.map(({ lang, icon }) => (
            <option key={lang} value={lang}>
              <Image src={icon} width={"20px"} height={"20px"} />
              <Text>{lang}</Text>
            </option>
          ))}
        </Select> */}
      </Flex>
      <Flex gap={4}>
        {userFriendlyAddress ? (
          <Text>{formatAddress(userFriendlyAddress)}</Text>
        ) : (
          <TonConnectButton />
        )}
      </Flex>
    </Flex>
  );
};
