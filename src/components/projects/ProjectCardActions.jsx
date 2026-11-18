import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ProjectCardActions({ project, onOpenArchitecture }) {
  return (
    <Box
      sx={{
        mt: 'auto',
        pt: 1.6,
        borderTop: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 1.2,
      }}
    >
      <Stack direction="row" spacing={1.2} alignItems="center">
        {project.demo && (
          <Button
            size="small"
            variant="contained"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<LaunchIcon sx={{ fontSize: '0.85rem !important' }} />}
            sx={{
              bgcolor: 'primary.main',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.76rem',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              px: 1.5,
              py: 0.5,
              borderRadius: '6px',
              textTransform: 'none',
              boxShadow: '0 3px 10px rgba(37, 99, 235, 0.25)',
              '&:hover': {
                bgcolor: 'primary.dark',
                boxShadow: '0 5px 16px rgba(37, 99, 235, 0.4)',
              },
            }}
          >
            Live Demo
          </Button>
        )}

        <Button
          size="small"
          variant="outlined"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon sx={{ fontSize: '0.9rem !important' }} />}
          sx={{
            borderColor: '#cbd5e1',
            color: '#0f172a',
            fontWeight: 600,
            fontSize: '0.76rem',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            px: 1.3,
            py: 0.5,
            borderRadius: '6px',
            textTransform: 'none',
            '&:hover': {
              borderColor: 'primary.main',
              color: 'primary.main',
              bgcolor: 'rgba(37, 99, 235, 0.06)',
            },
          }}
        >
          Source Code
        </Button>
      </Stack>

      <Button
        size="small"
        variant="text"
        onClick={() => onOpenArchitecture(project)}
        endIcon={<ArrowForwardIcon sx={{ fontSize: '0.88rem !important' }} />}
        sx={{
          color: '#64748b',
          fontSize: '0.75rem',
          fontWeight: 600,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          textTransform: 'none',
          '&:hover': {
            color: 'primary.main',
          },
        }}
      >
        Architecture
      </Button>
    </Box>
  );
}
