import {
  StyleFunctionProps,
  // TODO use extendBaseTheme to reduce build size
  // extendBaseTheme,
  extendTheme,
  // theme as chakraTheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const appTheme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  colors: {
    bg: {
      violet: "#c944fd",
      green: "#96C26D",
      green_1: "#78fd44",
    },
    content: {
      violet: "#c944fd",
      green: "#78fd44",
      blue: "#44d5fd",
      orange: "#fd6c44",
    },
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: "blackAlpha.900",
        // bg: mode("#78fd44", "#78fd44")(props),
        color: mode("gray.50", "gray.900")(props),
      },
    }),
  },
});
