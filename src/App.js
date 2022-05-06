import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
import collection from "./images/collection-icon.png";

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar
        className={styles.appBar}
        display="flex"
        direction="row"
        position="static"
        color="inherit"
      >
        <img className={styles.image} src={collection} alt="collection" />
        <Typography className={styles.heading} variant="h2" align="center">
          Collecting!
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            className={styles.mainContainer}
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
