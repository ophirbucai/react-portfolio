import createTheme from '@mui/material/styles/createTheme';
import darkScrollbar from '@mui/material/darkScrollbar';
export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...((theme) => theme.palette.mode === "dark" ? { body: darkScrollbar() } : {})
      }
    }
  }
});
