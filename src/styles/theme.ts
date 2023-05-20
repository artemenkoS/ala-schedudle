import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          display: 'flex',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {},
        head: {
          paddingRight: 0,
        },
      },
    },
  },
  palette: {
    background: {
      default: '#f5f5f5',
    },
    primary: { main: '#ff7300', light: '#ffdcc6' },
  },
});
