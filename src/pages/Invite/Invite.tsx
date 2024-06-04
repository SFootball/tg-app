import { Box, Divider, Flex, IconButton, Skeleton } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FC, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCopy, FaCheck } from "react-icons/fa";
import { usersApi } from "src/shared/api/api";
import { generateTmaAuth } from "src/shared/api/api.utils";
import { useUserQuery } from "src/shared/hooks/useUserQuery";
import { MainText } from "src/shared/components/MainText";
import { SubTitle } from "src/shared/components/SubTitle";
import { UserType } from "src/shared/types/User";
import { generateRefLink } from "src/shared/utils/tg.utils";
import { useInitDataTg } from "src/shared/hooks/useInitDataTg";
// import { mockReferrals as referrals } from "src/shared/mock/referrals";

export const Component: FC = () => {
  const { t } = useTranslation();
  const initData = useInitDataTg();

  const { user, isUserLoading } = useUserQuery();
  // const id = initData?.user?.id;
  // test
  // const id = 530287867;

  const [copyStatus, setCopyStatus] = useState(false);

  const copyReferralText = !copyStatus ? "Copy referral code" : "Copied";

  const { data: referrals, isLoading } = useQuery<UserType[]>({
    queryKey: ["referals"],
    queryFn: () =>
      usersApi
        .apiUsersReferralsGet(
          {
            userGetReferralsQueryParams: { tg_id: user?.tg_id },
          },
          {
            headers: {
              Authorization: generateTmaAuth(initData!),
            },
          }
        )
        .then((resp) => resp?.data),
    enabled: !!user,
  });

  const refLink = useMemo(() => {
    if (user?.tg_id) {
      return generateRefLink(user.tg_id);
    }
    return "No user found";
  }, [user?.tg_id]);

  const copyLink = () => {
    navigator.clipboard.writeText(refLink);
    setCopyStatus(true);
  };

  return (
    <Flex
      direction={"column"}
      px={{ base: 6 }}
      py={{ base: 8 }}
      gap={{ base: 6, md: 8 }}
    >
      <Flex alignItems={"center"}>
        <SubTitle color="black">
          {t("Invite your friends")}
          <Divider
            pt="10px"
            mt="auto"
            borderBottomWidth="2px"
            borderColor="black"
            width="calc(100vw - 48px)"
          />
        </SubTitle>
      </Flex>

      <Flex>
        <Flex
          px={{ base: 4 }}
          py={{ base: 2 }}
          borderRadius={{ base: 8 }}
          bgColor="bg.violet"
          boxShadow="2xl"
          justifyContent={"space-between"}
          alignItems={"center"}
          minW={"302px"}
          onClick={copyLink}
        >
          <MainText>
            {user?.tg_id ? t(`${copyReferralText}`) : t("No telegram accaunt")}
          </MainText>
          <IconButton
            colorScheme="black"
            onClick={copyLink}
            aria-label="copy"
            icon={copyStatus ? <FaCheck /> : <FaCopy />}
            color="white"
            isDisabled={copyStatus ? true : false}
            variant="ghost"
          />
        </Flex>
      </Flex>
      <Flex direction="column" gap={6}>
        {(isLoading || isUserLoading) && (
          <Skeleton>
            <SubTitle color="black">{t("Your referals")}</SubTitle>
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
              bgColor="bg.violet"
              boxShadow="2xl"
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
