import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ScrollReveal from './ScrollReveal';
import { portfolioData } from '../data/portfolioData';
import HeroActions from './hero/HeroActions';
import HeroStats from './hero/HeroStats';
import HeroImage from './hero/HeroImage';
import ResumeModal from './hero/ResumeModal';

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

                {/* Hero Actions (CTAs + Brand Social Buttons) */}
                <HeroActions personal={personal} onOpenResume={() => setResumeOpen(true)} />

                {/* Key Metrics / Stats Bar */}
                <HeroStats stats={stats} />
              </Box>
            </ScrollReveal>
          </Grid>

          {/* Right Image Showcase */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <ScrollReveal delay={0.2} yOffset={30}>
              <HeroImage avatar={personal.avatar} name={personal.name} />
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
      <ResumeModal
        open={resumeOpen}
        onClose={() => setResumeOpen(false)}
        resumeUrl={personal.resume}
      />
    </Box>
  );
}
