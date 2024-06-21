import { useMutation } from "@tanstack/react-query";
import { queryClient } from "src/App";
import { mainApi } from "src/shared/api/api";
import { useInitDataTg } from "src/shared/hooks/useInitDataTg";
import { getUserQueryKey } from "src/shared/hooks/useUserQuery";

export const useOnCollectPoints = () => {
  const initData = useInitDataTg();
  const { mutate, isPending } = useMutation({
    mutationKey: ["onCollectPoints"],
    mutationFn: async ({
      sfsCount,
      cb,
    }: {
      sfsCount: number;
      cb: () => void;
    }) => {
      await mainApi.usersApi.apiUsersUpdateSfsCountPost({
        userUpdateSfsCount: {
          sfs_count: sfsCount,
        },
      });
      const userInfoQueryKey = getUserQueryKey(initData);
      queryClient.invalidateQueries({ queryKey: userInfoQueryKey });
      cb();
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    onCollectPoints: mutate,
    isLoading: isPending,
  };
};
