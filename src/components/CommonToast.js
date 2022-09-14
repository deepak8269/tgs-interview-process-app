import React, { forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { handleHideToaster } from "../store/actions/ui";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CommonToast() {
  const toasterProps = useSelector((state) => state.ui.toaster);
  const dispatch = useDispatch();
  const { message, show, severity, vertical = "top", horizontal = "center" } = toasterProps;

  const handleClose = () => {
    handleHideToaster(dispatch);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={show}
      autoHideDuration={6000}
      onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CommonToast;
