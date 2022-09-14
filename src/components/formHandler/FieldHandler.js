// external imports
import React from "react";

// internal imports
import TextInput from "../TextInput";
import Editor from "../textEditor/Editor";
import DropdownInput from "../DropdownInput";
import FormController from "./FormController";
import DateRangeInput from "../DateRangeInput";
import AdvAutoComplete from "../AdvAutoComplete";
import ImageAutoComplete from "../ImageAutoComplete";
import PhoneNumberInput from "../PhoneNumberInput";

const FieldPicker = ({ fieldProps, ...props }) => {
  switch (fieldProps.type) {
    case "string":
      return <TextInput type="text" {...fieldProps} {...props} />;
    case "number":
      return <TextInput type="number" {...fieldProps} {...props} />;
    case "email":
      return <TextInput type="email" {...fieldProps} {...props} />;
    case "phone":
      return <PhoneNumberInput type="number" {...fieldProps} {...props} />;
    case "dateRange":
      return <DateRangeInput {...fieldProps} {...props} />;
    case "richText":
      return <Editor {...fieldProps} {...props} />;
    case "dropdown":
      return <DropdownInput {...fieldProps} {...props} />;
    case "autoComplete":
      return <AdvAutoComplete fieldSize={fieldProps.size} {...fieldProps} {...props} />;
    case "imageAutoComplete":
      return <ImageAutoComplete fieldSize={fieldProps.size} {...fieldProps} {...props} />;
    default:
      return null;
  }
};

const FieldHandler = ({ fieldProps, control }) => (
  <FormController fieldProps={fieldProps} control={control} ChildComponent={FieldPicker} />
);

export default FieldHandler;
