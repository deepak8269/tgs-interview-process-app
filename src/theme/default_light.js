import { sizingFactor, spacingFactor } from "./themeUtils";

const Options = {
  palette: {
    common: {
      white: "#ffffff",
      black: "#000000",
      darkGrey: "#3c3c3c"
    },
    primary: {
      main: "#4a8be0"
    },
    error: {
      main: "#ed3d07"
    },
    warning: {
      main: "#fac509",
      light: "#ffdd54"
    },
    info: {
      main: "#41bbe0"
    },
    success: {
      main: "#6bc920"
    },
    secondary: {
      main: "#ffdd54"
    },
    background: {
      paper: "#ffffff",
      default: "#ffffff",
      dark: "#000000",
      gray: "#f2f2f2",
      light: "#ffffff",
      darkGray: "#c6c6c6"
    },
    text: {
      primary: "#484848",
      emphasize: "#000000",
      highlight: "#4a8be0",
      negative: "#ffffff"
    }
  },
  shadows: [
    "none",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)",
    "-1px 9px 18px -8px rgba(0,0,0,0.61)"
  ],
  typography: {
    fontFamily: ['"Segoe UI"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Open Sans"'].join(","),
    h1: {
      fontSize: sizingFactor(48),
      fontWeight: 400
    },
    h2: {
      fontSize: sizingFactor(36),
      fontWeight: 400
    },
    h3: {
      fontSize: sizingFactor(24),
      fontWeight: 700
    },
    h4: {
      fontSize: sizingFactor(20),
      fontWeight: 400
    },
    subtitle1: {
      fontSize: sizingFactor(18),
      fontWeight: 700
    },
    subtitle2: {
      fontSize: sizingFactor(17),
      fontWeight: 400
    },
    body1: {
      fontSize: sizingFactor(16),
      fontWeight: 400,
      lineHeight: "1.2em"
    },
    body2: {
      fontSize: sizingFactor(14),
      fontWeight: 400,
      lineHeight: "1.2em"
    }
  },
  spacing: (factor) => spacingFactor(factor),
  sizing: (factor) => sizingFactor(factor),
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: `${theme.sizing(10)} !important`,
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: theme.sizing(1.55)
          }
        }),
        input: ({ theme }) => ({
          height: theme.sizing(50),
          padding: `0 ${theme.sizing(15)} ${theme.sizing(1)} !important`,
          fontSize: theme.typography.subtitle2.fontSize,
          color: "#000000"
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          top: theme.sizing(-2)
        }),
        shrink: ({ theme }) => ({
          top: theme.sizing(0)
        })
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: ({ theme }) => ({
          "& .MuiInputLabel-root": {
            top: theme.sizing(5)
          },
          "& .MuiInputLabel-root.MuiInputLabel-shrink": {
            top: theme.sizing(0)
          },
          "& .MuiOutlinedInput-root": {
            padding: `${theme.sizing(0)} !important`
          }
        })
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: ({ theme }) => ({
          display: "flex",
          alignItems: "center",
          height: theme.sizing(52),
          minHeight: theme.sizing(0)
        })
      }
    }
  }
};

export default Options;
