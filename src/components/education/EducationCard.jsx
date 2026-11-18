import React from 'react';
import { Card, Box, Typography, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function EducationCard({ item }) {
  return (
    <Card
      sx={{
        p: 2.2,
        bgcolor: '#ffffff',
        border: '1px solid #e2e8f0',
        boxShadow: '0 8px 25px -4px rgba(15, 23, 42, 0.08), 0 3px 8px -2px rgba(15, 23, 42, 0.05)',
        transition: 'all 0.25s ease',
        minHeight: { xs: 'auto', md: '162px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '&:hover': {
          borderColor: '#2563eb',
          transform: 'translateY(-2px)',
          boxShadow: '0 16px 35px -6px rgba(37, 99, 235, 0.16), 0 6px 12px -3px rgba(15, 23, 42, 0.06)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.8, height: '100%', width: '100%' }}>
        {/* Academic Icon Badge */}
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '12px',
            bgcolor:
              item.badgeType === 'college'
                ? 'rgba(37, 99, 235, 0.08)'
                : item.badgeType === 'hsc'
                ? 'rgba(79, 70, 229, 0.08)'
                : 'rgba(217, 119, 6, 0.08)',
            border: '1px solid',
            borderColor:
              item.badgeType === 'college'
                ? 'rgba(37, 99, 235, 0.2)'
                : item.badgeType === 'hsc'
                ? 'rgba(79, 70, 229, 0.2)'
                : 'rgba(217, 119, 6, 0.2)',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            color:
              item.badgeType === 'college'
                ? '#2563eb'
                : item.badgeType === 'hsc'
                ? '#4f46e5'
                : '#d97706',
            transition: 'all 0.25s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          {item.badgeType === 'college' ? (
            <SchoolIcon sx={{ fontSize: '1.5rem' }} />
          ) : item.badgeType === 'hsc' ? (
            <MenuBookIcon sx={{ fontSize: '1.45rem' }} />
          ) : (
            <WorkspacePremiumIcon sx={{ fontSize: '1.5rem' }} />
          )}
        </Box>

        {/* Content */}
        <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1 }}>
              <Typography variant="h6" sx={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>
                {item.degree}
              </Typography>
              <Chip
                label={item.period}
                size="small"
                sx={{
                  height: 22,
                  fontSize: '0.7rem',
                  bgcolor: 'rgba(37, 99, 235, 0.08)',
                  color: 'primary.main',
                  border: '1px solid rgba(37, 99, 235, 0.2)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600,
                }}
              />
            </Box>

            <Typography variant="body2" sx={{ color: '#475569', mt: 0.4, mb: 0.4, fontWeight: 500 }}>
              {item.institution} &bull; <Box component="span" sx={{ color: '#64748b', fontSize: '0.8rem' }}>{item.affiliation}</Box>
            </Typography>

            <Typography
              variant="caption"
              sx={{
                display: 'block',
                color: '#059669',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                fontSize: '0.75rem',
                mb: 1.2,
              }}
            >
              {item.stream} &bull; {item.grade}
            </Typography>
          </Box>

          {/* Action Footer: Verified Academic Record + Performance Badge */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 1,
              pt: 1.2,
              borderTop: '1px solid #f1f5f9',
            }}
          >
            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.6 }}>
              <CheckCircleIcon sx={{ fontSize: '0.95rem', color: '#16a34a' }} />
              <Typography
                sx={{
                  color: '#16a34a',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600,
                  fontSize: '0.74rem',
                }}
              >
                Verified Academic Record
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.6,
                py: 0.35,
                px: 1.2,
                fontSize: '0.76rem',
                fontWeight: 700,
                borderRadius: '8px',
                borderColor: 'rgba(37, 99, 235, 0.25)',
                border: '1px solid',
                color: 'primary.main',
                bgcolor: 'rgba(37, 99, 235, 0.04)',
                fontFamily: "'JetBrains Mono', monospace",
                height: 28,
                boxSizing: 'border-box',
              }}
            >
              <WorkspacePremiumIcon sx={{ fontSize: '0.88rem', color: 'primary.main' }} />
              {item.score}
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
