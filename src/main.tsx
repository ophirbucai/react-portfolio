import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import AppRouter from './AppRouter.tsx';
import AppLayout from "./AppLayout.tsx";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./lib/constants";
import './index.css';

ReactDOM.createRoot(document.body!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <AppLayout>
          <AppRouter/>
        </AppLayout>
      </HashRouter>
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>,
)
