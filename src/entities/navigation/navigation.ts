import { TFunction } from "i18next";
import { FaHome, FaTasks, FaUser, FaUserPlus } from "react-icons/fa";

export enum PathsName {
  main = "/",
  tasks = "/tasks",
  invite = "/invite",
  user = "/user",
  game = "/game",
}

export const getNavigation = (t: TFunction) => [
  {
    title: t("Home"),
    path: PathsName.main,
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
