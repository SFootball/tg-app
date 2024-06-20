import { useQuery } from "@tanstack/react-query";
import { mainApi } from "../api/api";
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
      const { data } = await mainApi.usersApi.apiUsersGetUserInfoGet();
      return data;
    },
    staleTime: 15 * 60 * 1000,
    enabled: !!initData,
  });
  return { user, isUserLoading, isUserError: isError };
};
