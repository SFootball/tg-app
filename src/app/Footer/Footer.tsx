import {
  Box,
  Container,
  Flex,
  FlexProps,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { FaHome, FaUser, FaUserPlus } from "react-icons/fa";
import { FC, forwardRef } from "react";
import { PathsName } from "src/app/routes.config";
import { Link } from "react-router-dom";
import { bgFooterGradient } from "src/shared/style/bgGradient";

export default function Footer() {
  return (
    <Box
      as="footer"
      color="white"
      position={"fixed"}
      left={0}
      bottom={0}
      width="100%"
      zIndex={10}
      px={{ base: 6 }}
      py={{ base: 8 }}
    >
      <Container
        as={Stack}
        // maxW={"6xl"}
        py={4}
        direction={{ base: "row" }}
        spacing={4}
        justify={{ base: "space-around" }}
        align={{ base: "center", md: "center" }}
        bgGradient={bgFooterGradient}
        borderRadius={{ base: "24px" }}
        overflow={"hidden"}
      >
        <Tooltip label="Home" placement="top" color="white">
          <IconItem>
            <Link to={"/"}>
              <FaHome />
            </Link>
          </IconItem>
        </Tooltip>
        <Tooltip label="Referals" placement="top" color="white">
          {/* <Link href={`/${PathsName.invite}`}> */}
          <IconItem>
            <Link to={PathsName.invite}>
              <FaUserPlus />
            </Link>
          </IconItem>
        </Tooltip>
        <Tooltip label="User" placement="top" color="white">
          <IconItem>
            <Link to={PathsName.user}>
              {/* <SocialButton label={"User"} href={"/user-lk"}> */}
              <FaUser />
            </Link>
          </IconItem>
        </Tooltip>
      </Container>
    </Box>
  );
}

const IconItem: FC<FlexProps> = forwardRef(({ children, ...props }) => {
  return (
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      fontSize={"xl"}
      {...props}
    >
      {children}
    </Flex>
  );
});
