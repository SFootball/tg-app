import { Divider, Flex, Skeleton, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { mainApi } from "src/shared/api/api";
import { SubTitle } from "src/shared/components/SubTitle";
import { useUserQuery } from "src/shared/hooks/useUserQuery";
import { TaskCard } from "./TaskCard";
// import { generateTmaAuth } from "src/shared/api/api.utils";
import { useInitDataTg } from "src/shared/hooks/useInitDataTg";
import Footer from "src/app/Footer/Footer";
import { Navbar } from "src/app/Navbar/Navbar";

export const Component: FC = () => {
  const { t } = useTranslation();
  const initData = useInitDataTg();

  const { user, isUserLoading } = useUserQuery();

  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await mainApi.tasksApi.apiTasksAllGet({
        // headers: {
        //   Authorization: generateTmaAuth(initData!),
        // },
      });
      return data;
    },
  });

  return (
    <>
      <Navbar />
      <Flex
        direction={"column"}
        gap={6}
        px={{ base: 6 }}
        py={{ base: 8 }}
        pb="200px"
      >
        <SubTitle color="whiteAlpha.900">
          {t("Tasks")}
          <Divider
            pt="10px"
            mt="auto"
            borderBottomWidth="2px"
            borderColor="whiteAlpha.800"
          />
        </SubTitle>

        <Flex minW={"250px"} direction={"column"} gap={6}>
          {(isUserLoading || isLoading) && (
            <Stack w="100%" spacing="24px">
              <Skeleton height="64px" />
              <Skeleton height="64px" />
              <Skeleton height="64px" />
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
      <Footer />
    </>
  );
};

Component.displayName = "TasksPage";
