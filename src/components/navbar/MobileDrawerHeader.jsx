import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { portfolioData } from '../../data/portfolioData';

export default function MobileDrawerHeader({ onClose }) {
  return (
    <Box sx={{ p: 2.5, pb: 2, borderBottom: '1px solid #f1f5f9' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#ffffff',
              border: '1px solid rgba(15, 23, 42, 0.12)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: '1.2rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              <span className="text-gradient">SK</span>
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a', lineHeight: 1.2 }}>
              {portfolioData.personal.name}
            </Typography>
            <Typography sx={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 500, mt: 0.2 }}>
              MERN Stack Developer
            </Typography>
          </Box>
        </Box>

        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            p: 0.8,
            color: '#64748b',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            '&:hover': {
              color: '#0f172a',
              backgroundColor: '#f1f5f9',
            },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Availability Pill */}
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          px: 1.4,
          py: 0.5,
          borderRadius: '100px',
          backgroundColor: 'rgba(16, 185, 129, 0.08)',
          border: '1px solid rgba(16, 185, 129, 0.22)',
        }}
      >
        <Box
          sx={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            backgroundColor: '#10b981',
            animation: 'pulseStatus 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            '@keyframes pulseStatus': {
              '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)' },
              '70%': { transform: 'scale(1)', boxShadow: '0 0 0 6px rgba(16, 185, 129, 0)' },
              '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(16, 185, 129, 0)' },
            },
          }}
        />
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#059669', letterSpacing: '0.01em' }}>
          Available for Opportunities
        </Typography>
      </Box>
    </Box>
  );
}
