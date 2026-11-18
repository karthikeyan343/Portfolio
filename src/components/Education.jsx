import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import GroupsIcon from '@mui/icons-material/Groups';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './common/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import EducationCard from './education/EducationCard';
import CertificationCard from './education/CertificationCard';
import AchievementCard from './education/AchievementCard';
import CertificateModal from './education/CertificateModal';

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
          <SectionHeader
            align="center"
            eyebrow="My Journey"
            title={<><span className="text-gradient">Education & Credentials</span></>}
          />
        </ScrollReveal>

        {/* Row 1: Education (Left) & Certifications (Right) — Perfectly Balanced 3 vs 3 */}
        <Grid container spacing={{ xs: 4, md: 5 }}>
          {/* Education Column */}
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
                    <EducationCard item={item} />
                  </Box>
                ))}
              </Box>
            </ScrollReveal>
          </Grid>

          {/* Certifications Column */}
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

              {/* Certifications Timeline */}
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
                {certifications &&
                  certifications.map((cert, i) => (
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
                      <CertificationCard
                        cert={cert}
                        onViewCertificate={setActiveCert}
                      />
                    </Box>
                  ))}
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>

        {/* Row 2: Key Achievements */}
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
                  <AchievementCard
                    item={item}
                    icon={achievementIcons[idx % achievementIcons.length]}
                  />
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Certificate Viewer Modal */}
      <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </Box>
  );
}
