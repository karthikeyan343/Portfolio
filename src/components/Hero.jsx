import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TerminalIcon from '@mui/icons-material/Terminal';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ScrollReveal from './ScrollReveal';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, stats } = portfolioData;
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        pt: { xs: 12, md: 10 },
        pb: { xs: 8, md: 6 },
      }}
    >
      {/* Background ambient radial glow blobs */}
      <Box
        className="animate-pulse-slow"
        sx={{
          position: 'absolute',
          width: { xs: '18rem', md: '28rem' },
          height: { xs: '18rem', md: '28rem' },
          borderRadius: '50%',
          top: { xs: '10%', md: '15%' },
          left: { xs: '-6rem', md: '-10rem' },
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(37, 99, 235, 0) 70%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        className="animate-pulse-slow"
        sx={{
          position: 'absolute',
          width: { xs: '16rem', md: '26rem' },
          height: { xs: '16rem', md: '26rem' },
          borderRadius: '50%',
          bottom: '10%',
          right: { xs: '-5rem', md: '-8rem' },
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(56, 189, 248, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
        <Grid container spacing={{ xs: 4, md: 5, lg: 6 }} alignItems="center">
          {/* Left Text Intro */}
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <ScrollReveal delay={0.08} yOffset={25}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ mb: 1.8 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: '#475569',
                    fontWeight: 600,
                    fontSize: { xs: '0.85rem', md: '0.92rem' },
                    letterSpacing: '0.01em',
                  }}
                >
                  Hello, I'm
                </Typography>
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.4,
                    py: 0.45,
                    borderRadius: '999px',
                    bgcolor: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.28)',
                    boxShadow: '0 1px 4px rgba(16, 185, 129, 0.08)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <Box
                    className="animate-pulse-dot"
                    sx={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      bgcolor: '#10b981',
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: '#065f46',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      letterSpacing: '0.01em',
                      lineHeight: 1,
                    }}
                  >
                    Available for Opportunities
                  </Typography>
                </Box>
              </Stack>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  mb: 1,
                }}
              >
                <span className="text-gradient">{personal.name}</span>
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.05rem', sm: '1.2rem', md: '1.35rem' },
                  color: '#1e293b',
                  fontWeight: 600,
                  mb: 1.8,
                }}
              >
                {personal.subtitle}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#475569',
                  maxWidth: '38rem',
                  fontSize: { xs: '0.86rem', md: '0.92rem' },
                  lineHeight: 1.65,
                  mb: 3,
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                {personal.bio}
              </Typography>

              {/* Professional Action Buttons */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.2,
                  mb: 3.5,
                  maxWidth: { xs: '100%', sm: '42rem' },
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                {/* Desktop Unified Row (lg and up) */}
                <Box
                  sx={{
                    display: { xs: 'none', lg: 'flex' },
                    alignItems: 'center',
                    gap: 1,
                    flexWrap: 'nowrap',
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    href={personal.resume}
                    download="Karthikeyan_S_Resume.pdf"
                    startIcon={<FileDownloadIcon sx={{ fontSize: '1rem !important' }} />}
                    sx={{
                      px: 2,
                      py: 0.85,
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      borderRadius: '10px',
                      bgcolor: 'primary.main',
                      color: '#ffffff',
                      boxShadow: '0 4px 16px rgba(37, 99, 235, 0.4)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                        boxShadow: '0 6px 22px rgba(37, 99, 235, 0.6)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Download Resume
                  </Button>

                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => setResumeOpen(true)}
                    startIcon={<VisibilityIcon sx={{ fontSize: '1rem !important' }} />}
                    sx={{
                      borderColor: 'rgba(37, 99, 235, 0.4)',
                      color: 'primary.main',
                      px: 1.8,
                      py: 0.85,
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      borderRadius: '10px',
                      bgcolor: 'rgba(37, 99, 235, 0.04)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: 'rgba(37, 99, 235, 0.08)',
                        boxShadow: '0 4px 16px rgba(37, 99, 235, 0.15)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    View Resume
                  </Button>

                  <Box
                    sx={{
                      width: '1px',
                      height: '24px',
                      bgcolor: 'rgba(15, 23, 42, 0.12)',
                      mx: 0.5,
                    }}
                  />

                  <Button
                    variant="contained"
                    size="small"
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon sx={{ fontSize: '0.95rem !important', color: '#ffffff !important' }} />}
                    sx={{
                      backgroundColor: '#24292e !important',
                      color: '#ffffff !important',
                      px: 1.6,
                      py: 0.85,
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      borderRadius: '10px',
                      border: '1px solid #24292e',
                      boxShadow: '0 2px 6px -1px rgba(36, 41, 46, 0.35)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      '&:hover': {
                        backgroundColor: '#24292e !important',
                        color: '#ffffff !important',
                        borderColor: '#24292e',
                        boxShadow: '0 8px 22px -2px rgba(36, 41, 46, 0.5)',
                        transform: 'translateY(-2.5px)',
                      },
                    }}
                  >
                    GitHub
                  </Button>

                  <Button
                    variant="contained"
                    size="small"
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LinkedInIcon sx={{ fontSize: '0.95rem !important', color: '#ffffff !important' }} />}
                    sx={{
                      backgroundColor: '#0a66c2 !important',
                      color: '#ffffff !important',
                      px: 1.6,
                      py: 0.85,
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      borderRadius: '10px',
                      border: '1px solid #0a66c2',
                      boxShadow: '0 2px 6px -1px rgba(10, 102, 194, 0.35)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      '&:hover': {
                        backgroundColor: '#0a66c2 !important',
                        color: '#ffffff !important',
                        borderColor: '#0a66c2',
                        boxShadow: '0 8px 22px -2px rgba(10, 102, 194, 0.55)',
                        transform: 'translateY(-2.5px)',
                      },
                    }}
                  >
                    LinkedIn
                  </Button>

                  {personal.leetcode && (
                    <Button
                      variant="contained"
                      size="small"
                      href={personal.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<TerminalIcon sx={{ fontSize: '0.95rem !important', color: '#000000 !important' }} />}
                      sx={{
                        backgroundColor: '#FFA116 !important',
                        color: '#000000 !important',
                        px: 1.6,
                        py: 0.85,
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        whiteSpace: 'nowrap',
                        borderRadius: '10px',
                        border: '1px solid #e59012',
                        boxShadow: '0 2px 6px -1px rgba(255, 161, 22, 0.4)',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                        '&:hover': {
                          backgroundColor: '#FFA116 !important',
                          color: '#000000 !important',
                          borderColor: '#e59012',
                          boxShadow: '0 8px 22px -2px rgba(255, 161, 22, 0.6)',
                          transform: 'translateY(-2.5px)',
                        },
                      }}
                    >
                      LeetCode
                    </Button>
                  )}
                </Box>

                {/* Tablet & Mobile Layout (below lg: iPad, tablets, phones) */}
                <Box
                  sx={{
                    display: { xs: 'flex', lg: 'none' },
                    flexDirection: 'column',
                    gap: 1.2,
                    alignItems: { xs: 'center', md: 'flex-start' },
                    width: '100%',
                  }}
                >
                  {/* Row 1: Resume CTAs (Naturally proportioned side-by-side) */}
                  <Stack
                    direction="row"
                    spacing={1.2}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                    sx={{ width: '100%', maxWidth: '360px' }}
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="small"
                      href={personal.resume}
                      download="Karthikeyan_S_Resume.pdf"
                      startIcon={<FileDownloadIcon sx={{ fontSize: '0.95rem !important' }} />}
                      sx={{
                        py: 0.85,
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        whiteSpace: 'nowrap',
                        borderRadius: '10px',
                        bgcolor: 'primary.main',
                        color: '#ffffff',
                        boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
                        '&:hover': {
                          bgcolor: 'primary.dark',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      Download Resume
                    </Button>

                    <Button
                      fullWidth
                      variant="outlined"
                      size="small"
                      onClick={() => setResumeOpen(true)}
                      startIcon={<VisibilityIcon sx={{ fontSize: '0.95rem !important' }} />}
                      sx={{
                        borderColor: 'rgba(37, 99, 235, 0.4)',
                        color: 'primary.main',
                        py: 0.85,
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        borderRadius: '10px',
                        bgcolor: 'rgba(37, 99, 235, 0.04)',
                        '&:hover': {
                          borderColor: 'primary.main',
                          bgcolor: 'rgba(37, 99, 235, 0.08)',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      View Resume
                    </Button>
                  </Stack>

                  {/* Row 2: Social Connect Links (Permanent native brand colors with pure elevation on hover) */}
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                    sx={{ width: '100%', maxWidth: '360px' }}
                  >
                    <Button
                      fullWidth
                      variant="contained"
                      size="small"
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon sx={{ fontSize: '0.92rem !important', color: '#ffffff !important' }} />}
                      sx={{
                        backgroundColor: '#24292e !important',
                        color: '#ffffff !important',
                        py: 0.85,
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        borderRadius: '10px',
                        border: '1px solid #24292e',
                        boxShadow: '0 2px 6px -1px rgba(36, 41, 46, 0.35)',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                        '&:hover': {
                          backgroundColor: '#24292e !important',
                          color: '#ffffff !important',
                          borderColor: '#24292e',
                          boxShadow: '0 8px 22px -2px rgba(36, 41, 46, 0.5)',
                          transform: 'translateY(-2.5px)',
                        },
                      }}
                    >
                      GitHub
                    </Button>

                    <Button
                      fullWidth
                      variant="contained"
                      size="small"
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<LinkedInIcon sx={{ fontSize: '0.92rem !important', color: '#ffffff !important' }} />}
                      sx={{
                        backgroundColor: '#0a66c2 !important',
                        color: '#ffffff !important',
                        py: 0.85,
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        borderRadius: '10px',
                        border: '1px solid #0a66c2',
                        boxShadow: '0 2px 6px -1px rgba(10, 102, 194, 0.35)',
                        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                        '&:hover': {
                          backgroundColor: '#0a66c2 !important',
                          color: '#ffffff !important',
                          borderColor: '#0a66c2',
                          boxShadow: '0 8px 22px -2px rgba(10, 102, 194, 0.55)',
                          transform: 'translateY(-2.5px)',
                        },
                      }}
                    >
                      LinkedIn
                    </Button>

                    {personal.leetcode && (
                      <Button
                        fullWidth
                        variant="contained"
                        size="small"
                        href={personal.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<TerminalIcon sx={{ fontSize: '0.92rem !important', color: '#000000 !important' }} />}
                        sx={{
                          backgroundColor: '#FFA116 !important',
                          color: '#000000 !important',
                          py: 0.85,
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          whiteSpace: 'nowrap',
                          borderRadius: '10px',
                          border: '1px solid #e59012',
                          boxShadow: '0 2px 6px -1px rgba(255, 161, 22, 0.4)',
                          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                          '&:hover': {
                            backgroundColor: '#FFA116 !important',
                            color: '#000000 !important',
                            borderColor: '#e59012',
                            boxShadow: '0 8px 22px -2px rgba(255, 161, 22, 0.6)',
                            transform: 'translateY(-2.5px)',
                          },
                        }}
                      >
                        LeetCode
                      </Button>
                    )}
                  </Stack>
                </Box>
              </Box>

              {/* Key Metrics / Stats Bar */}
              <Grid
                container
                spacing={2}
                sx={{
                  pt: 2.5,
                  borderTop: '1px solid rgba(15, 23, 42, 0.08)',
                  maxWidth: '38rem',
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                {stats.map((st, i) => (
                  <Grid item xs={6} sm={3} key={i}>
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: '1.4rem', sm: '1.65rem' },
                          color: '#ffffff',
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        <span className="text-gradient">{st.value}</span>
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.74rem',
                          display: 'block',
                          lineHeight: 1.3,
                          mt: 0.3,
                        }}
                      >
                        {st.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </ScrollReveal>
        </Grid>

        {/* Right Image Showcase */}
        <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
          <ScrollReveal delay={0.2} yOffset={30}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end', lg: 'center' },
                alignItems: 'center',
                position: 'relative',
                pt: { xs: 1, md: 0 },
                pb: { xs: 2, md: 0 },
              }}
            >
              <Box
                component="img"
                src={personal.avatar}
                alt={personal.name}
                loading="eager"
                sx={{
                  width: 'auto',
                  maxWidth: { xs: '80%', sm: '85%', md: '100%' },
                  height: { xs: '260px', sm: '330px', md: '430px', lg: '490px' },
                  objectFit: 'contain',
                  imageRendering: '-webkit-optimize-contrast',
                  filter: 'drop-shadow(0 15px 30px rgba(15, 23, 42, 0.12))',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              />
            </Box>
          </ScrollReveal>
        </Grid>
        </Grid>

        {/* Scroll down indicator */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            mt: 5,
          }}
        >
          <Button
            href="#experience"
            sx={{
              color: 'text.secondary',
              display: 'flex',
              flexDirection: 'column',
              gap: 0.5,
              fontSize: '0.8rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              '&:hover': { color: 'primary.main', background: 'transparent' },
            }}
          >
            Explore Experience
            <ArrowDownwardIcon sx={{ fontSize: '1.2rem', animation: 'float 2s ease-in-out infinite' }} />
          </Button>
        </Box>
      </Container>

      {/* Resume Viewer Modal */}
      <Dialog
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: '#ffffff',
            borderRadius: 3,
            border: '1px solid rgba(15, 23, 42, 0.1)',
            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.15)',
          },
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
            py: 1.5,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            Karthikeyan S — Professional Resume
          </Typography>
          <IconButton size="small" onClick={() => setResumeOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 2, height: '75vh', display: 'flex', flexDirection: 'column' }}>
          <Box
            component="iframe"
            src={`${personal.resume}#toolbar=0`}
            title="Karthikeyan S Resume"
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
              variant="outlined"
              color="primary"
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<LaunchIcon />}
            >
              Open Fullscreen
            </Button>
            <Button
              variant="contained"
              color="primary"
              href={personal.resume}
              download="Karthikeyan_S_Resume.pdf"
              startIcon={<FileDownloadIcon />}
            >
              Download PDF
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
