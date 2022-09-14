import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const MaterialPhoneInput = styled(PhoneInput)(({ theme, ...restProps }) => [
  {
    color: theme.palette.text.primary,
    "&.react-tel-input": {
      fontFamily: theme.typography.fontFamily,
      ".special-label": {
        left: theme.spacing(2.5),
        top: theme.spacing(-2.5)
      },
      ".form-control": {
        width: "100%",
        color: theme.palette.text.primary,
        fontSize: theme.typography.subtitle2.fontSize,
        borderRadius: theme.sizing(10),
        borderWidth: theme.sizing(1),
        height: theme.sizing(52),
        padding: `0 ${theme.sizing(15)} 0 ${theme.sizing(58)} !important`,
        "&:focus": {
          boxShadow: theme.shadows[0]
        }
      },
      "&:focus-within": {
        ".special-label": {
          color: theme.palette.text.highlight,
          fontWeight: 400
        }
      }
    }
  },
  !restProps.isValid() && {
    marginBottom: theme.sizing(35),
    "&.react-tel-input": {
      "& .special-label": {
        color: theme.palette.error.main
      },
      ".form-control": {
        "&.invalid-number": {
          borderColor: theme.palette.error.main
        },
        "&.invalid-number:focus": {
          boxShadow: `0 0 0 1px ${theme.palette.error.main}`
        }
      },
      "& .invalid-number-message": {
        color: theme.palette.error.main,
        top: theme.sizing(55),
        left: theme.sizing(9),
        fontSize: theme.sizing(12)
      }
    }
  }
]);

const PhoneNumberInput = ({ label, value, error, onChange }) => {
  const errorMsg = error ? error.message : null;
  return (
    <Grid mb={3}>
      <MaterialPhoneInput
        country="in"
        value={value}
        onChange={onChange}
        specialLabel={label}
        placeholder=""
        defaultErrorMessage={errorMsg}
        isValid={() => {
          if (errorMsg) return false;
          return true;
        }}
      />
    </Grid>
  );
};

export default PhoneNumberInput;
