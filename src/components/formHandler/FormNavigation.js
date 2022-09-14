// external imports
import React from "react";
import { Grid } from "@mui/material";
import StyledButton from "../styledButton/StyledButton";

const FormNavigation = ({
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  isPrimaryButtonVisible,
  onSecondaryButtonClick,
  isSecondaryButtonVisible
}) => (
  <Grid
    mt={5}
    mb={5}
    container
    justifyContent={isSecondaryButtonVisible ? "space-between" : "flex-end"}>
    {isSecondaryButtonVisible && (
      <StyledButton onClick={onSecondaryButtonClick}>{secondaryButtonText}</StyledButton>
    )}
    {isPrimaryButtonVisible && (
      <StyledButton primary={1} onClick={onPrimaryButtonClick} type="submit">
        {primaryButtonText}
      </StyledButton>
    )}
  </Grid>
);

export default FormNavigation;
