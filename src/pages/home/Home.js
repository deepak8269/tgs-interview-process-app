import React, { useState } from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import Animate from "../../components/Animated";
import Header from "../../components/header";
import Form from "../../components/formHandler/Form";
import candidateFormConfig from "./candidateFormConfig";
// import { Link } from "react-router-dom";
import { NavigationLink } from "../../components/navigationLink/NavigationLink";

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

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const onBtnClick = () => {
    setShowForm(true);
  };

  return (
    <Animate>
      <Container>
        <Grid container direction="column">
          <Header fullHeader />
          <NavigationLink />
          <Grid item alignSelf="center">
            <Typography variant="h4">Welcome to Team Geek Solutions</Typography>
          </Grid>
        </Grid>
      </Container>
      <Button onClick={onBtnClick} variant="contained">
        Add new candidate
      </Button>

      {showForm && (
        <Grid sx={styles.formContainer}>
          <Form
            onSubmit={(value) => {
              // eslint-disable-next-line no-console
              console.log(value);
              setShowForm(false);
            }}
            formGridStyles={styles.form}
            formData={candidateFormConfig}
          />
        </Grid>
      )}
    </Animate>
  );
};
export default Home;
