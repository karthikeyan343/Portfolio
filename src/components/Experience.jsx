import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import VerifiedIcon from '@mui/icons-material/Verified';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;
  const [activeCert, setActiveCert] = useState(null);

  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        backgroundColor: '#0a0e14',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography
            variant="body2"
            sx={{
              color: 'primary.main',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            Career Journey
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 800,
            }}
          >
            <span className="text-gradient">Internship Experience</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '620px',
              mx: 'auto',
              mt: 1.5,
              fontSize: '0.95rem',
            }}
          >
            Hands-on professional experience translating designs into live web applications, developing RESTful APIs, and collaborating with development teams.
          </Typography>
        </Box>

        {/* Experience Cards */}
        <Grid container spacing={3.5}>
          {experience.map((exp, idx) => (
            <Grid item xs={12} md={6} key={exp.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: '#131b26',
                  borderRadius: 3.5,
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: exp.type === 'Onsite' ? 'rgba(26, 229, 183, 0.45)' : 'rgba(168, 85, 247, 0.45)',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(26, 229, 183, 0.1)',
                  },
                }}
              >
                {/* Header Banner */}
                <Box
                  sx={{
                    p: 3,
                    pb: 2,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    background:
                      exp.type === 'Onsite'
                        ? 'linear-gradient(90deg, rgba(26, 229, 183, 0.08) 0%, rgba(56, 189, 248, 0.04) 100%)'
                        : 'linear-gradient(90deg, rgba(168, 85, 247, 0.08) 0%, rgba(26, 229, 183, 0.04) 100%)',
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1 }}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: '10px',
                          bgcolor: exp.type === 'Onsite' ? 'rgba(26, 229, 183, 0.15)' : 'rgba(168, 85, 247, 0.15)',
                          color: exp.type === 'Onsite' ? 'primary.main' : '#c084fc',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <BusinessIcon sx={{ fontSize: '1.4rem' }} />
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 700, fontSize: '1.2rem', color: '#ffffff' }}>
                          {exp.role}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: exp.type === 'Onsite' ? 'primary.light' : '#c084fc',
                            fontWeight: 600,
                          }}
                        >
                          {exp.company}
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack direction="row" spacing={1}>
                      <Chip
                        label={exp.type}
                        size="small"
                        sx={{
                          fontSize: '0.72rem',
                          height: 24,
                          bgcolor: exp.type === 'Onsite' ? 'rgba(26, 229, 183, 0.15)' : 'rgba(168, 85, 247, 0.15)',
                          color: exp.type === 'Onsite' ? '#1ae5b7' : '#c084fc',
                          fontWeight: 600,
                          border: '1px solid',
                          borderColor: exp.type === 'Onsite' ? 'rgba(26, 229, 183, 0.3)' : 'rgba(168, 85, 247, 0.3)',
                        }}
                      />
                    </Stack>
                  </Box>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1.5, flexWrap: 'wrap', gap: 1 }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.78rem',
                      }}
                    >
                      📅 {exp.period} &bull; ({exp.duration})
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        fontSize: '0.78rem',
                      }}
                    >
                      📍 {exp.location}
                    </Typography>
                  </Box>
                </Box>

                {/* Content Body */}
                <CardContent sx={{ p: 3, pt: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Responsibilities list */}
                  <Stack spacing={1.5} sx={{ mb: 3 }}>
                    {exp.points.map((point, pIdx) => (
                      <Stack direction="row" spacing={1.2} alignItems="flex-start" key={pIdx}>
                        <CheckCircleOutlineIcon
                          sx={{
                            color: exp.type === 'Onsite' ? 'primary.main' : '#c084fc',
                            fontSize: '1.05rem',
                            mt: 0.3,
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', lineHeight: 1.6 }}>
                          {point}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  {/* Skills badges */}
                  <Box sx={{ mt: 'auto' }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 600,
                        fontSize: '0.72rem',
                        display: 'block',
                        mb: 1,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Technologies Practiced:
                    </Typography>
                    <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap sx={{ mb: 2.5 }}>
                      {exp.skills.map((s) => (
                        <Chip
                          key={s}
                          label={s}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(35, 43, 54, 0.7)',
                            color: 'text.primary',
                            fontSize: '0.72rem',
                            height: 22,
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                          }}
                        />
                      ))}
                    </Stack>

                    {/* Certificate Action */}
                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<VerifiedIcon />}
                      endIcon={<LaunchIcon sx={{ fontSize: '0.9rem !important' }} />}
                      onClick={() => setActiveCert(exp)}
                      sx={{
                        borderColor: exp.type === 'Onsite' ? 'rgba(26, 229, 183, 0.35)' : 'rgba(168, 85, 247, 0.35)',
                        color: exp.type === 'Onsite' ? 'primary.light' : '#c084fc',
                        py: 0.9,
                        '&:hover': {
                          borderColor: exp.type === 'Onsite' ? 'primary.main' : '#c084fc',
                          bgcolor: exp.type === 'Onsite' ? 'rgba(26, 229, 183, 0.08)' : 'rgba(168, 85, 247, 0.08)',
                        },
                      }}
                    >
                      View Internship Certificate
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Certificate Viewer Modal */}
      <Dialog
        open={Boolean(activeCert)}
        onClose={() => setActiveCert(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: '#141c26',
            borderRadius: 3,
            border: '1px solid rgba(26, 229, 183, 0.3)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85)',
          },
        }}
      >
        {activeCert && (
          <>
            <DialogTitle
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                py: 1.5,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {activeCert.company} — Certificate of Internship
              </Typography>
              <IconButton size="small" onClick={() => setActiveCert(null)} sx={{ color: 'text.secondary' }}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 2, height: '70vh', display: 'flex', flexDirection: 'column' }}>
              <Box
                component="iframe"
                src={`${activeCert.certificate}#toolbar=0`}
                title={`${activeCert.company} Certificate`}
                sx={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: 2,
                  bgcolor: '#ffffff',
                }}
              />
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1.5 }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={activeCert.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LaunchIcon />}
                >
                  Open Certificate Fullscreen
                </Button>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
