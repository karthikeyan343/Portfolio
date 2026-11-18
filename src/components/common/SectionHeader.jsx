import React from 'react';
import { Box, Typography } from '@mui/material';

export default function SectionHeader({
  eyebrow,
  icon,
  title,
  subtitle,
  align = 'left',
  sx = {},
}) {
  const isCenter = align === 'center';

  return (
    <Box
      sx={{
        textAlign: align,
        mb: { xs: 3.5, sm: 4, md: 4.5 },
        ...sx,
      }}
    >
      {eyebrow && (
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.8,
            px: 1.6,
            py: 0.5,
            borderRadius: '100px',
            backgroundColor: 'rgba(37, 99, 235, 0.08)',
            border: '1px solid rgba(37, 99, 235, 0.22)',
            boxShadow: '0 2px 8px -2px rgba(37, 99, 235, 0.15)',
            mb: 1.2,
          }}
        >
          {icon ? (
            icon
          ) : (
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#2563eb' }} />
          )}
          <Typography
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: { xs: '0.74rem', sm: '0.78rem' },
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'primary.main',
              lineHeight: 1,
            }}
          >
            {eyebrow}
          </Typography>
        </Box>
      )}

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '1.75rem', sm: '2.1rem', md: '2.3rem', lg: '2.6rem' },
          fontWeight: 800,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: isCenter ? '650px' : 'none',
            mx: isCenter ? 'auto' : 0,
            fontSize: { xs: '0.82rem', sm: '0.88rem', md: '0.92rem' },
            lineHeight: 1.6,
            mt: 1.2,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
