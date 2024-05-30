import { useQuery } from "@tanstack/react-query";
import { usersApi } from "../api/api";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { generateTmaAuth } from "../api/api.utils";

export const getUserQueryKey = () => ["userinfo"];

export const useUserQuery = () => {
  const [_, initData] = useInitData();
  const userKey = getUserQueryKey();

  const {
    data: user,
    isLoading: isUserLoading,
    isError,
  } = useQuery({
    queryKey: userKey,
    queryFn: async () => {
      const { data } = await usersApi.apiUsersGetUserInfoGet({
        headers: {
          Authorization: generateTmaAuth(initData!),
        },
      });
      return data;
    },
    staleTime: 15 * 60 * 1000,
    enabled: !!initData,
  });
  return { user, isUserLoading, isUserError: isError };
};
