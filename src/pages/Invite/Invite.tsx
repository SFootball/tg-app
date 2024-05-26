import { Box, Flex, IconButton, Skeleton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FaCopy } from "react-icons/fa";
import { usersApi } from "src/shared/api/api";
import { MainText } from "src/shared/components/MainText";
import { SubTitle } from "src/shared/components/SubTitle";
import { UserType } from "src/shared/types/User";
import { generateRefLink } from "src/shared/utils/tg.utils";
// import { mockReferrals as referrals } from "src/shared/mock/referrals";

export const Component: FC = () => {
  const { t } = useTranslation();
  const [initData] = useInitData();

  const id = initData?.user?.id;
  // test
  // const id = 530287867;

  const { data: referrals, isLoading } = useQuery<UserType[]>({
    queryKey: ["referals"],
    queryFn: () =>
      usersApi
        .apiUsersReferralsGet({
          userGetReferralsQueryParams: { tg_id: id! },
        })
        .then((resp) => resp?.data),
    enabled: !!id,
  });

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
      <Flex alignItems={"center"}>
        <SubTitle>{t("Invite your friends")}</SubTitle>
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
            {id ? t("Copy referral code") : t("No telegram accaunt")}
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
        {isLoading && (
          <Skeleton>
            <span>{t("Your referals")}</span>
          </Skeleton>
        )}
        {!!referrals && <SubTitle>{t("Your referals")}</SubTitle>}
        <Flex color="gray.100" direction={"column"} gap={4} pb={20}>
          {referrals?.map((user) => (
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
        </Flex>
      </Flex>
    </Flex>
  );
};

Component.displayName = "InvitePage";
