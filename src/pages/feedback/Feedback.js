// external imports
import React from "react";
import { useState } from "react";
import { Grid,Container,Button } from "@mui/material";
import Form from "../../components/formHandler/Form";
import feedbackFormConfig from '../home/feebackFormConfig'
import Animate from "../../components/Animated";
import Header from "../../components/header";
import { NavigationLink } from "../../components/navigationLink/NavigationLink";
 
const Feedback = () => {
  const [showFeedbackForm,setShowFeedbackForm]=useState(false);

  const styles = {
    formContainer: {
      mt: (theme) => theme.spacing(10),
      ml: (theme) => theme.spacing(40),
      mr: (theme) => theme.spacing(40)
    },
    form: {
      minHeight: "calc(100vh - 294px)"
    }
  };
  const feedbackBtn=()=>{
    setShowFeedbackForm(true)
  }
  return (
    <Animate>
      <Container>
        <Grid container direction="column">
          <Header fullHeader />
          <NavigationLink/>
        </Grid>
      </Container>
  <Button onClick={feedbackBtn} sx={{marginTop:"1rem"}} variant="contained">
        Add new Feedback
      </Button>
      {showFeedbackForm && (
        <Grid sx={styles.formContainer}>
          <Form
            onSubmit={(value) => {
              console.log(value);
            }}
            formGridStyles={styles.form}
            formData={feedbackFormConfig}
          />
        </Grid>
      )}
    </Animate>
  );
};

export default Feedback;
