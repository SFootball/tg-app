import { Heading, HeadingProps } from "@chakra-ui/react";
import { FC } from "react";

type Props = HeadingProps;

export const SubTitle: FC<Props> = ({ children, ...props }) => {
  return (
    <Heading as="h3" size={{ base: "md", md: "lg" }} {...props}>
      {children}
    </Heading>
  );
};
