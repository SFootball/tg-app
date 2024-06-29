import { TFunction } from "i18next";

import { GameNavIcon } from "src/shared/components/icons/GameNavIcon";
import { InviteNavIcon } from "src/shared/components/icons/InviteNavIcon";
import { MainNavIcon } from "src/shared/components/icons/MainNavIcon";
import { TaskNavIcon } from "src/shared/components/icons/TasksNavIcon";
import { UserNavIcon } from "src/shared/components/icons/UserNavIcon";

export enum PathsName {
  main = "/",
  home = "/home",
  tasks = "/tasks",
  invite = "/invite",
  user = "/user",
  game = "/game",
}

export const getNavigation = (t: TFunction) => [
  {
    title: t("Game"),
    path: PathsName.main,
    icon: GameNavIcon,
  },
  {
    title: t("Home"),
    path: PathsName.home,
    icon: MainNavIcon,
  },
  {
    title: t("Tasks"),
    path: PathsName.tasks,
    icon: TaskNavIcon,
  },
  {
    title: t("Invite"),
    path: PathsName.invite,
    icon: InviteNavIcon,
  },
  {
    title: t("User"),
    path: PathsName.user,
    icon: UserNavIcon,
  },
];
