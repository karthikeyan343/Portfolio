import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0e131b',
      paper: '#141c26',
    },
    primary: {
      main: '#1ae5b7', // hsl(168, 80%, 50%)
      light: '#5af3cf',
      dark: '#0db892',
      contrastText: '#0e131b',
    },
    secondary: {
      main: '#222b37',
      light: '#2d3748',
      dark: '#171e28',
      contrastText: '#d8e2ec',
    },
    accent: {
      main: '#a855f7',
      light: '#c084fc',
      dark: '#7e22ce',
    },
    text: {
      primary: '#e6edf3',
      secondary: '#8a99a8',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
      fontWeight: 800,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
      fontWeight: 800,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    h5: {
      fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h6: {
      fontFamily: "'Plus Jakarta Sans', 'Manrope', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.005em',
    },
    body1: {
      fontFamily: "'Manrope', sans-serif",
      lineHeight: 1.7,
      letterSpacing: '-0.01em',
    },
    body2: {
      fontFamily: "'Manrope', sans-serif",
      lineHeight: 1.6,
      letterSpacing: '-0.005em',
    },
    mono: {
      fontFamily: "'Fira Code', monospace",
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Manrope', sans-serif",
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 10,
          letterSpacing: '-0.01em',
          transition: 'all 0.25s ease-in-out',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#141c26',
          backgroundImage: 'none',
          borderRadius: 16,
          border: '1px solid rgba(255, 255, 255, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 600,
          fontSize: '0.78rem',
          borderRadius: 999,
        },
      },
    },
  },
});

