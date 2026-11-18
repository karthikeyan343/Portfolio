import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';

export default function ProjectCardHeader({ project }) {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 2.2 },
        py: 1.1,
        borderBottom: '1px solid #e2e8f0',
        background: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* macOS dots + Monospace Repo Slug */}
      <Stack direction="row" spacing={1} alignItems="center">
        <Stack direction="row" spacing={0.6} alignItems="center">
          <Box sx={{ width: 7.5, height: 7.5, borderRadius: '50%', bgcolor: '#ef4444', opacity: 0.85 }} />
          <Box sx={{ width: 7.5, height: 7.5, borderRadius: '50%', bgcolor: '#f59e0b', opacity: 0.85 }} />
          <Box sx={{ width: 7.5, height: 7.5, borderRadius: '50%', bgcolor: '#10b981', opacity: 0.85 }} />
        </Stack>
        <Typography
          variant="caption"
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#64748b',
            fontSize: '0.68rem',
            fontWeight: 500,
            ml: 0.4,
          }}
        >
          karthik/{project.id}
        </Typography>
      </Stack>

      {/* Status Badge & Category */}
      <Stack direction="row" spacing={0.8} alignItems="center">
        {project.demo && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              px: 0.8,
              py: 0.2,
              borderRadius: '5px',
              bgcolor: 'rgba(37, 99, 235, 0.08)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
            }}
          >
            <Box
              sx={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                boxShadow: '0 0 5px rgba(37, 99, 235, 0.4)',
              }}
            />
            <Typography
              variant="caption"
              sx={{
                color: 'primary.main',
                fontSize: '0.62rem',
                fontWeight: 750,
                letterSpacing: '0.04em',
              }}
            >
              LIVE
            </Typography>
          </Box>
        )}

        <Chip
          label={project.category}
          size="small"
          sx={{
            fontSize: '0.65rem',
            height: 20,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            bgcolor:
              project.category === 'Full-Stack'
                ? 'rgba(37, 99, 235, 0.08)'
                : 'rgba(2, 132, 199, 0.08)',
            color: project.category === 'Full-Stack' ? 'primary.main' : '#0284c7',
            border: '1px solid',
            borderColor:
              project.category === 'Full-Stack'
                ? 'rgba(37, 99, 235, 0.25)'
                : 'rgba(2, 132, 199, 0.25)',
          }}
        />
      </Stack>
    </Box>
  );
}
