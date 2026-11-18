import React from 'react';
import { Box, Button } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function NavLinks({ navItems, activeSection, onNavClick }) {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
      {navItems.map((item) => {
        const isActive = activeSection === item.href.replace('#', '');
        return (
          <Button
            key={item.label}
            onClick={() => onNavClick(item.href)}
            sx={{
              color: isActive ? 'primary.main' : 'text.secondary',
              fontWeight: isActive ? 700 : 500,
              fontSize: '0.88rem',
              px: 1.8,
              py: 0.8,
              borderRadius: '8px',
              backgroundColor: isActive ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
              transition: 'all 0.2s ease',
              '&:hover': {
                color: 'primary.main',
                backgroundColor: isActive ? 'rgba(37, 99, 235, 0.12)' : 'rgba(37, 99, 235, 0.06)',
              },
            }}
          >
            {item.label}
          </Button>
        );
      })}

      {/* Resume Button */}
      <Button
        variant="outlined"
        color="primary"
        size="small"
        href="/asset/Karthikeyan_S_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<FileDownloadOutlinedIcon sx={{ fontSize: '1rem !important' }} />}
        sx={{
          ml: 1.5,
          borderColor: 'rgba(37, 99, 235, 0.35)',
          color: 'primary.main',
          fontWeight: 600,
          '&:hover': {
            borderColor: 'primary.main',
            backgroundColor: 'rgba(37, 99, 235, 0.06)',
            boxShadow: '0 2px 10px rgba(37, 99, 235, 0.15)',
          },
        }}
      >
        Resume
      </Button>

      {/* Hire Me CTA Button */}
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => onNavClick('#contact')}
        startIcon={<EmailOutlinedIcon sx={{ fontSize: '1rem !important' }} />}
        sx={{
          ml: 1,
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
          '&:hover': {
            boxShadow: '0 6px 18px rgba(37, 99, 235, 0.35)',
          },
        }}
      >
        Hire Me
      </Button>
    </Box>
  );
}
