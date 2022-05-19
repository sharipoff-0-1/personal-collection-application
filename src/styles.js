import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 10,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row !important",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
    padding: "10px",
  },
  image: {
    marginLeft: "15px",
    width: "60px",
  },
}));
