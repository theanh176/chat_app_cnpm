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
          borderWidth: '0',
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
          opacity: 0.4,
          color: "#23d2e2",
          padding: "20px 80px",
          "&.Mui-selected": {
            opacity: 1,
            color: COLORFIELD.primary,
          },
          fontWeight: "700",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: "8px",
          borderRadius: "4px",
          backgroundColor: '#fff',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: COLORFIELD.error,
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
  },
});

export default themeOptions;
