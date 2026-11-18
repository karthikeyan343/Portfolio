import React from 'react';
import { Card, Box, Typography } from '@mui/material';

export default function AchievementCard({ item, icon }) {
  return (
    <Card
      sx={{
        p: 2.4,
        width: '100%',
        height: '100%',
        bgcolor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        boxShadow: '0 8px 25px -4px rgba(15, 23, 42, 0.08), 0 3px 8px -2px rgba(15, 23, 42, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.25s ease',
        '&:hover': {
          borderColor: '#2563eb',
          transform: 'translateY(-3px)',
          boxShadow: '0 16px 35px -6px rgba(37, 99, 235, 0.16), 0 6px 12px -3px rgba(15, 23, 42, 0.06)',
        },
      }}
    >
      <Box
        sx={{
          width: 38,
          height: 38,
          borderRadius: '10px',
          bgcolor: 'rgba(37, 99, 235, 0.08)',
          color: 'primary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 1.5,
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>

      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 700,
          color: '#0f172a',
          mb: 0.8,
          lineHeight: 1.35,
          fontSize: '0.92rem',
        }}
      >
        {item.title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: '#475569',
          fontSize: '0.8rem',
          lineHeight: 1.55,
          mt: 'auto',
        }}
      >
        {item.description}
      </Typography>
    </Card>
  );
}
