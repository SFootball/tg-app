import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useExpand } from "@vkruglikov/react-telegram-web-app";

export const Layout: FC = () => {
  const [isExpanded, expand] = useExpand();

  useEffect(() => {
    if (!isExpanded) {
      expand();
    }
  }, [isExpanded, expand]);

  return <Outlet />;
};
