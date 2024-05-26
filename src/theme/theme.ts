import {
  StyleFunctionProps,
  // TODO use extendBaseTheme to reduce build size
  // extendBaseTheme,
  extendTheme,
  // theme as chakraTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// const { Button, Select, Input, CloseButton, Tag } = chakraTheme.components;

export const appTheme = extendTheme({
  // components: {
  //   Button,
  //   Select,
  //   Input,
  //   CloseButton,
  //   Tag,
  // },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("gray.900", "gray.400")(props),
        color: mode("gray.50", "gray.900")(props),
        // bg: "gray.900",
        // color: "green",
      },
    }),
  },
});
