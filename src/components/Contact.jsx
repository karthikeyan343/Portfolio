import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './common/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import ContactInfoCards from './contact/ContactInfoCards';
import ContactForm from './contact/ContactForm';

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <Box
      id="contact"
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
          <SectionHeader
            align="center"
            eyebrow="Get In Touch"
            title={<><span className="text-gradient">Let's Connect</span></>}
            subtitle="Whether you have a job opportunity, a project collaboration, or just want to discuss web tech, my inbox is always open!"
          />
        </ScrollReveal>

        <Grid container spacing={4} justifyContent="center">
          {/* Contact Direct Cards */}
          <Grid item xs={12} md={5}>
            <ScrollReveal delay={0.1}>
              <ContactInfoCards personal={personal} />
            </ScrollReveal>
          </Grid>

          {/* Quick Message Form */}
          <Grid item xs={12} md={7}>
            <ScrollReveal delay={0.25}>
              <ContactForm email={personal.email} />
            </ScrollReveal>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: '1px solid #e2e8f0',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#475569',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.88rem',
              fontWeight: 500,
            }}
          >
            &copy; {new Date().getFullYear()} Karthikeyan S. All rights reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: '#64748b',
              mt: 0.6,
              display: 'block',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.78rem',
            }}
          >
            Designed &amp; Developed with modern full-stack web technologies.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
