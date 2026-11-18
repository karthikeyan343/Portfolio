import React from 'react';
import { Box, Typography, Stack, Chip } from '@mui/material';

export default function SkillCategoryCard({
  categoryBadge,
  title,
  subtitle,
  icon,
  skills,
}) {
  return (
    <Box
      sx={{
        p: { xs: 3, md: 3.5 },
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: '0 20px 40px -8px rgba(37, 99, 235, 0.16), 0 8px 16px -4px rgba(15, 23, 42, 0.06)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: '12px',
              bgcolor: 'rgba(37, 99, 235, 0.08)',
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {icon}
          </Box>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', fontSize: '1.25rem', lineHeight: 1.2 }}>
              {title}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.78rem' }}>
              {subtitle}
            </Typography>
          </Box>
        </Box>
        <Chip
          label={categoryBadge}
          size="small"
          sx={{
            bgcolor: 'rgba(37, 99, 235, 0.06)',
            color: 'primary.main',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: '0.68rem',
            border: '1px solid rgba(37, 99, 235, 0.2)',
          }}
        />
      </Box>

      {/* Skill items stack */}
      <Stack spacing={1.5} sx={{ mt: 'auto' }}>
        {skills.map((s) => (
          <Box
            key={s.name}
            sx={{
              p: 1.4,
              borderRadius: '12px',
              bgcolor: '#f8fafc',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: '#ffffff',
                borderColor: 'primary.main',
                transform: 'translateX(3px)',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.08)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '8px',
                  bgcolor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: s.color || '#2563eb',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                }}
              >
                {s.badge}
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.86rem', color: '#0f172a', lineHeight: 1.2 }}>
                  {s.name}
                </Typography>
                <Typography sx={{ fontSize: '0.72rem', color: '#64748b', mt: 0.2 }}>
                  {s.role}
                </Typography>
              </Box>
            </Box>

            <Chip
              label={s.tier}
              size="small"
              sx={{
                height: 20,
                fontSize: '0.66rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                bgcolor:
                  s.tier === 'Core Stack'
                    ? 'rgba(37, 99, 235, 0.08)'
                    : s.tier === 'Advanced'
                    ? 'rgba(16, 185, 129, 0.08)'
                    : '#f1f5f9',
                color:
                  s.tier === 'Core Stack'
                    ? 'primary.main'
                    : s.tier === 'Advanced'
                    ? '#059669'
                    : '#475569',
                border: '1px solid',
                borderColor:
                  s.tier === 'Core Stack'
                    ? 'rgba(37, 99, 235, 0.2)'
                    : s.tier === 'Advanced'
                    ? 'rgba(16, 185, 129, 0.2)'
                    : '#e2e8f0',
              }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
