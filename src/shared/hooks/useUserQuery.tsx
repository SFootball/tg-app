import { useQuery } from "@tanstack/react-query";
import { usersApi } from "../api/api";
import { generateTmaAuth } from "../api/api.utils";
import { useInitDataTg } from "./useInitDataTg";

export const getUserQueryKey = (initData?: string) => ["userinfo", initData];

export const useUserQuery = () => {
  const initData = useInitDataTg();
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
