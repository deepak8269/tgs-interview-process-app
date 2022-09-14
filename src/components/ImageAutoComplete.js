// external imports
import React from "react";
import Zoom from "@mui/material/Zoom";
import RemoveIcon from "@mui/icons-material/Remove";
import { Avatar, Chip, Stack, Tooltip } from "@mui/material";

// internal imports
import AdvAutoComplete from "./AdvAutoComplete";

// Multi-Select Image Auto Complete Component

/**
 *
 * @param {String}     label            - Label of the input field
 * @param {object}     error            - Error for this specific component if any
 * @param {Object}     value            - Current selected array of values
 * @param {Array}      options          - Array of object
 *                                        Usage:
 *                                        options = [
 *                                          { id: 1, name: 'React', imageUrl: 'https://.../react-logo.png' },
 *                                          { id: 2, name: 'Redux', imageUrl: 'https://.../redux-logo.png' },
 *                                        ]
 * @param {Function}   onChange         - Helps to set the current selected array of values (Function to handle onChange)
 * @param {String}     fieldSize        - Size of the input field (Default value set in AdvAutoComplete Component) (Indirectly optional field)
 * @param {String}     dataIndex        - Display text field of the data record as the options. (Default: 'label')
 * @param {String}     imageDataIndex   - Display image field of the data record as the selected options.
 *
 */

const styles = {
  stack: {
    display: "flex",
    alignItems: "center"
  },
  chip: {
    "&.MuiChip-root": {
      mb: 3,
      border: "none",
      width: "max-content",
      background: "none"
    },
    "& .MuiChip-avatar": {
      width: 30,
      height: 30
    },
    "& .MuiChip-label": {
      display: "none"
    },
    "& .MuiChip-deleteIcon": {
      display: "none"
    },
    "&:hover": {
      "& .MuiChip-deleteIcon": {
        left: "50%",
        fontSize: 28,
        display: "block",
        m: "0 5px 0 -9px",
        borderRadius: "50%",
        position: "absolute",
        color: "common.white",
        backgroundColor: "action.disabled"
      },
      "& .MuiChip-deleteIcon:hover": {
        color: "common.white"
      }
    }
  },
  avatarPlaceholder: (theme) => ({
    width: 30,
    height: 30,
    ml: `${theme.sizing(14)} !important`,
    mb: `${theme.spacing(3)} !important`
  })
};

const ImageAutoComplete = ({
  label,
  error,
  options,
  onChange,
  fieldSize,
  imageDataIndex,
  value: arr = [],
  dataIndex = "label"
}) => {
  const arrLen = arr.length;

  const handleRemove = (removedItem) => {
    const modifiedArr = arr.filter((item) => item.id !== removedItem.id);
    onChange(modifiedArr);
  };

  const tooltipData = () => {
    const values = arr.map((item, index) => {
      if (arrLen > 3 && index >= 2) return item[dataIndex];
      return null;
    });
    return values.filter((item) => item !== null);
  };

  return (
    <Stack direction="row" spacing={2} sx={styles.stack}>
      <AdvAutoComplete
        multiple
        value={arr}
        error={error}
        label={label}
        limitTags={2}
        disableClearable
        options={options}
        onChange={onChange}
        dataIndex={dataIndex}
        fieldSize={fieldSize}
        renderTags={() => <div />}
      />
      {arr.map((item, index) => {
        if ((arrLen <= 3 && index <= 2) || (arrLen > 3 && index < 2)) {
          return (
            <Chip
              key={item.id}
              sx={styles.chip}
              deleteIcon={<RemoveIcon />}
              onDelete={() => handleRemove(item)}
              avatar={
                <Avatar alt={item[dataIndex]} src={item[imageDataIndex]}>
                  {item[dataIndex][0]}
                </Avatar>
              }
            />
          );
        }
        return null;
      })}
      {arrLen > 3 && (
        <Tooltip TransitionComponent={Zoom} placement="top" title={tooltipData().join(", ")}>
          <Avatar sx={styles.avatarPlaceholder}>&#43;{arrLen - 2}</Avatar>
        </Tooltip>
      )}
    </Stack>
  );
};

export default ImageAutoComplete;
