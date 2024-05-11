import { Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Footer from "src/entities/Footer/Footer";
import { Navbar } from "src/entities/Navbar/Navbar";

export const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <Flex as="main">
        <Outlet />
      </Flex>
      <Footer />
    </>
  );
};
