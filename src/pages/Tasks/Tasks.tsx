import { Flex, Skeleton, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useInitData } from "@vkruglikov/react-telegram-web-app";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { tasksApi } from "src/shared/api/api";
import { SubTitle } from "src/shared/components/SubTitle";
import { useUserQuery } from "src/shared/api/useUserQuery";
import { TaskCard } from "./TaskCard";
import { generateTmaAuth } from "src/shared/api/api.utils";

export const Component: FC = () => {
  const { t } = useTranslation();

  const [_, initData] = useInitData();

  const { user, isUserLoading } = useUserQuery();

  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await tasksApi.apiTasksAllGet({
        headers: {
          Authorization: generateTmaAuth(initData!),
        },
      });
      return data;
    },
  });

  return (
    <Flex
      direction={"column"}
      gap={6}
      px={{ base: 6 }}
      py={{ base: 8 }}
      pb="200px"
    >
      <SubTitle>{t("Tasks")}</SubTitle>
      <Flex minW={"250px"} direction={"column"} gap={6}>
        {(isUserLoading || isLoading) && (
          <Stack w="100%">
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        )}
        {tasks?.map((task) => {
          return (
            <TaskCard
              key={task.id}
              task={task}
              user={user}
              initDataStr={initData}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

Component.displayName = "TasksPage";
