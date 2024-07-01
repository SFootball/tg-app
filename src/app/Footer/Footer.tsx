import {
  Box,
  Container,
  Flex,
  FlexProps,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { FC, forwardRef, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNavigation } from "src/entities/navigation/navigation";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t] = useTranslation();
  const location = useLocation();
  const navigation = useMemo(() => {
    return getNavigation(t);
  }, [t]);
  return (
    <Box
      as="footer"
      position={"fixed"}
      left={0}
      bottom={0}
      width="100%"
      height="112px"
      zIndex={10}
    >
      <Container
        as={Stack}
        py={4}
        height="100%"
        direction={{ base: "row" }}
        spacing={4}
        justify={{ base: "space-around" }}
        align={{ base: "center", md: "center" }}
        bgColor="black"
        borderRadius={{ base: "45px 45px 0 0" }}
        overflow={"hidden"}
      >
        {navigation.map((item) => {
          const NavIcon = item.icon;
          return (
            <Tooltip key={item.path} label={item.title} placement="top">
              <IconItem>
                <Link to={item.path}>
                  <NavIcon isActive={item.path === location.pathname} />
                </Link>
              </IconItem>
            </Tooltip>
          );
        })}
      </Container>
    </Box>
  );
}

const IconItem: FC<FlexProps> = forwardRef(({ children, ...props }, ref) => {
  return (
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      fontSize={"xl"}
      ref={ref}
      {...props}
    >
      {children}
    </Flex>
  );
});
