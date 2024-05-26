import { useQuery } from "@tanstack/react-query";
import { usersApi } from "./api";

export const getUserQueryKey = (tgUserId?: number) => ["user", tgUserId];

export const useUserQuery = (tgUserId?: number) => {
  const userKey = getUserQueryKey(tgUserId);
  const { data: user, isLoading: isUserLoading } = useQuery({
    queryKey: userKey,
    queryFn: async () => {
      const { data } = await usersApi.apiUsersGetByTgIdGet({ tgId: tgUserId! });
      return data;
    },
    enabled: !!tgUserId,
  });
  return { user, isUserLoading };
};
