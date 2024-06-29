import { TFunction } from "i18next";
import { FaHome, FaTasks, FaUser, FaUserPlus } from "react-icons/fa";

import { GameNavIcon } from "src/shared/components/icons/GameNavIcon";

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
    icon: FaHome,
  },
  {
    title: t("Tasks"),
    path: PathsName.tasks,
    icon: FaTasks,
  },
  {
    title: t("Invite"),
    path: PathsName.invite,
    icon: FaUserPlus,
  },
  {
    title: t("User"),
    path: PathsName.user,
    icon: FaUser,
  },
];
