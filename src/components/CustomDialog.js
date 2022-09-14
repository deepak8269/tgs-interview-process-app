// external imports
import React from "react";
import {
  Box,
  Slide,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent
} from "@mui/material";

const styles = {
  box: {
    width: 450,
    height: 200
  }
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialog = ({
  open,
  title,
  children,
  handleClose,
  primaryButtonText = "Save",
  secondaryButtonText,
  primaryButtonHandler,
  secondaryButtonHandler,
  isPrimaryButtonVisible = true,
  isSecondaryButtonVisible = false,
  isPrimaryButtonDisabled = false,
  isSecondaryButtonDisabled = false
}) => (
  <Dialog
    open={open}
    keepMounted
    onClose={handleClose}
    TransitionComponent={Transition}
    aria-describedby="alert-dialog-slide-description">
    <DialogTitle>{title}</DialogTitle>
    <DialogContent dividers>
      <Box id="alert-dialog-slide-description" sx={styles.box}>
        {children}
      </Box>
    </DialogContent>
    <DialogActions>
      {isSecondaryButtonVisible && (
        <Button disabled={isSecondaryButtonDisabled} onClick={secondaryButtonHandler}>
          {secondaryButtonText}
        </Button>
      )}
      {isPrimaryButtonVisible && (
        <Button disabled={isPrimaryButtonDisabled} onClick={primaryButtonHandler}>
          {primaryButtonText}
        </Button>
      )}
    </DialogActions>
  </Dialog>
);

export default CustomDialog;
