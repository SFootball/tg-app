import {
  Button,
  Flex,
  IconButton,
  Link,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { queryClient } from "src/App";
import { tasksApi } from "src/shared/api/api";
import { getUserQueryKey } from "src/shared/api/useUserQuery";
import { MainText } from "src/shared/components/MainText";
import { translateTask } from "src/shared/formatters/task.formatter";
import { TaskType } from "src/shared/types/Task";
import { UserType } from "src/shared/types/User";

import { FaCheck } from "react-icons/fa";
import { SfsIcon } from "src/shared/components/icons/SfsIcon";
import { generateTmaAuth } from "src/shared/api/api.utils";
type Props = {
  task: TaskType;
  initDataStr: string | undefined;
  user: UserType | undefined;
};

export const TaskCard: FC<Props> = ({ task, initDataStr, user }) => {
  const { t, i18n } = useTranslation();
  const userKey = getUserQueryKey();
  const { mutate: completeTaskMutate, isPending } = useMutation({
    mutationKey: ["complete-task"],
    mutationFn: async (taskId: string) => {
      const { data } = await tasksApi.apiTasksCheckCompletePost(
        {
          taskCompleteParamsSchema: {
            task_id: taskId,
            tg_user_id: user?.tg_id,
          },
        },
        {
          headers: {
            Authorization: generateTmaAuth(initDataStr!),
          },
        }
      );
      return data;
    },
    onSuccess: () => {
      // refetch
      queryClient.invalidateQueries({ queryKey: userKey });
    },
  });

  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();

  const preparedTask = useMemo(() => {
    return translateTask(task, i18n.language);
  }, [task, i18n]);

  const isTaskCompleted = user?.completed_tasks_ids?.includes(task.id!);
  return (
    <Flex
      key={task.id}
      justifyContent="end"
      flexGrow={1}
      alignItems={"center"}
      borderRadius={{ base: 8 }}
      borderColor={"green.800"}
      borderStyle={"solid"}
      px={{ base: 4 }}
      py={{ base: 4 }}
      borderWidth={1}
      gap={2}
    >
      <Flex
        gap={4}
        alignItems={"center"}
        position="relative"
        flexGrow={1}
        flexWrap="wrap"
      >
        <Flex maxW={{ base: "150px" }}>
          <Link as="a" href={task.link} target="_blank">
            {preparedTask.name}
          </Link>
        </Flex>
        <Tooltip label={preparedTask.description} isOpen={isOpen}>
          <IconButton
            variant="unstyled"
            minW="none"
            minHeight="auto"
            height="auto"
            aria-label="more info"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            onClick={onToggle}
            icon={<AiOutlineInfoCircle />}
          />
        </Tooltip>
      </Flex>
      <Flex
        gap={1}
        alignItems={"center"}
        flexGrow={1}
        justifyContent="end"
        pr={{ base: 2, md: 8 }}
      >
        <MainText>{task.reward}</MainText>
        <SfsIcon />
      </Flex>
      <Button
        isDisabled={isTaskCompleted || isPending || !user}
        onClick={() => completeTaskMutate(preparedTask.id)}
        isLoading={isPending}
        size="sm"
      >
        <MainText mr={2}>
          {isTaskCompleted ? t("Claimed") : t("Check")}
        </MainText>
        {isTaskCompleted && <FaCheck color="green" />}
      </Button>
    </Flex>
  );
};
