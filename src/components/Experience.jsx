import React, { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './common/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import ExperienceCard from './experience/ExperienceCard';
import ExperienceModal from './experience/ExperienceModal';

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
          <SectionHeader
            align="center"
            eyebrow="Career Journey"
            title={<><span className="text-gradient">Internship Experience</span></>}
            subtitle="Hands-on professional experience translating designs into live web applications, developing RESTful APIs, and collaborating with development teams."
          />
        </ScrollReveal>

        {/* Experience Cards */}
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 2.5, lg: 3 }} justifyContent="center">
          {experience.map((exp, idx) => (
            <Grid item xs={12} md={6} key={exp.id} sx={{ display: 'flex' }}>
              <ScrollReveal delay={idx * 0.15} sx={{ width: '100%', display: 'flex' }}>
                <ExperienceCard exp={exp} onViewCertificate={setActiveCert} />
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Certificate Viewer Modal */}
      <ExperienceModal activeCert={activeCert} onClose={() => setActiveCert(null)} />
    </Box>
  );
}
