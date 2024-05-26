import { TaskType } from "../types/Task";

type FormattedTask = {
  id: string;
  name: string;
  description: string;
  reward: number;
  link: string;
  resource: string;
  resource_id: string;
  created_at: string;
  updated_at: string;
};

export const translateTask = (task: TaskType, lang: string) => {
  return Object.entries(task).reduce((acc, [key, value]) => {
    if (typeof value === "object" && value)
      return { ...acc, [key]: value[lang] };
    return {
      ...acc,
      [key]: value,
    };
  }, {} as FormattedTask) as FormattedTask;
};
