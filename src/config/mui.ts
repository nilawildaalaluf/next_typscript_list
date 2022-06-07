import createCache from "@emotion/cache";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export const createEmotionCache = () => {
  return createCache({ key: "css", prepend: true });
};

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF453B",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#ADADAD",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variant: "body2",
      },
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: "12px",
            lineHeight: "16px",
          },
        },
      ],
    },
  },
});
