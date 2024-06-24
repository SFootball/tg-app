import { useMutation } from "@tanstack/react-query";
import { queryClient } from "src/App";
import { attemptsQueryKey } from "src/entities/game/useCalculateGameAttempts";
import { mainApi } from "src/shared/api/api";

export const useDecreaseAttempts = () => {
  const { isPending, mutateAsync } = useMutation({
    mutationKey: ["decreaseAttempts"],
    mutationFn: async () => {
      await mainApi.gameApi.apiGameDecreaseAttemptsPut();
      // queryClient.invalidateQueries({ queryKey: attemptsQueryKey });
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: attemptsQueryKey });
    },
  });
  return {
    decreaseAttempts: mutateAsync,
    isLoadingDecreaseAttempts: isPending,
  };
};
