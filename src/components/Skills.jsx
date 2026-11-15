import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Chip,
  Button,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DnsIcon from '@mui/icons-material/Dns';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import TerminalIcon from '@mui/icons-material/Terminal';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ScrollReveal from './ScrollReveal';
import { portfolioData } from '../data/portfolioData';

const bentoCategories = [
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Databases' },
  { id: 'tools', label: 'Dev Tools' },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const { skills } = portfolioData;

  // Categorized skill collections
  const frontendSkills = [
    { name: 'React.js', role: 'Component UI & Hooks', badge: 'React', color: '#61DAFB', tier: 'Core Stack' },
    { name: 'JavaScript (ES6+)', role: 'Modern Async & DOM', badge: 'JS', color: '#F7DF1E', tier: 'Core Stack' },
    { name: 'HTML5', role: 'Semantic & Accessible', badge: 'HTML', color: '#E44D26', tier: 'Advanced' },
    { name: 'CSS3 / Flex & Grid', role: 'Responsive Styling', badge: 'CSS', color: '#1572B6', tier: 'Advanced' },
    { name: 'Bootstrap', role: 'Rapid UI Prototyping', badge: 'Boot', color: '#7952B3', tier: 'Proficient' },
  ];

  const backendSkills = [
    { name: 'Node.js', role: 'Event-driven Runtime', badge: 'Node', color: '#68A063', tier: 'Core Stack' },
    { name: 'Express.js', role: 'REST Routing & Middleware', badge: 'EX', color: '#0f172a', tier: 'Core Stack' },
    { name: 'RESTful APIs', role: 'CRUD & Endpoints', badge: 'REST', color: '#2563eb', tier: 'Core Stack' },
    { name: 'JWT Auth & Security', role: 'Token Authorization', badge: 'JWT', color: '#0284c7', tier: 'Advanced' },
    { name: 'JSON', role: 'Data Serialization', badge: '{ }', color: '#F29111', tier: 'Proficient' },
  ];

  const databaseSkills = [
    { name: 'MongoDB', role: 'NoSQL Document Store', badge: 'DB', color: '#13AA52', tier: 'Core Stack' },
    { name: 'Mongoose ODM', role: 'Schema Modeling & Validation', badge: 'ODM', color: '#0284c7', tier: 'Core Stack' },
    { name: 'MySQL', role: 'Relational Queries & Tables', badge: 'SQL', color: '#00618A', tier: 'Advanced' },
    { name: 'Supabase Storage', role: 'Cloud DB & Asset Persistence', badge: 'Supa', color: '#3ECF8E', tier: 'Advanced' },
    { name: 'Data Modeling & Schemas', role: 'BSON Document Relations & Indexing', badge: '{ }', color: '#2563eb', tier: 'Advanced' },
  ];

  const toolSkills = [
    { name: 'Git', role: 'Distributed Version Control', badge: 'Git', color: '#F05032', tier: 'Advanced' },
    { name: 'GitHub', role: 'Collaboration & Hosting', badge: 'Hub', color: '#24292e', tier: 'Advanced' },
    { name: 'Postman', role: 'API Testing & Debugging', badge: 'API', color: '#FF6C37', tier: 'Advanced' },
    { name: 'VS Code', role: 'Primary Development IDE', badge: 'VS', color: '#007ACC', tier: 'Proficient' },
    { name: 'Vite', role: 'Fast Build Tooling', badge: '⚡', color: '#646CFF', tier: 'Proficient' },
  ];

  // Marquee item list (doubled for seamless infinite loop)
  const marqueeItems = [...skills, ...skills];

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
              <TerminalIcon sx={{ fontSize: '0.95rem', color: 'primary.main' }} />
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
                What I Know &amp; My Toolkit
              </Typography>
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.1rem', md: '2.3rem', lg: '2.6rem' },
                fontWeight: 800,
                letterSpacing: '-0.02em',
                mb: 1.2,
              }}
            >
              Technical Skills <span className="text-gradient">I Know</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: '650px',
                mx: 'auto',
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.88rem' },
                lineHeight: 1.6,
              }}
            >
              A comprehensive overview of the technical skills, frameworks, databases, and developer tools I have mastered and applied in building full-stack web applications.
            </Typography>

            {/* Category Filter Pills */}
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              flexWrap="wrap"
              useFlexGap
              sx={{ mt: 2.5 }}
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
          </Box>
        </ScrollReveal>

        {/* Infinite Tech Marquee Strip (Continuous Single-Row Scroll) */}
        <ScrollReveal delay={0.1}>
          <Box
          sx={{
            mb: { xs: 3.5, sm: 4, md: 4.5 },
            py: 1.5,
            px: 0,
            borderRadius: '16px',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 25px -4px rgba(15, 23, 42, 0.07), 0 3px 8px -2px rgba(15, 23, 42, 0.04)',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: { xs: '40px', sm: '80px' },
              zIndex: 2,
              pointerEvents: 'none',
            },
            '&::before': {
              left: 0,
              background: 'linear-gradient(to right, #f8fafc 30%, transparent 100%)',
            },
            '&::after': {
              right: 0,
              background: 'linear-gradient(to left, #f8fafc 30%, transparent 100%)',
            },
          }}
        >
          <Box
            className="animate-marquee"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
              width: 'max-content',
              alignItems: 'center',
            }}
          >
            {marqueeItems.map((item, idx) => (
              <Box
                key={`${item.name}-${idx}`}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  flexShrink: 0,
                  gap: 1.2,
                  px: 2.2,
                  py: 0.8,
                  mx: 0.8,
                  borderRadius: '12px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.03)',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    background: 'rgba(37, 99, 235, 0.04)',
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: item.color || '#2563eb',
                    boxShadow: `0 0 8px ${item.color || '#2563eb'}`,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#0f172a',
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </ScrollReveal>

        {/* Bento Grid Architecture */}
        <Grid container spacing={3}>
          {/* Card 1: Primary Full-Stack MERN Architecture (Full Width) */}
          {(activeTab === 'all' || activeTab === 'frontend' || activeTab === 'backend') && (
            <Grid item xs={12}>
              <ScrollReveal delay={0.1}>
                <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 20px 40px -8px rgba(37, 99, 235, 0.16), 0 8px 16px -4px rgba(15, 23, 42, 0.06)',
                  },
                }}
              >
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} md={5}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                      <Chip
                        label="PRIMARY ARCHITECTURE"
                        size="small"
                        sx={{
                          bgcolor: 'rgba(37, 99, 235, 0.08)',
                          color: 'primary.main',
                          border: '1px solid rgba(37, 99, 235, 0.25)',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          fontSize: '0.7rem',
                        }}
                      />
                    </Stack>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: '1.6rem', md: '2rem' },
                        fontWeight: 800,
                        color: '#0f172a',
                        mb: 1.5,
                      }}
                    >
                      MERN Full-Stack Pipeline
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        fontSize: '0.92rem',
                        mb: 2.5,
                      }}
                    >
                      Architected around cohesive JavaScript: connecting declarative React component trees with scalable Node.js/Express REST microservices and flexible MongoDB persistence.
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {['JWT Auth & RBAC', 'State Management', 'REST API Design', 'Async Architecture'].map((tag) => (
                        <Box
                          key={tag}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.6,
                            px: 1.2,
                            py: 0.4,
                            borderRadius: '8px',
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                          }}
                        >
                          <CheckCircleOutlineIcon sx={{ fontSize: '0.85rem', color: 'primary.main' }} />
                          <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#334155' }}>
                            {tag}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Grid>

                  {/* Right: Interactive MERN Stack Nodes */}
                  <Grid item xs={12} md={7}>
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr 1fr' },
                        gap: 2,
                      }}
                    >
                      {[
                        {
                          letter: 'M',
                          name: 'MongoDB',
                          role: 'NoSQL Data Store',
                          color: '#13AA52',
                          detail: 'BSON Document Storage',
                        },
                        {
                          letter: 'E',
                          name: 'Express.js',
                          role: 'Backend Framework',
                          color: '#0f172a',
                          detail: 'REST API & Routing',
                        },
                        {
                          letter: 'R',
                          name: 'React.js',
                          role: 'Frontend UI Library',
                          color: '#0284c7',
                          detail: 'SPA & Reactive Hooks',
                        },
                        {
                          letter: 'N',
                          name: 'Node.js',
                          role: 'JS Runtime Engine',
                          color: '#68A063',
                          detail: 'Async Event Loop',
                        },
                      ].map((tech) => (
                        <Box
                          key={tech.name}
                          sx={{
                            p: 2.2,
                            borderRadius: '16px',
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                            textAlign: 'center',
                            position: 'relative',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              background: '#ffffff',
                              borderColor: tech.color,
                              boxShadow: `0 8px 24px rgba(0,0,0,0.08), 0 0 16px ${tech.color}22`,
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: 44,
                              height: 44,
                              borderRadius: '50%',
                              mx: 'auto',
                              mb: 1.2,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: '#f8fafc',
                              border: `2px solid ${tech.color}`,
                              boxShadow: `0 0 12px ${tech.color}33`,
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 800,
                                fontSize: '1.2rem',
                                color: tech.color,
                              }}
                            >
                              {tech.letter}
                            </Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#0f172a', mb: 0.4 }}>
                            {tech.name}
                          </Typography>
                          <Typography sx={{ fontSize: '0.72rem', color: 'primary.main', fontWeight: 600, mb: 0.4 }}>
                            {tech.role}
                          </Typography>
                          <Typography sx={{ fontSize: '0.68rem', color: '#64748b' }}>
                            {tech.detail}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </ScrollReveal>
          </Grid>
        )}

          {/* Card 2: Frontend Engineering */}
          {(activeTab === 'all' || activeTab === 'frontend') && (
            <Grid item xs={12} md={activeTab === 'all' ? 6 : 8} sx={{ display: 'flex', mx: activeTab === 'all' ? 0 : 'auto' }}>
              <ScrollReveal delay={0.1} sx={{ width: '100%', height: '100%', display: 'flex' }}>
                <Box
                sx={{
                  p: { xs: 3, md: 3.5 },
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(97, 218, 251, 0.5)',
                    boxShadow: '0 20px 40px -8px rgba(15, 23, 42, 0.12), 0 0 20px rgba(97, 218, 251, 0.15)',
                  },
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(97, 218, 251, 0.12)',
                      border: '1px solid rgba(97, 218, 251, 0.3)',
                      color: '#61DAFB',
                    }}
                  >
                    <CodeIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>
                      Frontend & UI Architecture
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                      Component-driven, responsive user interfaces
                    </Typography>
                  </Box>
                </Stack>

                <Stack spacing={1.5} sx={{ mt: 1 }}>
                  {frontendSkills.map((skill) => (
                    <Box
                      key={skill.name}
                      sx={{
                        p: 1.5,
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          background: '#f1f5f9',
                          borderColor: skill.color,
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#ffffff',
                            border: `1px solid ${skill.color}55`,
                            color: skill.color,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '0.8rem',
                          }}
                        >
                          {skill.badge}
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                            {skill.name}
                          </Typography>
                          <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
                            {skill.role}
                          </Typography>
                        </Box>
                      </Stack>
                      <Chip
                        label={skill.tier}
                        size="small"
                        sx={{
                          height: '22px',
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          bgcolor: skill.tier === 'Core Stack' ? 'rgba(37, 99, 235, 0.08)' : '#ffffff',
                          color: skill.tier === 'Core Stack' ? 'primary.main' : '#64748b',
                          border: `1px solid ${skill.tier === 'Core Stack' ? 'rgba(37, 99, 235, 0.25)' : '#e2e8f0'}`,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>
            </ScrollReveal>
          </Grid>
        )}

          {/* Card 3: Backend & API Engineering */}
          {(activeTab === 'all' || activeTab === 'backend') && (
            <Grid item xs={12} md={activeTab === 'all' ? 6 : 8} sx={{ display: 'flex', mx: activeTab === 'all' ? 0 : 'auto' }}>
              <ScrollReveal delay={0.2} sx={{ width: '100%', height: '100%', display: 'flex' }}>
                <Box
                sx={{
                  p: { xs: 3, md: 3.5 },
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(104, 160, 99, 0.5)',
                    boxShadow: '0 20px 40px -8px rgba(15, 23, 42, 0.12), 0 0 20px rgba(104, 160, 99, 0.15)',
                  },
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(104, 160, 99, 0.12)',
                      border: '1px solid rgba(104, 160, 99, 0.3)',
                      color: '#68A063',
                    }}
                  >
                    <DnsIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>
                      Backend & Server Systems
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                      RESTful architecture, token auth & routing
                    </Typography>
                  </Box>
                </Stack>

                <Stack spacing={1.5} sx={{ mt: 1 }}>
                  {backendSkills.map((skill) => (
                    <Box
                      key={skill.name}
                      sx={{
                        p: 1.5,
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          background: '#f1f5f9',
                          borderColor: skill.color,
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#ffffff',
                            border: `1px solid ${skill.color}55`,
                            color: skill.color,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '0.8rem',
                          }}
                        >
                          {skill.badge}
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                            {skill.name}
                          </Typography>
                          <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
                            {skill.role}
                          </Typography>
                        </Box>
                      </Stack>
                      <Chip
                        label={skill.tier}
                        size="small"
                        sx={{
                          height: '22px',
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          bgcolor: skill.tier === 'Core Stack' ? 'rgba(37, 99, 235, 0.08)' : '#ffffff',
                          color: skill.tier === 'Core Stack' ? 'primary.main' : '#64748b',
                          border: `1px solid ${skill.tier === 'Core Stack' ? 'rgba(37, 99, 235, 0.25)' : '#e2e8f0'}`,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>
            </ScrollReveal>
          </Grid>
        )}

          {/* Card 4: Databases & Storage */}
          {(activeTab === 'all' || activeTab === 'database') && (
            <Grid item xs={12} md={activeTab === 'all' ? 6 : 8} sx={{ display: 'flex', mx: activeTab === 'all' ? 0 : 'auto' }}>
              <ScrollReveal delay={0.1} sx={{ width: '100%', height: '100%', display: 'flex' }}>
                <Box
                sx={{
                  p: { xs: 3, md: 3.5 },
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(19, 170, 82, 0.5)',
                    boxShadow: '0 20px 40px -8px rgba(15, 23, 42, 0.12), 0 0 20px rgba(19, 170, 82, 0.15)',
                  },
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(19, 170, 82, 0.12)',
                      border: '1px solid rgba(19, 170, 82, 0.3)',
                      color: '#13AA52',
                    }}
                  >
                    <StorageIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>
                      Database & Data Persistence
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                      Document & relational data modeling
                    </Typography>
                  </Box>
                </Stack>

                <Stack spacing={1.5} sx={{ mt: 1 }}>
                  {databaseSkills.map((skill) => (
                    <Box
                      key={skill.name}
                      sx={{
                        p: 1.5,
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          background: '#f1f5f9',
                          borderColor: skill.color,
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#ffffff',
                            border: `1px solid ${skill.color}55`,
                            color: skill.color,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '0.8rem',
                          }}
                        >
                          {skill.badge}
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                            {skill.name}
                          </Typography>
                          <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
                            {skill.role}
                          </Typography>
                        </Box>
                      </Stack>
                      <Chip
                        label={skill.tier}
                        size="small"
                        sx={{
                          height: '22px',
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          bgcolor: skill.tier === 'Core Stack' ? 'rgba(37, 99, 235, 0.08)' : '#ffffff',
                          color: skill.tier === 'Core Stack' ? 'primary.main' : '#64748b',
                          border: `1px solid ${skill.tier === 'Core Stack' ? 'rgba(37, 99, 235, 0.25)' : '#e2e8f0'}`,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>
            </ScrollReveal>
          </Grid>
        )}

          {/* Card 5: Dev Tools & Workflow */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <Grid item xs={12} md={activeTab === 'all' ? 6 : 8} sx={{ display: 'flex', mx: activeTab === 'all' ? 0 : 'auto' }}>
              <ScrollReveal delay={0.2} sx={{ width: '100%', height: '100%', display: 'flex' }}>
                <Box
                sx={{
                  p: { xs: 3, md: 3.5 },
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(240, 80, 50, 0.5)',
                    boxShadow: '0 20px 40px -8px rgba(15, 23, 42, 0.12), 0 0 20px rgba(240, 80, 50, 0.15)',
                  },
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(240, 80, 50, 0.12)',
                      border: '1px solid rgba(240, 80, 50, 0.3)',
                      color: '#F05032',
                    }}
                  >
                    <BuildIcon />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>
                      Dev Tools & Engineering Workflow
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                      Version control, API testing & build environments
                    </Typography>
                  </Box>
                </Stack>

                <Stack spacing={1.5} sx={{ mt: 1 }}>
                  {toolSkills.map((skill) => (
                    <Box
                      key={skill.name}
                      sx={{
                        p: 1.5,
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          background: '#f1f5f9',
                          borderColor: skill.color,
                          transform: 'translateX(4px)',
                        },
                      }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#ffffff',
                            border: `1px solid ${skill.color}55`,
                            color: skill.color,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '0.8rem',
                          }}
                        >
                          {skill.badge}
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>
                            {skill.name}
                          </Typography>
                          <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
                            {skill.role}
                          </Typography>
                        </Box>
                      </Stack>
                      <Chip
                        label={skill.tier}
                        size="small"
                        sx={{
                          height: '22px',
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          bgcolor: skill.tier === 'Core Stack' ? 'rgba(37, 99, 235, 0.08)' : '#ffffff',
                          color: skill.tier === 'Core Stack' ? 'primary.main' : '#64748b',
                          border: `1px solid ${skill.tier === 'Core Stack' ? 'rgba(37, 99, 235, 0.25)' : '#e2e8f0'}`,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>
            </ScrollReveal>
          </Grid>
        )}
      </Grid>
    </Container>
    </Box>
  );
}
