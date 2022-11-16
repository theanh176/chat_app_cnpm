import { createTheme } from "@mui/material/styles";
import { COLORFIELD } from "../../helper/const";

const themeOptions = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "700",
          color: COLORFIELD.white,
          backgroundColor: COLORFIELD.secondary,
          borderRadius: "12px",
          boxShadow: "none",
          paddingTop: "12px",
          paddingBottom: "12px",
          "&:hover": {
            backgroundColor: COLORFIELD.secondary__hover,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          paddingTop: "30px",
          paddingBottom: "30px",
          width: "50%",
          opacity: 0.4,
          "&.Mui-selected": {
            opacity: 1,
          },
          fontSize: "18px",
          fontWeight: "500",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: COLORFIELD.primary,
          height: "4px",
          borderRadius: "2px",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: COLORFIELD.error,
        },
      },
    }
  },
});

export default themeOptions;
