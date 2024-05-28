import { useQuery } from "@tanstack/react-query";
import { usersApi } from "./api";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { TmaTypeAuthKey } from "./swagger";

export const getUserQueryKey = (tgUserId?: number) => ["user", tgUserId];

export const useUserQuery = () => {
  // const userKey = getUserQueryKey(tgUserId);
  const [_, initData] = useInitData();
  const { data: user, isLoading: isUserLoading } = useQuery({
    queryKey: ["userInfo", initData],
    queryFn: async () => {
      const { data } = await usersApi.apiUsersGetUserInfoGet({
        headers: {
          Authorization: `${TmaTypeAuthKey.Tma} ${initData}`,
        },
      });
      return data;
    },
    enabled: !!initData,
  });
  return { user, isUserLoading };
};
