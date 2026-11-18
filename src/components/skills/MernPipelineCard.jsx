import React from 'react';
import { Box, Grid, Stack, Chip, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { mernStackNodes } from '../../data/skillsData';

export default function MernPipelineCard() {
  const mernTags = [
    'JWT Auth & RBAC',
    'State Management',
    'REST API Design',
    'Async Architecture',
  ];

  return (
    <Box
      sx={{
        p: { xs: 3, md: 4 },
        borderRadius: '24px',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        border: '1px solid #e2e8f0',
        boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'primary.main',
          boxShadow: '0 20px 40px -8px rgba(37, 99, 235, 0.16), 0 8px 16px -4px rgba(15, 23, 42, 0.06)',
        },
      }}
    >
      <Grid container spacing={3} alignItems="center">
        {/* Left column info */}
        <Grid item xs={12} md={5}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
            <Chip
              label="PRIMARY ARCHITECTURE"
              size="small"
              sx={{
                bgcolor: 'rgba(37, 99, 235, 0.08)',
                color: 'primary.main',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: '0.7rem',
              }}
            />
          </Stack>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.6rem', md: '2rem' },
              fontWeight: 800,
              color: '#0f172a',
              mb: 1.5,
            }}
          >
            MERN Full-Stack Pipeline
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.7,
              fontSize: '0.92rem',
              mb: 2.5,
            }}
          >
            Architected around cohesive JavaScript: connecting declarative React component trees with scalable Node.js/Express REST microservices and flexible MongoDB persistence.
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {mernTags.map((tag) => (
              <Box
                key={tag}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.6,
                  px: 1.2,
                  py: 0.4,
                  borderRadius: '8px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                }}
              >
                <CheckCircleOutlineIcon sx={{ fontSize: '0.85rem', color: 'primary.main' }} />
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#334155' }}>
                  {tag}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>

        {/* Right column: Interactive MERN Nodes */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr 1fr' },
              gap: 2,
            }}
          >
            {mernStackNodes.map((tech) => (
              <Box
                key={tech.name}
                sx={{
                  p: 2.2,
                  borderRadius: '16px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                  position: 'relative',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    background: '#ffffff',
                    borderColor: tech.color,
                    boxShadow: `0 8px 24px rgba(0,0,0,0.08), 0 0 16px ${tech.color}22`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    mx: 'auto',
                    mb: 1.2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f8fafc',
                    border: `2px solid ${tech.color}`,
                    boxShadow: `0 0 12px ${tech.color}33`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: '1.2rem',
                      color: tech.color,
                    }}
                  >
                    {tech.letter}
                  </Typography>
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a', mb: 0.4 }}>
                  {tech.name}
                </Typography>
                <Typography sx={{ fontSize: '0.72rem', color: 'primary.main', fontWeight: 600, mb: 0.4 }}>
                  {tech.role}
                </Typography>
                <Typography sx={{ fontSize: '0.68rem', color: '#64748b' }}>
                  {tech.detail}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
