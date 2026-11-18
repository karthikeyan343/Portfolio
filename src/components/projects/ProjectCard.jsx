import React from 'react';
import { Card, CardContent, Box, Typography, Stack } from '@mui/material';
import ProjectCardHeader from './ProjectCardHeader';
import ProjectCardActions from './ProjectCardActions';

export default function ProjectCard({ project, onOpenArchitecture }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#ffffff',
        borderRadius: { xs: 2.5, md: 3 },
        border: '1px solid #e2e8f0',
        boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
        transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-3px)',
          borderColor: 'primary.main',
          boxShadow: '0 20px 40px -8px rgba(37, 99, 235, 0.16), 0 8px 16px -4px rgba(15, 23, 42, 0.06)',
        },
      }}
    >
      {/* Sleek Top Header Bar (macOS Window style + Status & Category) */}
      <ProjectCardHeader project={project} />

      {/* Project Image Preview Banner */}
      {project.image && (
        <Box
          sx={{
            width: '100%',
            height: { xs: 135, sm: 150, md: 160 },
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid #e2e8f0',
            bgcolor: '#f8fafc',
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
              transition: 'transform 0.35s ease',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
          />
        </Box>
      )}

      {/* Card Content Body */}
      <CardContent
        sx={{
          p: { xs: 2, sm: 2.2 },
          pt: { xs: 1.8, sm: 2 },
          pb: { xs: 1.8, sm: 2 },
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Project Subtitle Domain */}
        <Typography
          variant="caption"
          sx={{
            color: 'primary.main',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontSize: '0.68rem',
            mb: 0.4,
          }}
        >
          {project.subtitle}
        </Typography>

        {/* Project Title */}
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: '1.05rem', sm: '1.12rem', md: '1.18rem' },
            fontWeight: 750,
            color: '#0f172a',
            mb: 0.8,
            lineHeight: 1.3,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            letterSpacing: '-0.01em',
          }}
        >
          {project.title}
        </Typography>

        {/* Concise Description */}
        <Typography
          variant="body2"
          sx={{
            color: '#475569',
            fontSize: '0.80rem',
            lineHeight: 1.55,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            mb: 1.6,
          }}
        >
          {project.description}
        </Typography>

        {/* Key Architectural Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <Box
            sx={{
              mb: 1.6,
              p: 1.3,
              px: 1.5,
              borderRadius: 2,
              bgcolor: '#f8fafc',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              gap: 0.8,
            }}
          >
            {project.highlights.map((highlight, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <Box
                  sx={{
                    width: 15,
                    height: 15,
                    borderRadius: '50%',
                    bgcolor: 'rgba(37, 99, 235, 0.08)',
                    color: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    flexShrink: 0,
                    mt: '2px',
                  }}
                >
                  ✓
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#334155',
                    fontSize: '0.76rem',
                    lineHeight: 1.4,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {highlight}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Tech Stack Tokens */}
        <Stack direction="row" spacing={0.6} flexWrap="wrap" useFlexGap sx={{ mb: 1.8 }}>
          {project.tags.map((tag) => (
            <Box
              key={tag}
              sx={{
                px: 0.9,
                py: 0.25,
                borderRadius: '5px',
                bgcolor: '#f1f5f9',
                border: '1px solid #e2e8f0',
                color: '#475569',
                fontSize: '0.68rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(37, 99, 235, 0.06)',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                },
              }}
            >
              {tag}
            </Box>
          ))}
        </Stack>

        {/* Action Buttons */}
        <ProjectCardActions project={project} onOpenArchitecture={onOpenArchitecture} />
      </CardContent>
    </Card>
  );
}
