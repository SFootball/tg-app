import { useMutation } from "@tanstack/react-query";
import { queryClient } from "src/App";
import { mainApi } from "src/shared/api/api";
import { useInitDataTg } from "src/shared/hooks/useInitDataTg";
import { getUserQueryKey } from "src/shared/hooks/useUserQuery";

export const useOnCollectPoints = () => {
  const initData = useInitDataTg();
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["onCollectPoints"],
    mutationFn: async ({ sfsCount }: { sfsCount: number }) => {
      await mainApi.usersApi.apiUsersUpdateSfsCountPost({
        userUpdateSfsCount: {
          sfs_count: sfsCount,
        },
      });
      const userInfoQueryKey = getUserQueryKey(initData);
      queryClient.invalidateQueries({ queryKey: userInfoQueryKey });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return {
    onCollectPoints: mutateAsync,
    isCollectPointsLoading: isPending,
  };
};
