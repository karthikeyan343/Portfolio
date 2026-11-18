import React, { useState } from 'react';
import {
  Card,
  Box,
  Typography,
  Stack,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function ContactInfoCards({ personal }) {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    setSnackbarOpen(true);
  };

  const contactMethods = [
    {
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 193" width="22" height="22">
          <path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/>
          <path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/>
          <path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/>
          <path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/>
          <path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/>
        </svg>
      ),
      badgeBg: '#ffffff',
      badgeBorder: '1px solid #e2e8f0',
      badgeShadow: '0 2px 8px rgba(15, 23, 42, 0.06)',
      hoverBorder: '#EA4335',
      hoverShadow: 'rgba(234, 67, 53, 0.16)',
      actionable: true,
    },
    {
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      icon: <PhoneIcon sx={{ fontSize: '1.25rem', color: '#ffffff' }} />,
      badgeBg: '#22c55e',
      badgeBorder: '1px solid #16a34a',
      badgeShadow: '0 2px 8px rgba(34, 197, 94, 0.35)',
      hoverBorder: '#16a34a',
      hoverShadow: 'rgba(34, 197, 94, 0.16)',
      actionable: false,
    },
    {
      label: 'GitHub',
      value: 'github.com/karthikeyan343',
      href: personal.github,
      icon: <GitHubIcon sx={{ fontSize: '1.35rem', color: '#ffffff' }} />,
      badgeBg: '#24292e',
      badgeBorder: '1px solid #24292e',
      badgeShadow: '0 2px 8px rgba(36, 41, 46, 0.35)',
      hoverBorder: '#24292e',
      hoverShadow: 'rgba(36, 41, 46, 0.16)',
      actionable: false,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/karthikeyan-s',
      href: personal.linkedin,
      icon: <LinkedInIcon sx={{ fontSize: '1.35rem', color: '#ffffff' }} />,
      badgeBg: '#0a66c2',
      badgeBorder: '1px solid #0a66c2',
      badgeShadow: '0 2px 8px rgba(10, 102, 194, 0.35)',
      hoverBorder: '#0a66c2',
      hoverShadow: 'rgba(10, 102, 194, 0.16)',
      actionable: false,
      external: true,
    },
  ];

  return (
    <>
      <Stack spacing={2}>
        {contactMethods.map((c, i) => (
          <Card
            key={i}
            component="a"
            href={c.href}
            target={c.external ? '_blank' : undefined}
            rel={c.external ? 'noopener noreferrer' : undefined}
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
              bgcolor: '#ffffff',
              border: '1px solid #e2e8f0',
              boxShadow: '0 8px 25px -4px rgba(15, 23, 42, 0.08), 0 3px 8px -2px rgba(15, 23, 42, 0.05)',
              transition: 'all 0.25s ease',
              '&:hover': {
                borderColor: c.hoverBorder || '#2563eb',
                transform: 'translateY(-3px)',
                boxShadow: `0 16px 35px -6px ${c.hoverShadow || 'rgba(37, 99, 235, 0.16)'}, 0 6px 12px -3px rgba(15, 23, 42, 0.06)`,
              },
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '12px',
                  bgcolor: c.badgeBg || '#ffffff',
                  border: c.badgeBorder || '1px solid #e2e8f0',
                  boxShadow: c.badgeShadow || 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.75rem' }}>
                  {c.label}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 600 }}>
                  {c.value}
                </Typography>
              </Box>
            </Stack>

            {c.actionable && (
              <Tooltip title="Copy Email">
                <IconButton size="small" onClick={handleCopyEmail} sx={{ color: '#64748b', '&:hover': { color: 'primary.main' } }}>
                  <ContentCopyIcon sx={{ fontSize: '1rem' }} />
                </IconButton>
              </Tooltip>
            )}
          </Card>
        ))}
      </Stack>

      {/* Snackbar for copied email */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%', bgcolor: '#ffffff', color: '#0f172a', border: '1px solid #2563eb', boxShadow: '0 8px 30px rgba(15, 23, 42, 0.12)' }}>
          Email copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}
