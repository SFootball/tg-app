import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const appTheme = extendTheme({
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
