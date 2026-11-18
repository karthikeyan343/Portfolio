import React from 'react';
import { Box, Typography, IconButton, Button, Stack, Tooltip } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { portfolioData } from '../../data/portfolioData';

export default function MobileDrawerFooter({ onNavClick }) {
  return (
    <Box
      sx={{
        p: 2.2,
        borderTop: '1px solid #f1f5f9',
        backgroundColor: '#f8fafc',
      }}
    >
      {/* Quick Action Buttons */}
      <Stack spacing={1.2} sx={{ mb: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          href="/asset/Karthikeyan_S_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<FileDownloadOutlinedIcon sx={{ fontSize: '1.1rem' }} />}
          sx={{
            py: 1.1,
            fontSize: '0.9rem',
            fontWeight: 600,
            borderColor: 'rgba(37, 99, 235, 0.35)',
            backgroundColor: '#ffffff',
            '&:hover': {
              borderColor: 'primary.main',
              backgroundColor: 'rgba(37, 99, 235, 0.06)',
            },
          }}
        >
          Download Resume
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => onNavClick('#contact')}
          startIcon={<EmailOutlinedIcon sx={{ fontSize: '1.1rem' }} />}
          sx={{
            py: 1.1,
            fontSize: '0.9rem',
            fontWeight: 600,
            bgcolor: 'primary.main',
            color: '#ffffff',
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
          }}
        >
          Get in Touch
        </Button>
      </Stack>

      {/* Social Row */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1.5 }}>
        <Tooltip title="GitHub" arrow>
          <IconButton
            component="a"
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              width: 36,
              height: 36,
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              color: '#334155',
              '&:hover': {
                color: '#0f172a',
                borderColor: '#94a3b8',
                backgroundColor: '#f1f5f9',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <GitHubIcon sx={{ fontSize: '1.05rem' }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn" arrow>
          <IconButton
            component="a"
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              width: 36,
              height: 36,
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              color: '#0284c7',
              '&:hover': {
                color: '#0369a1',
                borderColor: '#38bdf8',
                backgroundColor: 'rgba(2, 132, 199, 0.06)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <LinkedInIcon sx={{ fontSize: '1.1rem' }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="LeetCode" arrow>
          <IconButton
            component="a"
            href={portfolioData.personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              width: 36,
              height: 36,
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              color: '#ea580c',
              '&:hover': {
                color: '#c2410c',
                borderColor: '#fb923c',
                backgroundColor: 'rgba(234, 88, 12, 0.06)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <CodeIcon sx={{ fontSize: '1.15rem' }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Email" arrow>
          <IconButton
            component="a"
            href={`mailto:${portfolioData.personal.email}`}
            size="small"
            sx={{
              width: 36,
              height: 36,
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              color: '#2563eb',
              '&:hover': {
                color: '#1d4ed8',
                borderColor: '#60a5fa',
                backgroundColor: 'rgba(37, 99, 235, 0.06)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            <EmailOutlinedIcon sx={{ fontSize: '1.1rem' }} />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Location Footnote */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
        <LocationOnOutlinedIcon sx={{ fontSize: '0.85rem', color: '#94a3b8' }} />
        <Typography sx={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 500 }}>
          Salem, Tamil Nadu, India
        </Typography>
      </Box>
    </Box>
  );
}
