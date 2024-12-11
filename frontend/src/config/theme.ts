"use client";

import { createTheme } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    allVariants: {
      textTransform: "capitalize",
    },
  },
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: yellow[700],
    },
  },
});

export default theme;
