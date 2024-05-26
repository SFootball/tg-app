import { TaskType } from "src/shared/types/Task";

export const mockTasks: TaskType[] = [
  {
    id: "1",
    name: {
      en: "Task 1", // "Task 1",
      ru: "Задача 1",
    },
    description: {
      en: "Task 1 description",
      ru: "Описание задачи 1",
    },
    reward: 100,
  },
];
