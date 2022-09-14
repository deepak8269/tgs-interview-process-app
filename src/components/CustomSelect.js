import React, { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Box, TextField } from "@mui/material";

const styles = {
  button: (theme) => ({
    minWidth: `${theme.spacing(5)} !important`
  }),
  select: {
    height: "auto",
    maxHeight: "200px",
    overflow: "scroll",
    p: 0
  }
};

export default function CustomSelect({
  onSelect,
  fieldName,
  value = 0,
  options = [],
  dataIndex = ""
}) {
  const [selectedVal, setSelectedVal] = React.useState(value);

  useEffect(() => {
    setSelectedVal(value);
  }, [value]);

  const handleSelect = (e) => {
    setSelectedVal(e.target.value);
    if (onSelect) onSelect(e.target.value);
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "15ch" }
      }}
      title={selectedVal}
      component="form"
      noValidate
      autoComplete="off">
      <TextField
        select
        label={fieldName}
        value={selectedVal}
        onChange={handleSelect}
        SelectProps={{
          size: "small",
          variant: "outlined",
          MenuProps: {
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },
            MenuListProps: {
              disablePadding: true,
              sx: styles.select
            }
          },
          sx: styles.select
        }}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {dataIndex === "experience" && option === 15.5 ? "15+" : option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
