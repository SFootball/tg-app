import { Flex } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { useExpand } from "@vkruglikov/react-telegram-web-app";

export const Layout: FC = () => {
  const [isExpanded, expand] = useExpand();
  useEffect(() => {
    console.log("isExpanded", isExpanded);
    if (!isExpanded) {
      expand();
    }
  }, [isExpanded, expand]);
  return (
    <>
      <Navbar />
      <Flex as="main" direction="column">
        <Outlet />
      </Flex>
      <Footer />
    </>
  );
};
