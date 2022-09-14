// external imports
import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

// Advanced Auto Complete Component

/**
 *
 * @param {String}       label     - Label of the auto complete field
 * @param {object}       error     - Error for this specific component if any
 * @param {Array}        options   - Array of object
 *                                   Usage:
 *                                   options = [
 *                                     { id: 1, label: 'Label 1' },
 *                                     { id: 2, label: 'Label 2' },
 *                                   ]
 * @param {Boolean}      allowNew  - Set true to allow adding new item if it is not present in the options
 * @param {function}     onChange  - Function to handle change
 * @param {String}       fieldSize - Size of the input field (Default: 300)
 * @param {String/Array} dataIndex - Display field of the data record from the options. (Default: 'label')
 *
 */

const filter = createFilterOptions();

const optionGenerator = (option, dataIndex) => {
  let value = "";
  dataIndex.forEach((item, index) => {
    value += option[item];
    if (index + 1 !== dataIndex.length) value += ", ";
  });
  return value;
};

const arrayChecker = (dataIndex) => {
  if (dataIndex) {
    if (Array.isArray(dataIndex)) {
      if (dataIndex.length > 0) return true;
      return false;
    }
    return false;
  }
  return false;
};

const freeInputValueFormatter = (newValue, options, dataIndex) => {
  let returnValue = { ...newValue };
  if (options && Array.isArray(options)) {
    const len = options.length;
    if (len > 0) {
      returnValue = {
        id: len + 1,
        [dataIndex]: newValue.inputValue
      };
    }
  }
  return returnValue;
};

const AdvAutoComplete = ({
  label,
  error,
  options,
  allowNew,
  onChange,
  fieldSize = "100%",
  size = "small",
  dataIndex = "label",
  noMargin = false,
  ...props
}) => {
  const modifiedOptions = [...options];
  return (
    <Autocomplete
      clearOnBlur
      selectOnFocus
      autoHighlight
      options={options}
      sx={{
        width: fieldSize,
        mb: noMargin ? 0 : 3
      }}
      freeSolo={arrayChecker(dataIndex) ? false : allowNew}
      onChange={(event, newValue) => {
        if (dataIndex && !arrayChecker(dataIndex)) {
          if (typeof newValue === "string") onChange(newValue);
          // Create a new value from the user input
          // Following else if block for AutoComplete with freeSolo
          else if (newValue && newValue.inputValue)
            onChange(freeInputValueFormatter(newValue, options, dataIndex));
          // Following else if block for AutoComplete with multiple values
          else if (props.multiple && Array.isArray(newValue) && newValue.length > 0) {
            const tempNewValue = newValue.map((item) => {
              if (item.inputValue) {
                const newVal = freeInputValueFormatter(item, modifiedOptions, dataIndex);
                modifiedOptions.push(newVal);
                return newVal;
              }
              return item;
            });
            onChange(tempNewValue);
          }
          // Following else block for AutoComplete without freeSolo & multiple
          else onChange(newValue);
        }
      }}
      filterOptions={(currentOptions, state) => {
        const filtered = filter(currentOptions, state);
        if (typeof dataIndex === "string" && allowNew) {
          const { inputValue } = state;
          // Suggest the creation of a new value
          const isExisting = currentOptions.some((option) => inputValue === option[dataIndex]);
          if (inputValue !== "" && !isExisting) {
            filtered.push({
              inputValue,
              [dataIndex]: `Add '${inputValue}'`
            });
          }
        }

        return filtered;
      }}
      getOptionLabel={(option) => {
        // For array of data indices
        if (dataIndex && Array.isArray(dataIndex) && dataIndex.length > 0)
          return optionGenerator(option, dataIndex);

        // Value selected with enter, right from the input
        if (typeof option === "string") return option;

        // Add 'xxx' option created dynamically
        if (option.inputValue) return option.inputValue;

        // Regular option
        return option[dataIndex];
      }}
      size={size}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={!!error}
          helperText={error ? error.message : null}
          size={size}
          style={{ padding: "0px !important" }}
        />
      )}
      {...props}
    />
  );
};

export default AdvAutoComplete;
