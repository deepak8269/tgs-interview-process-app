import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ primary = 0, theme }) => ({
  height: theme.sizing(45),
  minWidth: theme.sizing(190),
  padding: theme.sizing(20),
  borderRadius: theme.sizing(10),
  textTransform: "none",
  fontSize: theme.typography.subtitle2.fontSize,
  ...(primary
    ? {
        color: theme.palette.text.negative,
        background: theme.palette.background.dark,
        letterSpacing: 0.5,
        fontWeight: 500,
        "&:hover": {
          background: theme.palette.common.darkGrey
        }
      }
    : {
        color: theme.palette.text.emphasize,
        background: theme.palette.background.light,
        border: "1px solid black",
        borderColor: theme.palette.background.dark,
        "&:hover": {
          color: theme.palette.common.darkGrey,
          borderColor: theme.palette.common.darkGrey
        }
      })
}));

export default StyledButton;
