import React from 'react';
import { Card, Box, Typography, Chip, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function CertificationCard({ cert, onViewCertificate }) {
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
        {/* Authentic Issuer Logo Badge */}
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '12px',
            bgcolor: '#ffffff',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)',
            p: 0.6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.25s ease',
            '&:hover': {
              borderColor: 'primary.main',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.15)',
            },
          }}
        >
          <Box
            component="img"
            src={cert.logo}
            alt={cert.issuer}
            sx={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Content */}
        <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1 }}>
              <Typography variant="h6" sx={{ fontSize: '1.02rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>
                {cert.title}
              </Typography>
              <Chip
                label={cert.period}
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
              {cert.issuer} &bull; <Box component="span" sx={{ color: '#64748b', fontSize: '0.8rem' }}>{cert.institution}</Box>
            </Typography>

            {cert.score && (
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
                {cert.score}
              </Typography>
            )}
          </Box>

          {/* Action Footer: Verified Credential + View Certificate Button */}
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
                Verified Credential
              </Typography>
            </Box>

            <Button
              variant="outlined"
              size="small"
              onClick={() => onViewCertificate(cert)}
              startIcon={<VisibilityIcon sx={{ fontSize: '0.95rem !important' }} />}
              sx={{
                py: 0.4,
                px: 1.4,
                fontSize: '0.78rem',
                fontWeight: 600,
                borderRadius: '8px',
                borderColor: 'rgba(37, 99, 235, 0.35)',
                color: 'primary.main',
                bgcolor: 'rgba(37, 99, 235, 0.04)',
                transition: 'all 0.2s ease',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: 'rgba(37, 99, 235, 0.1)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 3px 10px rgba(37, 99, 235, 0.15)',
                },
              }}
            >
              View Certificate
            </Button>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
