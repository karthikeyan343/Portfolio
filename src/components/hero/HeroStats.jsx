import React from 'react';
import { Grid, Box, Typography } from '@mui/material';

export default function HeroStats({ stats }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        pt: 2.5,
        borderTop: '1px solid rgba(15, 23, 42, 0.08)',
        maxWidth: '38rem',
        mx: { xs: 'auto', md: 0 },
      }}
    >
      {stats.map((st, i) => (
        <Grid item xs={6} sm={3} key={i}>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.4rem', sm: '1.65rem' },
                color: '#ffffff',
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <span className="text-gradient">{st.value}</span>
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontSize: '0.74rem',
                display: 'block',
                lineHeight: 1.3,
                mt: 0.3,
              }}
            >
              {st.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
