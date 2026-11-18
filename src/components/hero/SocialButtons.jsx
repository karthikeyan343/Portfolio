import React from 'react';
import { Button, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';

export default function SocialButtons({ personal, fullWidth = false }) {
  const buttonStyle = {
    px: fullWidth ? 1 : 1.6,
    py: 0.85,
    fontSize: fullWidth ? '0.78rem' : '0.82rem',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    borderRadius: '10px',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent={fullWidth ? 'center' : 'flex-start'}
      sx={{ width: fullWidth ? '100%' : 'auto', maxWidth: fullWidth ? '360px' : 'none' }}
    >
      <Button
        fullWidth={fullWidth}
        variant="contained"
        size="small"
        href={personal.github}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<GitHubIcon sx={{ fontSize: '0.95rem !important', color: '#ffffff !important' }} />}
        sx={{
          ...buttonStyle,
          backgroundColor: '#24292e !important',
          color: '#ffffff !important',
          border: '1px solid #24292e',
          boxShadow: '0 2px 6px -1px rgba(36, 41, 46, 0.35)',
          '&:hover': {
            backgroundColor: '#24292e !important',
            color: '#ffffff !important',
            borderColor: '#24292e',
            boxShadow: '0 8px 22px -2px rgba(36, 41, 46, 0.5)',
            transform: 'translateY(-2.5px)',
          },
        }}
      >
        GitHub
      </Button>

      <Button
        fullWidth={fullWidth}
        variant="contained"
        size="small"
        href={personal.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<LinkedInIcon sx={{ fontSize: '0.95rem !important', color: '#ffffff !important' }} />}
        sx={{
          ...buttonStyle,
          backgroundColor: '#0a66c2 !important',
          color: '#ffffff !important',
          border: '1px solid #0a66c2',
          boxShadow: '0 2px 6px -1px rgba(10, 102, 194, 0.35)',
          '&:hover': {
            backgroundColor: '#0a66c2 !important',
            color: '#ffffff !important',
            borderColor: '#0a66c2',
            boxShadow: '0 8px 22px -2px rgba(10, 102, 194, 0.55)',
            transform: 'translateY(-2.5px)',
          },
        }}
      >
        LinkedIn
      </Button>

      {personal.leetcode && (
        <Button
          fullWidth={fullWidth}
          variant="contained"
          size="small"
          href={personal.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<TerminalIcon sx={{ fontSize: '0.95rem !important', color: '#000000 !important' }} />}
          sx={{
            ...buttonStyle,
            backgroundColor: '#FFA116 !important',
            color: '#000000 !important',
            border: '1px solid #e59012',
            boxShadow: '0 2px 6px -1px rgba(255, 161, 22, 0.4)',
            '&:hover': {
              backgroundColor: '#FFA116 !important',
              color: '#000000 !important',
              borderColor: '#e59012',
              boxShadow: '0 8px 22px -2px rgba(255, 161, 22, 0.6)',
              transform: 'translateY(-2.5px)',
            },
          }}
        >
          LeetCode
        </Button>
      )}
    </Stack>
  );
}
