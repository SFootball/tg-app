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
  colors: {
    bg: {
      green: "#96C26D",
      green_1: "#D0F5AE",
    },
  },
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
        bg: mode("#78fd44", "#78fd44")(props),
        color: mode("gray.50", "gray.900")(props),
      },
    }),
  },
});
