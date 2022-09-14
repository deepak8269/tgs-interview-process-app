import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: theme.spacing(3),
  borderRadius: 5
}));

export default BorderLinearProgress;
