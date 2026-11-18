import React from 'react';
import { Box } from '@mui/material';

export default function ProjectFilterPills({ filter, onFilterChange }) {
  const tabs = [
    { label: 'All Projects', value: 'All' },
    { label: 'Full-Stack MERN', value: 'Full-Stack' },
    { label: 'Frontend Web', value: 'Frontend' },
  ];

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        bgcolor: '#f8fafc',
        p: '4px',
        borderRadius: '10px',
        border: '1px solid #e2e8f0',
        maxWidth: '100%',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        '&::-webkit-scrollbar': { display: 'none' },
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      {tabs.map((tab) => {
        const isSelected = filter === tab.value;
        return (
          <Box
            component="button"
            key={tab.value}
            onClick={() => onFilterChange(tab.value)}
            type="button"
            sx={{
              border: isSelected ? '1px solid rgba(37, 99, 235, 0.25)' : '1px solid transparent',
              bgcolor: isSelected ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
              color: isSelected ? 'primary.main' : '#64748b',
              fontWeight: isSelected ? 700 : 600,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: '0.74rem', sm: '0.78rem' },
              py: '5px',
              px: { xs: 1.3, sm: 1.6 },
              borderRadius: '7px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
              outline: 'none',
              lineHeight: 1.4,
              boxShadow: isSelected ? '0 1px 3px rgba(37, 99, 235, 0.1)' : 'none',
              '&:hover': {
                color: isSelected ? 'primary.main' : '#0f172a',
                bgcolor: isSelected ? 'rgba(37, 99, 235, 0.08)' : 'rgba(15, 23, 42, 0.04)',
              },
            }}
          >
            {tab.label}
          </Box>
        );
      })}
    </Box>
  );
}
