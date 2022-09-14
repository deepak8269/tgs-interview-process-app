/* eslint-disable no-unused-vars */
import * as yup from "yup";

import list from "./mockAutoCompleteOptions";

const formData = {
  isPrimaryButtonVisible: true,
  isSecondaryButtonVisible: true,
  primaryButtonText: "Save and Next",
  secondaryButtonText: "Back",
  // onPrimaryButtonClick: () => { // primary button click handler },
  // onSecondaryButtonClick: () => { // secondary button click handler },
  fields: [
    // Form data for Text Field
    {
      id: "firstName",
      label: "First Name",
      type: "string"
    },
    // Form data for Text Field with default value
    {
      id: "lastName",
      label: "Last Name",
      type: "string",
      defaultValue: "Ram"
    },
    // Form data for Email Field
    {
      id: "email",
      label: "Email",
      type: "email"
    },
    // Form data for Simple AutoComplete
    {
      id: "tech",
      label: "Tech",
      type: "autoComplete",
      options: list
    },
    // Form data for AutoComplete with enabled free text
    // Free text means user can type any text
    {
      id: "techAllowNew",
      label: "TechAllowNew",
      type: "autoComplete",
      allowNew: true,
      options: list
    },
    // Form data for Multi-valued AutoComplete
    {
      id: "techMulti",
      label: "TechMulti",
      type: "autoComplete",
      multiple: true,
      options: list
    },
    // Form data for Multi-valued AutoComplete with enabled free text
    {
      id: "techMultiAllowNew",
      label: "TechMultiAllowNew",
      type: "autoComplete",
      multiple: true,
      allowNew: true,
      options: list
    },
    // Form data for AutoComplete with default value
    {
      id: "techDefault",
      label: "TechDefault",
      type: "autoComplete",
      options: list,
      defaultValue: list[0]
    },
    // Form data for Multi-valued AutoComplete with default value(s)
    {
      id: "techMultiDefault",
      label: "TechMultiDefault",
      type: "autoComplete",
      multiple: true,
      options: list,
      defaultValue: [list[0], list[1]]
    },
    // Form data for ImageAutoComplete
    {
      id: "imageTech",
      label: "TechImage",
      type: "imageAutoComplete",
      options: list,
      imageDataIndex: "image"
    }
  ],
  validationSchema: {
    firstName: yup.string().required("First Name is Required"),
    lastName: yup.string().required("Last Name is Required"),
    email: yup.string().email("Must be a valid email").max(255).required("Email is required"),
    tech: yup.object().required("Tech is required").nullable(),
    techAllowNew: yup.object().required("TechAllowNew is required").nullable(),
    techMulti: yup
      .array()
      .required("TechMulti is required")
      .min(1, "Minimum one item should be selected"),
    techMultiAllowNew: yup
      .array()
      .required("TechMultiAllowNew is required")
      .min(1, "Minimum one item should be selected"),
    imageTech: yup
      .array()
      .required("TechImage is required")
      .min(1, "Minimum one item should be selected")
  }
};
