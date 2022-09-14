// external imports
import React from "react";
import { Controller } from "react-hook-form";

/**
 *
 * @param {object} control        - This object is from involving useForm() of React Hook Form
 * @param {object} fieldProps     - Field related props from the form data
 * @param {object} ChildComponent - Child component is a Field that is to display to the user (ie,. TextField, AutoComplete or any)
 *
 */

const FormController = ({ control, fieldProps, ChildComponent }) => (
  <Controller
    control={control}
    name={fieldProps.id}
    defaultValue={fieldProps.defaultValue}
    render={({ field: { onChange, value, ref, ...props }, fieldState: { error } }) => (
      <ChildComponent
        value={value}
        error={error}
        onChange={onChange}
        fieldProps={fieldProps}
        {...props}
      />
    )}
  />
);

export default FormController;
