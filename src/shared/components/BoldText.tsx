import { Text, TextProps } from "@chakra-ui/react";
import { FC } from "react";

type Props = TextProps;

export const BoldText: FC<Props> = ({ children, ...props }) => {
  return (
    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" {...props}>
      {children}
    </Text>
  );
};
