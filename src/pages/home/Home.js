import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
// import { useNavigateUtil } from "../../utils/useNavigateUtil";
import Animate from "../../components/Animated";
import Header from "../../components/header";
import Form from "../../components/formHandler/Form";
import candidateFormConfig from "./candidateFormConfig";

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
    // navigate(loggedIn ? "/welcome" : "/login");
    setShowForm(true);
  };

  return (
    <Animate>
      <Container>
        <Grid container direction="column">
          <Header fullHeader />
          <Grid item alignSelf="center">
            <Typography variant="h4">Welcome to Team Geek Solutions</Typography>
          </Grid>
        </Grid>
      </Container>
      <button onClick={onBtnClick} type="button">
        Add new candidate
      </button>
      {showForm && (
        <Grid sx={styles.formContainer}>
          <Form
            onSubmit={(aa) => {
              // eslint-disable-next-line no-console
              console.log(aa);
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
