import { useQuery } from "@tanstack/react-query";
import { mainApi } from "src/shared/api/api";

export const attemptsQueryKey = ["calculateGameAttempts"];

export const useCalculateGameAttempts = () => {
  const { data, isLoading } = useQuery({
    queryKey: attemptsQueryKey,
    queryFn: async () => {
      const { data } = await mainApi.gameApi.apiGameCalculateAttemptsPut();
      return data;
    },
  });

  return {
    attempts: data?.attempts,
    isGameAttemptsLoading: isLoading,
  };
};
