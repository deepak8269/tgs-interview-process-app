import React from "react";
import { CircularProgress } from "@mui/material";

const loaderStyles = {
  top: 0,
  left: 0,
  zIndex: 10000,
  width: "100vw",
  height: "100vh",
  display: "flex",
  position: "fixed",
  marginTop: "auto",
  alignItems: "center",
  marginBottom: "auto",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "common.white"
};

const Loader = () => (
  <div style={loaderStyles}>
    <CircularProgress />
  </div>
);

export default Loader;
