// external imports
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid } from "@mui/material";

// internal imports
import FieldHandler from "./FieldHandler";
import FormNavigation from "./FormNavigation";

const Form = ({ formData, onSubmit, formGridStyles = {} }) => {
  let formOptions = {};
  if (formData.validationSchema) {
    const schema = yup.object().shape(formData.validationSchema);
    formOptions = {
      resolver: yupResolver(schema)
    };
  }

  const { control, handleSubmit } = useForm(formOptions);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={formGridStyles}>
        <Grid container justifyContent="space-between" spacing={3}>
          {formData.fields.map((field) => (
            <Grid item key={field.id} sm={field.type === "dateRange" ? 6 : 12}>
              <FieldHandler fieldProps={field} control={control} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <FormNavigation {...formData} />
    </form>
  );
};

export default Form;
