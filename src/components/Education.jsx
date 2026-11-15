import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Stack,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import GroupsIcon from '@mui/icons-material/Groups';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import ScrollReveal from './ScrollReveal';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education, achievements, certifications } = portfolioData;
  const [activeCert, setActiveCert] = useState(null);

  const achievementIcons = [
    <EmojiEventsIcon sx={{ fontSize: '1.25rem' }} />,
    <GroupsIcon sx={{ fontSize: '1.25rem' }} />,
    <CodeIcon sx={{ fontSize: '1.25rem' }} />,
    <RocketLaunchIcon sx={{ fontSize: '1.25rem' }} />,
  ];

  return (
    <Box
      id="education"
      component="section"
      sx={{
        py: { xs: 6, sm: 7, md: 8, lg: 9 },
        position: 'relative',
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
        {/* Section Title */}
        <ScrollReveal delay={0}>
          <Box sx={{ textAlign: 'center', mb: { xs: 3.5, sm: 4, md: 4.5 } }}>
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
                My Journey
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.1rem', md: '2.3rem', lg: '2.6rem' },
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              <span className="text-gradient">Education & Credentials</span>
            </Typography>
          </Box>
        </ScrollReveal>

        {/* Row 1: Education (Left) & Certifications (Right) — Perfectly Balanced 3 vs 3 */}
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Education Column (3 items) */}
          <Grid item xs={12} md={6}>
            <ScrollReveal delay={0.1}>
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  bgcolor: 'rgba(37, 99, 235, 0.08)',
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <SchoolIcon sx={{ fontSize: '1.25rem' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a' }}>
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
                  top: '12px',
                  bottom: '12px',
                  width: '2px',
                  background: 'linear-gradient(180deg, #2563eb 0%, rgba(37, 99, 235, 0.15) 100%)',
                },
              }}
            >
              {education.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    position: 'relative',
                    mb: idx === education.length - 1 ? 0 : 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: '-23px',
                      top: '16px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      bgcolor: '#ffffff',
                      border: '2px solid #2563eb',
                      boxShadow: '0 0 10px rgba(37, 99, 235, 0.3)',
                    },
                  }}
                >
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
                          bgcolor: item.badgeType === 'college'
                            ? 'rgba(37, 99, 235, 0.08)'
                            : item.badgeType === 'hsc'
                            ? 'rgba(79, 70, 229, 0.08)'
                            : 'rgba(217, 119, 6, 0.08)',
                          border: '1px solid',
                          borderColor: item.badgeType === 'college'
                            ? 'rgba(37, 99, 235, 0.2)'
                            : item.badgeType === 'hsc'
                            ? 'rgba(79, 70, 229, 0.2)'
                            : 'rgba(217, 119, 6, 0.2)',
                          boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: item.badgeType === 'college'
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
                </Box>
              ))}
            </Box>
          </ScrollReveal>
        </Grid>

        {/* Certifications Column (3 items) */}
        <Grid item xs={12} md={6}>
          <ScrollReveal delay={0.25}>
            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '10px',
                  bgcolor: 'rgba(37, 99, 235, 0.08)',
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CardMembershipIcon sx={{ fontSize: '1.25rem' }} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a' }}>
                Certifications
              </Typography>
            </Stack>

            {/* Certifications Timeline / Stack */}
            <Box
              sx={{
                position: 'relative',
                pl: 3.5,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: '10px',
                  top: '12px',
                  bottom: '12px',
                  width: '2px',
                  background: 'linear-gradient(180deg, #2563eb 0%, rgba(37, 99, 235, 0.15) 100%)',
                },
              }}
            >
              {certifications && certifications.map((c, i) => (
                <Box
                  key={i}
                  sx={{
                    position: 'relative',
                    mb: i === certifications.length - 1 ? 0 : 3,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: '-23px',
                      top: '16px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      bgcolor: '#ffffff',
                      border: '2px solid #2563eb',
                      boxShadow: '0 0 10px rgba(37, 99, 235, 0.3)',
                    },
                  }}
                >
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
                          src={c.logo}
                          alt={c.issuer}
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
                              {c.title}
                            </Typography>
                            <Chip
                              label={c.period}
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
                            {c.issuer} &bull; <Box component="span" sx={{ color: '#64748b', fontSize: '0.8rem' }}>{c.institution}</Box>
                          </Typography>

                          {c.score && (
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
                              {c.score}
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
                            onClick={() => setActiveCert(c)}
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
                </Box>
              ))}
            </Box>
          </ScrollReveal>
        </Grid>
      </Grid>

      {/* Row 2: Key Achievements — Full Width Balanced 4-Column Showcase */}
      <Box sx={{ mt: { xs: 4, sm: 5, md: 5.5 } }}>
        <ScrollReveal delay={0}>
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 3 }}>
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                bgcolor: 'rgba(37, 99, 235, 0.08)',
                color: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <EmojiEventsIcon sx={{ fontSize: '1.25rem' }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a' }}>
              Key Achievements
            </Typography>
          </Stack>
        </ScrollReveal>

        <Grid container spacing={2.5}>
          {achievements.map((item, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx} sx={{ display: 'flex' }}>
              <ScrollReveal delay={idx * 0.1} sx={{ width: '100%', height: '100%', display: 'flex' }}>
                <Card
                  sx={{
                    p: 2.4,
                    width: '100%',
                    height: '100%',
                    bgcolor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    boxShadow: '0 8px 25px -4px rgba(15, 23, 42, 0.08), 0 3px 8px -2px rgba(15, 23, 42, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      borderColor: '#2563eb',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 16px 35px -6px rgba(37, 99, 235, 0.16), 0 6px 12px -3px rgba(15, 23, 42, 0.06)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: '10px',
                      bgcolor: 'rgba(37, 99, 235, 0.08)',
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1.5,
                      flexShrink: 0,
                    }}
                  >
                    {achievementIcons[idx % achievementIcons.length]}
                  </Box>

                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      color: '#0f172a',
                      mb: 0.8,
                      lineHeight: 1.35,
                      fontSize: '0.92rem',
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#475569',
                      fontSize: '0.8rem',
                      lineHeight: 1.55,
                      mt: 'auto',
                    }}
                  >
                    {item.description}
                  </Typography>
                </Card>
              </ScrollReveal>
            </Grid>
            ))}
          </Grid>
        </Box>
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
            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.18)',
            overflow: 'hidden',
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
                py: 1.8,
                px: 2.5,
                bgcolor: '#f8fafc',
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                {activeCert.logo && (
                  <Box
                    component="img"
                    src={activeCert.logo}
                    alt={activeCert.issuer}
                    sx={{ width: 32, height: 32, objectFit: 'contain' }}
                  />
                )}
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', fontSize: '1.02rem', lineHeight: 1.2 }}>
                    {activeCert.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.78rem' }}>
                    {activeCert.issuer} &bull; {activeCert.period}
                  </Typography>
                </Box>
              </Stack>
              <IconButton size="small" onClick={() => setActiveCert(null)} sx={{ color: '#64748b', '&:hover': { color: '#0f172a' } }}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: { xs: 1.5, md: 2.5 }, bgcolor: '#0f172a08', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box
                component="img"
                src={activeCert.certificate}
                alt={activeCert.title}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  borderRadius: 2,
                  boxShadow: '0 8px 30px rgba(15, 23, 42, 0.12)',
                  border: '1px solid #e2e8f0',
                  bgcolor: '#ffffff',
                }}
              />
              <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                  <CheckCircleIcon sx={{ fontSize: '1rem', color: '#16a34a' }} />
                  <Typography sx={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 600 }}>
                    Official Verified Certificate
                  </Typography>
                </Box>
                <Stack direction="row" spacing={1.5}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    href={activeCert.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<LaunchIcon sx={{ fontSize: '0.9rem !important' }} />}
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                  >
                    Open Full Image
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => setActiveCert(null)}
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                  >
                    Close
                  </Button>
                </Stack>
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
