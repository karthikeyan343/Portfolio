import React from 'react';
import { Box, Container, Grid, Typography, Button, Stack, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;

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
        pt: { xs: 14, md: 12 },
        pb: { xs: 8, md: 4 },
      }}
    >
      {/* Background glow blobs */}
      <Box
        className="animate-pulse-slow"
        sx={{
          position: 'absolute',
          width: { xs: '18rem', md: '28rem' },
          height: { xs: '18rem', md: '28rem' },
          borderRadius: '50%',
          top: { xs: '10%', md: '18%' },
          left: { xs: '-6rem', md: '-10rem' },
          background: 'radial-gradient(circle, rgba(26, 229, 183, 0.15) 0%, rgba(26, 229, 183, 0) 70%)',
          filter: 'blur(40px)',
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
                sx={{ mt: { xs: 2, md: 3 }, mb: 2 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'Manrope', sans-serif",
                    color: 'primary.main',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
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
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '0.75rem',
                    height: '26px',
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
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                  color: 'text.secondary',
                  fontWeight: 500,
                  mb: 2.5,
                }}
              >
                {personal.subtitle} &bull; Full-Stack Builder
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  maxWidth: '36rem',
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  lineHeight: 1.75,
                  mb: 4,
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                {personal.bio}
              </Typography>

              {/* Social / Contact action buttons */}
              <Stack
                direction="row"
                spacing={1.5}
                flexWrap="wrap"
                useFlexGap
                justifyContent={{ xs: 'center', md: 'flex-start' }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon />}
                  sx={{
                    px: 2.5,
                    py: 1.1,
                    boxShadow: '0 4px 14px rgba(26, 229, 183, 0.3)',
                    '&:hover': {
                      boxShadow: '0 6px 20px rgba(26, 229, 183, 0.5)',
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
                    px: 2.5,
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

                <Button
                  variant="contained"
                  href={`mailto:${personal.email}`}
                  startIcon={<EmailIcon />}
                  sx={{
                    bgcolor: 'secondary.main',
                    color: 'text.primary',
                    px: 2.5,
                    py: 1.1,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                    },
                  }}
                >
                  Email
                </Button>

                <Button
                  variant="contained"
                  href={`tel:${personal.phone}`}
                  startIcon={<PhoneIcon />}
                  sx={{
                    bgcolor: 'secondary.main',
                    color: 'text.primary',
                    px: 2.5,
                    py: 1.1,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                    },
                  }}
                >
                  Call
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Right Image Showcase */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <Box
                component="img"
                src={personal.avatar}
                alt={personal.name}
                loading="eager"
                sx={{
                  width: 'auto',
                  maxWidth: '100%',
                  height: { xs: '360px', sm: '440px', md: '500px' },
                  objectFit: 'contain',
                  imageRendering: '-webkit-optimize-contrast',
                  filter: 'drop-shadow(0 15px 35px rgba(0, 0, 0, 0.6))',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Scroll down indicator */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            mt: 6,
          }}
        >
          <Button
            href="#skills"
            sx={{
              color: 'text.secondary',
              display: 'flex',
              flexDirection: 'column',
              gap: 0.5,
              fontSize: '0.8rem',
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 600,
              '&:hover': { color: 'primary.main', background: 'transparent' },
            }}
          >
            Explore Skills
            <ArrowDownwardIcon sx={{ fontSize: '1.2rem', animation: 'float 2s ease-in-out infinite' }} />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

