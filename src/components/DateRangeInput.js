import { FormControl, FormHelperText, TextField } from "@mui/material";
import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const DateRangeInput = ({ id, label, value, error, onChange }) => (
  <FormControl error={!!error}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        name={id}
        label={label}
        inputFormat="MM/DD/YYYY"
        value={value || null}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} sx={{ width: "100%" }} error={!!error} />}
      />
      <FormHelperText>{error ? error.message : null}</FormHelperText>
    </LocalizationProvider>
  </FormControl>
);

export default DateRangeInput;
