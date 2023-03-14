import * as React from 'react';
import { useState, useContext, useEffect } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import AppBar from '@mui/material/AppBar';

import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import MyCard from '../components/myCards';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();

export default function Homepage() {
  const { state, dispatch } = useContext(Context);
    const {user} = state;
    const router = useRouter();
    useEffect(()=>{
        if(user===null) router.push("/login");
      },[user])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <marquee> <strong>All   NEW   JPP-   LMS -   PORTAL ...   A   stop   solution   for   all   your   academic   needs   (100% results)   Towards   student's   satisfaction</strong>   </marquee>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <MyCard/>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'text.disabled', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          All the best
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.primary"
          component="p"
        >
          Made by JPP-intern 2023 ©
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}