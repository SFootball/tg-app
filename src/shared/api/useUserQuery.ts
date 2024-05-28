import { useQuery } from "@tanstack/react-query";
import { usersApi } from "./api";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { TmaTypeAuthKey } from "./swagger";

export const getUserQueryKey = (initData?: string) => ["user", initData];

export const useUserQuery = () => {
  const [_, initData] = useInitData();
  const userKey = getUserQueryKey(initData);

  const {
    data: user,
    isLoading: isUserLoading,
    isError,
  } = useQuery({
    queryKey: userKey,
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
  return { user, isUserLoading, isUserError: isError };
};
