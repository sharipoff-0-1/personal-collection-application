import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 2,
    margin: "0 0 20px 0",
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
  },
  heading: {
    color: "white",
    textDecoration: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
}));
