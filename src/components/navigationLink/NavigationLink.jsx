import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from 'react';
export const NavigationLink = () => {
  return (
    <Grid container direction="row" gap={4}>
      <Link to="/feedback">Show Feedback</Link>
      <Link to="/reports">Reports</Link>
    </Grid>
  );
};
