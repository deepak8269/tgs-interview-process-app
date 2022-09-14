// external imports
import React from "react";
import { Grid, TextField } from "@mui/material";

const TextInput = ({ label, type, value, error, onChange }) => (
  <Grid mb={3}>
    <TextField
      fullWidth
      type={type}
      label={label}
      value={value}
      error={!!error}
      variant="outlined"
      onChange={onChange}
      InputLabelProps={{ shrink: true }}
      helperText={error ? error.message : null}
    />
  </Grid>
);

export default TextInput;
