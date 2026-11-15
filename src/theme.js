import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff', // Clean Crisp White
      paper: '#ffffff',   // Clean Crisp White Cards
    },
    primary: {
      main: '#2563eb', // Electric Sapphire Blue
      light: '#38bdf8', // Crisp Sky / Ice Blue
      dark: '#1d4ed8', // Deep Sapphire Blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0f172a', // Deep Slate / Black
      light: '#334155',
      dark: '#020617',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#0284c7',
      light: '#38bdf8',
      dark: '#0369a1',
    },
    text: {
      primary: '#0f172a', // High-Contrast Charcoal Black
      secondary: '#475569', // Clean Slate Gray
    },
    divider: 'rgba(15, 23, 42, 0.08)',
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 800,
      letterSpacing: '-0.035em',
      color: '#0f172a',
    },
    h2: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 800,
      letterSpacing: '-0.03em',
      color: '#0f172a',
    },
    h3: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: '#0f172a',
    },
    h4: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: '#0f172a',
    },
    h5: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.015em',
      color: '#0f172a',
    },
    h6: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: '#0f172a',
    },
    subtitle1: {
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      letterSpacing: '-0.01em',
      lineHeight: 1.6,
    },
    subtitle2: {
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      letterSpacing: '-0.005em',
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      lineHeight: 1.7,
      color: '#475569',
      letterSpacing: '-0.01em',
    },
    body2: {
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      lineHeight: 1.6,
      color: '#475569',
      letterSpacing: '-0.005em',
    },
    button: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 600,
      letterSpacing: '0.01em',
      textTransform: 'none',
    },
    mono: {
      fontFamily: "'JetBrains Mono', monospace",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        root: {
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          '@media (min-width: 600px)': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@media (min-width: 900px)': {
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
          },
          '@media (min-width: 1200px)': {
            paddingLeft: '3rem',
            paddingRight: '3rem',
          },
        },
        maxWidthLg: {
          '@media (min-width: 1200px)': {
            maxWidth: '1440px !important',
          },
        },
        maxWidthXl: {
          '@media (min-width: 1200px)': {
            maxWidth: '1440px !important',
          },
          '@media (min-width: 1440px)': {
            maxWidth: '1540px !important',
          },
          '@media (min-width: 1600px)': {
            maxWidth: '1640px !important',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 10,
          transition: 'all 0.25s ease-in-out',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          backgroundImage: 'none',
          borderRadius: 16,
          border: '1px solid #e2e8f0',
          boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 600,
          fontSize: '0.75rem',
          borderRadius: 999,
        },
      },
    },
  },
});
