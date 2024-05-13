import { Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";

type Props = TextProps;

export const MainText: FC<Props> = ({ children, ...props }) => {
  return (
    <Text fontSize={{ base: "md", md: "lg" }} {...props}>
      {children}
    </Text>
  );
};
