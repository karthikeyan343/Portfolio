import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Stack,
  Button,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DnsIcon from '@mui/icons-material/Dns';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import TerminalIcon from '@mui/icons-material/Terminal';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './common/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import {
  bentoCategories,
  frontendSkills,
  backendSkills,
  databaseSkills,
  toolSkills,
} from '../data/skillsData';
import SkillsMarquee from './skills/SkillsMarquee';
import MernPipelineCard from './skills/MernPipelineCard';
import SkillCategoryCard from './skills/SkillCategoryCard';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const { skills } = portfolioData;

  const categoryCards = [
    {
      id: 'frontend',
      title: 'Frontend Engineering',
      subtitle: 'Modern reactive interfaces & design systems',
      categoryBadge: 'CLIENT ARCHITECTURE',
      icon: <CodeIcon sx={{ fontSize: '1.4rem' }} />,
      skills: frontendSkills,
    },
    {
      id: 'backend',
      title: 'Backend Engineering',
      subtitle: 'REST microservices & runtime engines',
      categoryBadge: 'SERVER & APIS',
      icon: <DnsIcon sx={{ fontSize: '1.4rem' }} />,
      skills: backendSkills,
    },
    {
      id: 'database',
      title: 'Database Systems',
      subtitle: 'NoSQL schemas & cloud storage persistence',
      categoryBadge: 'PERSISTENCE LAYER',
      icon: <StorageIcon sx={{ fontSize: '1.4rem' }} />,
      skills: databaseSkills,
    },
    {
      id: 'tools',
      title: 'Developer Tools & Workflow',
      subtitle: 'Version control, API test suites & build engines',
      categoryBadge: 'DEVOPS & TOOLING',
      icon: <BuildIcon sx={{ fontSize: '1.4rem' }} />,
      skills: toolSkills,
    },
  ];

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 6, sm: 7, md: 8, lg: 9 },
        position: 'relative',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, rgba(37, 99, 235, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.06) 0%, rgba(56, 189, 248, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <SectionHeader
            align="center"
            eyebrow="What I Know & My Toolkit"
            icon={<TerminalIcon sx={{ fontSize: '0.95rem', color: 'primary.main' }} />}
            title={<>Technical Skills <span className="text-gradient">I Know</span></>}
            subtitle="A comprehensive overview of the technical skills, frameworks, databases, and developer tools I have mastered and applied in building full-stack web applications."
          />

          {/* Category Filter Pills */}
          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
            sx={{ mb: { xs: 3.5, sm: 4, md: 4.5 } }}
          >
            {bentoCategories.map((cat) => {
              const active = activeTab === cat.id;
              return (
                <Button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  variant={active ? 'contained' : 'outlined'}
                  size="small"
                  sx={{
                    borderRadius: '20px',
                    px: 2.2,
                    py: 0.7,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    bgcolor: active ? 'primary.main' : '#f8fafc',
                    color: active ? '#ffffff' : '#475569',
                    borderColor: active ? 'primary.main' : '#e2e8f0',
                    boxShadow: active ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      bgcolor: active ? 'primary.dark' : 'rgba(37, 99, 235, 0.08)',
                      borderColor: 'primary.main',
                      color: active ? '#ffffff' : 'primary.main',
                    },
                  }}
                >
                  {cat.label}
                </Button>
              );
            })}
          </Stack>
        </ScrollReveal>

        {/* Infinite Tech Marquee Strip */}
        <ScrollReveal delay={0.1}>
          <SkillsMarquee items={skills} />
        </ScrollReveal>

        {/* Bento Grid Architecture */}
        <Grid container spacing={3}>
          {/* Card 1: Primary Full-Stack MERN Architecture */}
          {(activeTab === 'all' || activeTab === 'frontend' || activeTab === 'backend') && (
            <Grid item xs={12}>
              <ScrollReveal delay={0.1}>
                <MernPipelineCard />
              </ScrollReveal>
            </Grid>
          )}

          {/* Cards 2-5: Category Cards */}
          {categoryCards
            .filter((c) => activeTab === 'all' || activeTab === c.id)
            .map((card, idx) => (
              <Grid
                item
                xs={12}
                md={activeTab === 'all' ? 6 : 8}
                key={card.id}
                sx={{ display: 'flex', mx: activeTab === 'all' ? 0 : 'auto' }}
              >
                <ScrollReveal delay={0.1 + idx * 0.05} sx={{ width: '100%', height: '100%', display: 'flex' }}>
                  <SkillCategoryCard
                    title={card.title}
                    subtitle={card.subtitle}
                    categoryBadge={card.categoryBadge}
                    icon={card.icon}
                    skills={card.skills}
                  />
                </ScrollReveal>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}
