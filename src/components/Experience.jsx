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
import VerifiedIcon from '@mui/icons-material/Verified';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ScrollReveal from './ScrollReveal';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;
  const [activeCert, setActiveCert] = useState(null);

  return (
    <Box
      id="experience"
      component="section"
      sx={{
        minHeight: { md: '100vh' },
        display: { md: 'flex' },
        flexDirection: { md: 'column' },
        justifyContent: { md: 'center' },
        py: { xs: 5, sm: 6, md: 4, lg: 5 },
        position: 'relative',
        backgroundColor: '#ffffff',
        boxSizing: 'border-box',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
        {/* Section Title */}
        <ScrollReveal delay={0}>
          <Box sx={{ textAlign: 'center', mb: { xs: 3, sm: 3.5, md: 3.5, lg: 4 } }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.8,
                px: 1.6,
                py: 0.5,
                borderRadius: '100px',
                backgroundColor: 'rgba(37, 99, 235, 0.08)',
                border: '1px solid rgba(37, 99, 235, 0.22)',
                boxShadow: '0 2px 8px -2px rgba(37, 99, 235, 0.15)',
                mb: 1.2,
              }}
            >
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#2563eb' }} />
              <Typography
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: '0.74rem', sm: '0.78rem' },
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: 'primary.main',
                  lineHeight: 1,
                }}
              >
                Career Journey
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', sm: '1.85rem', md: '1.95rem', lg: '2.35rem' },
                fontWeight: 800,
                lineHeight: 1.2,
              }}
            >
              <span className="text-gradient">Internship Experience</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: { xs: '360px', sm: '540px', md: '640px' },
                mx: 'auto',
                mt: { xs: 0.5, sm: 0.7 },
                fontSize: { xs: '0.76rem', sm: '0.82rem', md: '0.82rem', lg: '0.88rem' },
                lineHeight: { xs: 1.4, sm: 1.45 },
              }}
            >
              Hands-on professional experience translating designs into live web applications, developing RESTful APIs, and collaborating with development teams.
            </Typography>
          </Box>
        </ScrollReveal>

        {/* Experience Cards */}
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 2.5, lg: 3 }} justifyContent="center">
          {experience.map((exp, idx) => (
            <Grid item xs={12} md={6} key={exp.id} sx={{ display: 'flex' }}>
              <ScrollReveal delay={idx * 0.15} sx={{ width: '100%', display: 'flex' }}>
                <Card
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: '#ffffff',
                  borderRadius: { xs: 3, sm: 3.5 },
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: { md: 'translateY(-3px)' },
                    boxShadow: '0 20px 40px -8px rgba(37, 99, 235, 0.16), 0 8px 16px -4px rgba(15, 23, 42, 0.06)',
                  },
                }}
              >
                {/* Header Banner */}
                <Box
                  sx={{
                    px: { xs: 2, sm: 2.2, md: 2.2, lg: 2.6 },
                    py: { xs: 1.5, sm: 1.6, md: 1.4, lg: 1.8 },
                    borderBottom: '1px solid rgba(15, 23, 42, 0.06)',
                    background:
                      exp.type === 'Onsite'
                        ? 'linear-gradient(90deg, rgba(37, 99, 235, 0.04) 0%, rgba(56, 189, 248, 0.02) 100%)'
                        : 'linear-gradient(90deg, rgba(2, 132, 199, 0.04) 0%, rgba(37, 99, 235, 0.02) 100%)',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: 1,
                    }}
                  >
                    <Stack direction="row" spacing={1.2} alignItems="center" sx={{ minWidth: 0, flex: 1 }}>
                      <Box
                        sx={{
                          width: { xs: 38, sm: 42, md: 42, lg: 46 },
                          height: { xs: 38, sm: 42, md: 42, lg: 46 },
                          borderRadius: '12px',
                          bgcolor: '#ffffff',
                          border: '1px solid rgba(15, 23, 42, 0.1)',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          p: 0.6,
                          overflow: 'hidden',
                          transition: 'all 0.25s ease',
                        }}
                      >
                        {exp.logo ? (
                          <Box
                            component="img"
                            src={exp.logo}
                            alt={exp.company}
                            sx={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'contain',
                            }}
                          />
                        ) : (
                          <BusinessIcon sx={{ fontSize: { xs: '1.15rem', sm: '1.3rem' }, color: 'primary.main' }} />
                        )}
                      </Box>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: { xs: '0.94rem', sm: '1.02rem', md: '1.02rem', lg: '1.12rem' },
                            lineHeight: 1.25,
                            color: '#0f172a',
                          }}
                        >
                          {exp.role}
                        </Typography>
                        <Typography
                          sx={{
                            color: 'primary.main',
                            fontWeight: 600,
                            fontSize: { xs: '0.78rem', sm: '0.84rem' },
                            lineHeight: 1.3,
                            mt: 0.2,
                          }}
                        >
                          {exp.company}
                        </Typography>
                      </Box>
                    </Stack>

                    <Chip
                      label={exp.type}
                      size="small"
                      sx={{
                        fontSize: { xs: '0.68rem', sm: '0.72rem' },
                        height: { xs: 22, sm: 24 },
                        bgcolor: exp.type === 'Onsite' ? 'rgba(37, 99, 235, 0.08)' : 'rgba(2, 132, 199, 0.08)',
                        color: exp.type === 'Onsite' ? 'primary.main' : '#0284c7',
                        fontWeight: 600,
                        border: '1px solid',
                        borderColor: exp.type === 'Onsite' ? 'rgba(37, 99, 235, 0.25)' : 'rgba(2, 132, 199, 0.25)',
                        flexShrink: 0,
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      justifyContent: 'space-between',
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      mt: 1.2,
                      gap: { xs: 0.3, sm: 1 },
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: { xs: '0.7rem', sm: '0.74rem', md: '0.73rem', lg: '0.76rem' },
                        fontWeight: 500,
                      }}
                    >
                      📅 {exp.period} &bull; ({exp.duration})
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'text.secondary',
                        fontSize: { xs: '0.7rem', sm: '0.74rem', md: '0.73rem', lg: '0.76rem' },
                        fontWeight: 500,
                      }}
                    >
                      📍 {exp.location}
                    </Typography>
                  </Box>
                </Box>

                {/* Content Body */}
                <CardContent
                  sx={{
                    px: { xs: 2, sm: 2.2, md: 2.2, lg: 2.6 },
                    py: { xs: 1.6, sm: 1.8, md: 1.4, lg: 1.8 },
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Responsibilities list */}
                  <Stack
                    spacing={{ xs: 0.75, sm: 0.9, md: 0.7, lg: 0.95 }}
                    sx={{ mb: { xs: 1.6, sm: 1.8, md: 1.3, lg: 1.8 } }}
                  >
                    {exp.points.map((point, pIdx) => (
                      <Stack direction="row" spacing={1} alignItems="flex-start" key={pIdx}>
                        <CheckCircleOutlineIcon
                          sx={{
                            color: 'primary.main',
                            fontSize: { xs: '0.95rem', sm: '1rem' },
                            mt: '2px',
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#334155',
                            fontSize: { xs: '0.76rem', sm: '0.8rem', md: '0.76rem', lg: '0.82rem' },
                            lineHeight: { xs: 1.4, sm: 1.46, md: 1.42, lg: 1.48 },
                          }}
                        >
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
                        fontSize: { xs: '0.66rem', sm: '0.7rem' },
                        display: 'block',
                        mb: { xs: 0.6, sm: 0.8 },
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      Technologies Practiced:
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={0.6}
                      flexWrap="wrap"
                      useFlexGap
                      sx={{ mb: { xs: 1.4, sm: 1.6, md: 1.2, lg: 1.6 } }}
                    >
                      {exp.skills.map((s) => (
                        <Chip
                          key={s}
                          label={s}
                          size="small"
                          sx={{
                            bgcolor: '#f1f5f9',
                            color: '#0f172a',
                            fontSize: { xs: '0.66rem', sm: '0.7rem' },
                            height: { xs: 20, sm: 22 },
                            border: '1px solid #e2e8f0',
                            fontWeight: 600,
                            px: 0.3,
                          }}
                        />
                      ))}
                    </Stack>

                    {/* Certificate Action */}
                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<VerifiedIcon sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }} />}
                      endIcon={<LaunchIcon sx={{ fontSize: '0.85rem !important' }} />}
                      onClick={() => setActiveCert(exp)}
                      sx={{
                        borderColor: 'rgba(37, 99, 235, 0.35)',
                        color: 'primary.main',
                        py: { xs: 0.65, sm: 0.75, md: 0.65, lg: 0.75 },
                        fontSize: { xs: '0.78rem', sm: '0.82rem', md: '0.79rem', lg: '0.84rem' },
                        fontWeight: 600,
                        borderRadius: '8px',
                        '&:hover': {
                          borderColor: 'primary.main',
                          bgcolor: 'rgba(37, 99, 235, 0.05)',
                        },
                      }}
                    >
                      View Internship Certificate
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </ScrollReveal>
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
            bgcolor: '#ffffff',
            borderRadius: 3,
            border: '1px solid rgba(15, 23, 42, 0.12)',
            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.15)',
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
                borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
                py: 1.5,
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                {activeCert.logo && (
                  <Box
                    component="img"
                    src={activeCert.logo}
                    alt={activeCert.company}
                    sx={{ width: 28, height: 28, objectFit: 'contain' }}
                  />
                )}
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', fontSize: '1rem' }}>
                  {activeCert.company} — Certificate of Internship
                </Typography>
              </Stack>
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
