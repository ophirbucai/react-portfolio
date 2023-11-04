import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter.tsx';
import AppLayout from "./AppLayout.tsx";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./lib/constants";
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppLayout>
          <AppRouter/>
        </AppLayout>
      </BrowserRouter>
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>,
)
