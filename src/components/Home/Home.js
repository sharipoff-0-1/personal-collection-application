import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Grow, Grid, Paper } from "@mui/material";
import useStyles from "../../styles";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Pagination from "../Pagination/Pagination";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const styles = useStyles();
  const query = useQuery();
  const page = query.get("page") || 1;

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          className={styles.gridContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={3} className={styles.pagination}>
              <Pagination page={page} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
