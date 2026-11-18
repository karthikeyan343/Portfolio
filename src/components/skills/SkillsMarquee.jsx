import React from 'react';
import { Box, Typography } from '@mui/material';

export default function SkillsMarquee({ items }) {
  // Doubled for seamless loop
  const marqueeItems = [...items, ...items];

  return (
    <Box
      sx={{
        mb: { xs: 3.5, sm: 4, md: 4.5 },
        py: 1.5,
        px: 0,
        borderRadius: '16px',
        background: '#f8fafc',
        border: '1px solid #e2e8f0',
        boxShadow: '0 8px 25px -4px rgba(15, 23, 42, 0.07), 0 3px 8px -2px rgba(15, 23, 42, 0.04)',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: { xs: '40px', sm: '80px' },
          zIndex: 2,
          pointerEvents: 'none',
        },
        '&::before': {
          left: 0,
          background: 'linear-gradient(to right, #f8fafc 30%, transparent 100%)',
        },
        '&::after': {
          right: 0,
          background: 'linear-gradient(to left, #f8fafc 30%, transparent 100%)',
        },
      }}
    >
      <Box
        className="animate-marquee"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          width: 'max-content',
          alignItems: 'center',
        }}
      >
        {marqueeItems.map((item, idx) => (
          <Box
            key={`${item.name}-${idx}`}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              flexShrink: 0,
              gap: 1.2,
              px: 2.2,
              py: 0.8,
              mx: 0.8,
              borderRadius: '12px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
              whiteSpace: 'nowrap',
              transition: 'all 0.25s ease',
              '&:hover': {
                background: 'rgba(37, 99, 235, 0.04)',
                borderColor: 'primary.main',
              },
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: item.color || '#2563eb',
                boxShadow: `0 0 8px ${item.color || '#2563eb'}`,
              }}
            />
            <Typography
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#0f172a',
              }}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
