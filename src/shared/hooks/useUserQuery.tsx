import { useQuery } from "@tanstack/react-query";
import { mainApi } from "../api/api";
import { useInitDataTg } from "./useInitDataTg";
import { useEffect } from "react";

export const getUserQueryKey = (initData?: string) => ["userinfo", initData];

export const useUserQuery = () => {
  const initData = useInitDataTg();
  const userKey = getUserQueryKey(initData);
  useEffect(() => {
    if (initData) {
      mainApi.setToken(initData);
    }
  }, [initData]);

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
    enabled: !!initData || !mainApi.accessToken,
  });
  return { user, isUserLoading, isUserError: isError };
};
