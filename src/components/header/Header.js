import React from "react";
import { Grid } from "@mui/material";
import fullLogo from "../../assets/full-header-logo.png";
import partialLogo from "../../assets/partial-header-logo.png";
import { useNavigateUtil } from "../../utils/useNavigateUtil";

const styles = {
  header: {
    display: "flex",
    cursor: "pointer"
  },
  fullHeader: {
    mt: 6
  },
  partialHeader: {
    mt: 2
  }
};

const Header = ({ fullHeader }) => {
  const navigate = useNavigateUtil();

  const onClick = () => {
    navigate("/");
  };

  return (
    <Grid
      sx={{
        ...styles.header,
        ...(fullHeader ? styles.fullHeader : styles.partialHeader)
      }}
      onClick={onClick}>
      <Grid>
        <img src={fullHeader ? fullLogo : partialLogo} alt="logo" width={fullHeader ? 250 : 48} />
      </Grid>
    </Grid>
  );
};

export default Header;
