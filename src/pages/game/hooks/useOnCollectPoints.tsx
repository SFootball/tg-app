import { useMutation } from "@tanstack/react-query";
import { mainApi } from "src/shared/api/api";

export const useOnCollectPoints = () => {
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
