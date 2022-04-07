import React, { useState, useEffect, useCallback } from "react";
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import AppCard from "./AppCard";
import { CssBaseline, Grid, Container } from "@mui/material";
import AppPagination from "./AppPagination";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import "./App.css";
import { Outlet } from "react-router-dom";
import apiService from "../app/apiService";
import CircularProgress from "@mui/material/CircularProgress";

function AppLayout() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const boxPerPage = 5;
  const numberOfPage = Math.ceil(5495 / boxPerPage);

  const [search, setSearch] = useState("");

  const callback = useCallback((urlQuery) => {
    setSearch(urlQuery);
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await apiService.get(
          `/jobs?_page=${page}&_limit=${boxPerPage}${search}`
        );
        setJobs(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, [page, search]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PrimarySearchAppBar onSubmit={callback} />
      <Outlet />
      {loading ? (
        <CircularProgress m="auto" />
      ) : (
        <Container maxWidth="lg" m="auto">
          <Grid container spacing={2} m={4} justifyContent="flex-start">
            {jobs.map((e) => (
              <Grid item xs={9} md={5} lg={4} marginTop={3} key={e.id}>
                <AppCard e={e} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}

      <AppPagination setPage={setPage} numberOfPage={numberOfPage} />
    </ThemeProvider>
  );
}

export default AppLayout;
