import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Tooltip,
} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TerminalIcon from '@mui/icons-material/Terminal';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
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
          background: 'radial-gradient(circle, rgba(26, 229, 183, 0.16) 0%, rgba(26, 229, 183, 0) 70%)',
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
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.16) 0%, rgba(168, 85, 247, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Text Intro */}
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ mb: 1.5 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: 'primary.main',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                  }}
                >
                  Hello, I'm
                </Typography>
                <Chip
                  icon={
                    <Box
                      sx={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        bgcolor: '#1ae5b7',
                        boxShadow: '0 0 8px #1ae5b7',
                        ml: '8px !important',
                      }}
                    />
                  }
                  label="Available for Work"
                  size="small"
                  sx={{
                    bgcolor: 'rgba(26, 229, 183, 0.1)',
                    color: 'primary.light',
                    border: '1px solid rgba(26, 229, 183, 0.35)',
                    fontWeight: 600,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.72rem',
                    height: '24px',
                    '& .MuiChip-label': { pl: 0.8, pr: 1.2 },
                  }}
                />
              </Stack>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.2rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 1,
                }}
              >
                <span className="text-gradient">{personal.name}</span>
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.2rem', sm: '1.45rem', md: '1.65rem' },
                  color: 'text.secondary',
                  fontWeight: 500,
                  mb: 2.2,
                }}
              >
                {personal.subtitle}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '38rem',
                  fontSize: { xs: '0.92rem', md: '1rem' },
                  lineHeight: 1.7,
                  mb: 3.5,
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                {personal.bio}
              </Typography>

              {/* Resume & Social Action Buttons */}
              <Stack
                direction="row"
                spacing={1.5}
                flexWrap="wrap"
                useFlexGap
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ mb: 4 }}
              >
                {/* Download Resume Button */}
                <Button
                  variant="contained"
                  color="primary"
                  href={personal.resume}
                  download="Karthikeyan_S_Resume.pdf"
                  startIcon={<FileDownloadIcon />}
                  sx={{
                    px: 2.5,
                    py: 1.1,
                    fontWeight: 700,
                    boxShadow: '0 4px 16px rgba(26, 229, 183, 0.35)',
                    '&:hover': {
                      boxShadow: '0 6px 24px rgba(26, 229, 183, 0.55)',
                    },
                  }}
                >
                  Download Resume
                </Button>

                {/* View Resume Button */}
                <Button
                  variant="outlined"
                  onClick={() => setResumeOpen(true)}
                  startIcon={<VisibilityIcon />}
                  sx={{
                    borderColor: 'rgba(26, 229, 183, 0.4)',
                    color: 'primary.light',
                    px: 2.2,
                    py: 1.1,
                    fontWeight: 600,
                    bgcolor: 'rgba(26, 229, 183, 0.05)',
                    '&:hover': {
                      borderColor: 'primary.main',
                      bgcolor: 'rgba(26, 229, 183, 0.15)',
                    },
                  }}
                >
                  View Resume
                </Button>

                <Button
                  variant="contained"
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon />}
                  sx={{
                    bgcolor: 'secondary.main',
                    color: 'text.primary',
                    px: 2,
                    py: 1.1,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      bgcolor: '#24292e',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                  }}
                >
                  GitHub
                </Button>

                <Button
                  variant="contained"
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<LinkedInIcon />}
                  sx={{
                    bgcolor: 'secondary.main',
                    color: 'text.primary',
                    px: 2,
                    py: 1.1,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      bgcolor: '#0a66c2',
                      color: '#ffffff',
                    },
                  }}
                >
                  LinkedIn
                </Button>

                {personal.leetcode && (
                  <Button
                    variant="contained"
                    href={personal.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<TerminalIcon />}
                    sx={{
                      bgcolor: 'secondary.main',
                      color: 'text.primary',
                      px: 2,
                      py: 1.1,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        bgcolor: '#FFA116',
                        color: '#000000',
                      },
                    }}
                  >
                    LeetCode
                  </Button>
                )}
              </Stack>

              {/* Key Metrics / Stats Bar */}
              <Grid
                container
                spacing={2}
                sx={{
                  pt: 2.5,
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
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
          </Grid>

          {/* Right Image / Portrait */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {/* Glowing Aura Ring */}
              <Box
                className="animate-glow"
                sx={{
                  position: 'absolute',
                  width: { xs: '17rem', sm: '21rem', md: '23rem' },
                  height: { xs: '17rem', sm: '21rem', md: '23rem' },
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(26, 229, 183, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%)',
                  filter: 'blur(28px)',
                  zIndex: 0,
                }}
              />

              {/* Portrait Container */}
              <Box
                className="animate-float"
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  p: '6px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1ae5b7 0%, rgba(168, 85, 247, 0.8) 100%)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                }}
              >
                <Box
                  component="img"
                  src={personal.avatar}
                  alt={personal.name}
                  sx={{
                    width: { xs: 240, sm: 280, md: 320 },
                    height: { xs: 240, sm: 280, md: 320 },
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid #0e131b',
                    display: 'block',
                  }}
                />

                {/* Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    right: 8,
                    bgcolor: 'rgba(20, 28, 38, 0.95)',
                    border: '1px solid rgba(26, 229, 183, 0.4)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '24px',
                    px: 1.8,
                    py: 0.6,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
                  }}
                >
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      bgcolor: '#1ae5b7',
                      boxShadow: '0 0 10px #1ae5b7',
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: 700,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: '#ffffff',
                      fontSize: '0.75rem',
                    }}
                  >
                    MERN Developer
                  </Typography>
                </Box>
              </Box>
            </Box>
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
            bgcolor: '#141c26',
            borderRadius: 3,
            border: '1px solid rgba(26, 229, 183, 0.3)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85)',
          },
        }}
      >
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
