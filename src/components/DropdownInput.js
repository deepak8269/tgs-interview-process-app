import React from "react";
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from "@mui/material";

const DropdownInput = ({ id, label, value, options, error, onChange, fieldSize = "100%" }) => (
  <FormControl sx={{ width: fieldSize, mb: 3 }} error={!!error}>
    <InputLabel id={id}>{label}</InputLabel>
    <Select labelId={id} value={value || ""} label={label} onChange={onChange}>
      {options.map((option) => (
        <MenuItem key={option.value.toString()} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
    <FormHelperText>{error ? error.message : null}</FormHelperText>
  </FormControl>
);

export default DropdownInput;
