import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export default makeStyles(() => ({
  paper: {
    marginTop: useTheme().spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: useTheme().spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: useTheme().spacing(1),
    },
  },
  avatar: {
    margin: useTheme().spacing(1),
    // backgroundColor: "green",
  },
  form: {
    width: "100%",
    marginTop: useTheme().spacing(3),
  },
  submit: {
    margin: "24px 0px 16px !important",
  },
}));
