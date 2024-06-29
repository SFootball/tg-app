import {
  Box,
  Container,
  Flex,
  FlexProps,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import { FC, forwardRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { bgFooterGradient } from "src/shared/style/bgGradient";
import { getNavigation } from "src/entities/navigation/navigation";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const [t] = useTranslation();
  const navigation = useMemo(() => {
    return getNavigation(t);
  }, [t]);
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
        py={4}
        direction={{ base: "row" }}
        spacing={4}
        justify={{ base: "space-around" }}
        align={{ base: "center", md: "center" }}
        bgGradient={bgFooterGradient}
        borderRadius={{ base: "24px" }}
        overflow={"hidden"}
      >
        {navigation.map((item) => {
          const NavIcon = item.icon;
          return (
            <Tooltip key={item.path} label={item.title} placement="top">
              <IconItem>
                <Link to={item.path}>
                  <NavIcon isActive={false} />
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
