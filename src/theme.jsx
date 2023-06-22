import { createTheme } from "@mui/material";

export const colors = {
  green: {
    100: "#f7a2a2",
    200: "#de9191",
    300: "#c58181",
    400: "#ac7171",
    500: "#946161",
    600: "#7b5151",
    700: "#624040",
    800: "#4a3030",
    900: "#312020",
  },
  lightBlue: {
    100: "#fee0c0",
    200: "#fee3c6",
    300: "#fee6cc",
    400: "#fee9d2",
    500: "#feecd9",
    600: "#feefdf",
    700: "#fef2e5",
    800: "#fef5ec",
    900: "#fef8f2",
  },
  input: {
    100: "#470031",
    200: "#3f002c",
    300: "#380027",
    400: "#591945",
    500: "#6b325a",
    600: "#7e4c6e",
    700: "#2a001d",
    800: "#906683",
    900: "#230018",
  },
  background: {
    100: "#fce3e3",
    200: "#fbd9d9",
    300: "#fac7c7",
    400: "#f9bdbd",
    500: "#f8b4b4",
    600: "#f7abab",
    700: "#f7a2a2",
    800: "#4a3030",
    900: "#312020",
  },
};

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.input[400],
    },
    background: {
      default: "#f8b4b4",
    },
  },
  typography: {
    fontFamily: ["sans-serif"].join(" "),
  },
});
