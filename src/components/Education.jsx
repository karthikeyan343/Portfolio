import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education, achievements } = portfolioData;

  return (
    <Box
      id="education"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        backgroundColor: '#0e131b',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 7 } }}>
          <Typography
            variant="body2"
            sx={{
              color: 'primary.main',
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            My Journey
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 800,
            }}
          >
            <span className="text-gradient">Education & Achievements</span>
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Education Column */}
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  bgcolor: 'rgba(26, 229, 183, 0.12)',
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SchoolIcon sx={{ fontSize: '1.25rem' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#ffffff' }}>
                Education
              </Typography>
            </Stack>

            {/* Timeline */}
            <Box
              sx={{
                position: 'relative',
                pl: 3.5,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '10px',
                  top: '10px',
                  bottom: '10px',
                  width: '2px',
                  background: 'linear-gradient(180deg, #1ae5b7 0%, rgba(26, 229, 183, 0.1) 100%)',
                },
              }}
            >
              {education.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    position: 'relative',
                    mb: 3.5,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: '-23px',
                      top: '6px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      bgcolor: '#0e131b',
                      border: '2px solid #1ae5b7',
                      boxShadow: '0 0 8px #1ae5b7',
                    },
                  }}
                >
                  <Card
                    sx={{
                      p: 2.2,
                      bgcolor: 'rgba(20, 28, 38, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        borderColor: 'rgba(26, 229, 183, 0.3)',
                        bgcolor: 'rgba(20, 28, 38, 0.9)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1 }}>
                      <Typography variant="h6" sx={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                        {item.degree}
                      </Typography>
                      <Chip
                        label={item.period}
                        size="small"
                        sx={{
                          height: 22,
                          fontSize: '0.7rem',
                          bgcolor: 'rgba(255, 255, 255, 0.05)',
                          color: 'text.secondary',
                        }}
                      />
                    </Box>

                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5, mb: 1 }}>
                      {item.institution}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        color: 'primary.main',
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 600,
                        fontSize: '0.8rem',
                      }}
                    >
                      {item.score}
                    </Typography>
                  </Card>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Achievements Column */}
          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  bgcolor: 'rgba(168, 85, 247, 0.15)',
                  color: '#c084fc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <EmojiEventsIcon sx={{ fontSize: '1.25rem' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#ffffff' }}>
                Key Achievements
              </Typography>
            </Stack>

            <Stack spacing={2}>
              {achievements.map((item, idx) => (
                <Card
                  key={idx}
                  sx={{
                    p: 2.2,
                    bgcolor: 'rgba(20, 28, 38, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      borderColor: 'rgba(168, 85, 247, 0.35)',
                      transform: 'translateX(4px)',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                    },
                  }}
                >
                  <Stack direction="row" spacing={1.5} alignItems="flex-start">
                    <StarIcon sx={{ color: 'primary.main', fontSize: '1.2rem', mt: 0.3, flexShrink: 0 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#ffffff', mb: 0.5 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

