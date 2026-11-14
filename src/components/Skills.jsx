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
    { name: 'Express.js', role: 'REST Routing & Middleware', badge: 'EX', color: '#ffffff', tier: 'Core Stack' },
    { name: 'RESTful APIs', role: 'CRUD & Endpoints', badge: 'REST', color: '#1ae5b7', tier: 'Core Stack' },
    { name: 'JWT Auth & Security', role: 'Token Authorization', badge: 'JWT', color: '#a855f7', tier: 'Advanced' },
    { name: 'JSON', role: 'Data Serialization', badge: '{ }', color: '#F29111', tier: 'Proficient' },
  ];

  const databaseSkills = [
    { name: 'MongoDB', role: 'NoSQL Document Store', badge: 'DB', color: '#13AA52', tier: 'Core Stack' },
    { name: 'Mongoose ODM', role: 'Schema Modeling & Validation', badge: 'ODM', color: '#1ae5b7', tier: 'Advanced' },
    { name: 'MySQL', role: 'Relational Queries & Tables', badge: 'SQL', color: '#00618A', tier: 'Proficient' },
  ];

  const toolSkills = [
    { name: 'Git', role: 'Distributed Version Control', badge: 'Git', color: '#F05032', tier: 'Advanced' },
    { name: 'GitHub', role: 'Collaboration & Hosting', badge: 'Hub', color: '#ffffff', tier: 'Advanced' },
    { name: 'Postman', role: 'API Testing & Debugging', badge: 'API', color: '#FF6C37', tier: 'Advanced' },
    { name: 'VS Code', role: 'Primary Development IDE', badge: 'VS', color: '#007ACC', tier: 'Proficient' },
    { name: 'Vite', role: 'Fast Build Tooling', badge: '⚡', color: '#646CFF', tier: 'Proficient' },
    { name: 'Java', role: 'Object-Oriented Programming', badge: 'Java', color: '#007396', tier: 'Foundational' },
  ];

  // Marquee item list (doubled for seamless infinite loop)
  const marqueeItems = [...skills, ...skills];

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        backgroundColor: '#0a0e14',
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
          background: 'radial-gradient(circle, rgba(26, 229, 183, 0.08) 0%, rgba(26, 229, 183, 0) 70%)',
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
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 1.5 }}>
            <TerminalIcon sx={{ fontSize: '1rem', color: 'primary.main' }} />
            <Typography
              variant="body2"
              sx={{
                color: 'primary.main',
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
              }}
            >
              What I Know & My Toolkit
            </Typography>
          </Stack>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              mb: 2,
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
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              lineHeight: 1.7,
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
            sx={{ mt: 3.5 }}
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
                    bgcolor: active ? 'primary.main' : 'rgba(255, 255, 255, 0.03)',
                    color: active ? '#0e131b' : 'text.secondary',
                    borderColor: active ? 'primary.main' : 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      bgcolor: active ? 'primary.main' : 'rgba(26, 229, 183, 0.1)',
                      borderColor: 'primary.main',
                      color: active ? '#0e131b' : 'primary.main',
                    },
                  }}
                >
                  {cat.label}
                </Button>
              );
            })}
          </Stack>
        </Box>

        {/* Infinite Tech Marquee Strip */}
        <Box
          sx={{
            mb: { xs: 5, md: 7 },
            py: 1.5,
            px: 2,
            borderRadius: '16px',
            background: 'rgba(20, 28, 38, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
            overflow: 'hidden',
            position: 'relative',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '60px',
              zIndex: 2,
              pointerEvents: 'none',
            },
            '&::before': {
              left: 0,
              background: 'linear-gradient(to right, #0a0e14, transparent)',
            },
            '&::after': {
              right: 0,
              background: 'linear-gradient(to left, #0a0e14, transparent)',
            },
          }}
        >
          <Box className="animate-marquee">
            {marqueeItems.map((item, idx) => (
              <Box
                key={`${item.name}-${idx}`}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.2,
                  px: 2.2,
                  py: 0.8,
                  mx: 0.8,
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    background: 'rgba(26, 229, 183, 0.08)',
                    borderColor: 'rgba(26, 229, 183, 0.4)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: item.color || '#1ae5b7',
                    boxShadow: `0 0 8px ${item.color || '#1ae5b7'}`,
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Bento Grid Architecture */}
        <Grid container spacing={3}>
          {/* Card 1: Primary Full-Stack MERN Architecture (Full Width) */}
          {(activeTab === 'all' || activeTab === 'frontend' || activeTab === 'backend') && (
            <Grid item xs={12}>
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: '24px',
                  background: 'linear-gradient(135deg, rgba(20, 28, 38, 0.85) 0%, rgba(14, 19, 27, 0.95) 100%)',
                  border: '1px solid rgba(26, 229, 183, 0.25)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(26, 229, 183, 0.5)',
                    boxShadow: '0 24px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(26, 229, 183, 0.15)',
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
                          bgcolor: 'rgba(26, 229, 183, 0.12)',
                          color: '#1ae5b7',
                          border: '1px solid rgba(26, 229, 183, 0.35)',
                          fontFamily: "'Manrope', sans-serif",
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
                        color: '#ffffff',
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
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                          }}
                        >
                          <CheckCircleOutlineIcon sx={{ fontSize: '0.85rem', color: '#1ae5b7' }} />
                          <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'text.secondary' }}>
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
                          color: '#ffffff',
                          detail: 'REST API & Routing',
                        },
                        {
                          letter: 'R',
                          name: 'React.js',
                          role: 'Frontend UI Library',
                          color: '#61DAFB',
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
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            textAlign: 'center',
                            position: 'relative',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              background: 'rgba(255, 255, 255, 0.06)',
                              borderColor: tech.color,
                              boxShadow: `0 8px 24px rgba(0,0,0,0.4), 0 0 16px ${tech.color}33`,
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
                              background: 'rgba(14, 19, 27, 0.8)',
                              border: `2px solid ${tech.color}`,
                              boxShadow: `0 0 12px ${tech.color}44`,
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "'Manrope', sans-serif",
                                fontWeight: 800,
                                fontSize: '1.2rem',
                                color: tech.color,
                              }}
                            >
                              {tech.letter}
                            </Typography>
                          </Box>
                          <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff', mb: 0.4 }}>
                            {tech.name}
                          </Typography>
                          <Typography sx={{ fontSize: '0.72rem', color: 'primary.main', fontWeight: 600, mb: 0.4 }}>
                            {tech.role}
                          </Typography>
                          <Typography sx={{ fontSize: '0.68rem', color: 'text.secondary' }}>
                            {tech.detail}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          )}

          {/* Card 2: Frontend Engineering */}
          {(activeTab === 'all' || activeTab === 'frontend') && (
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: { xs: 3, md: 3.5 },
                  height: '100%',
                  borderRadius: '20px',
                  background: 'rgba(20, 28, 38, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(97, 218, 251, 0.4)',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(97, 218, 251, 0.1)',
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
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
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
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.05)',
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
                            background: 'rgba(14, 19, 27, 0.9)',
                            border: `1px solid ${skill.color}55`,
                            color: skill.color,
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 700,
                            fontSize: '0.8rem',
                          }}
                        >
                          {skill.badge}
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#ffffff' }}>
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
                          fontFamily: "'Manrope', sans-serif",
                          bgcolor: skill.tier === 'Core Stack' ? 'rgba(26, 229, 183, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                          color: skill.tier === 'Core Stack' ? '#1ae5b7' : 'text.secondary',
                          border: `1px solid ${skill.tier === 'Core Stack' ? 'rgba(26, 229, 183, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          )}

          {/* Card 3: Backend & API Engineering */}
          {(activeTab === 'all' || activeTab === 'backend') && (
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: { xs: 3, md: 3.5 },
                  height: '100%',
                  borderRadius: '20px',
                  background: 'rgba(20, 28, 38, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(104, 160, 99, 0.4)',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(104, 160, 99, 0.1)',
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
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
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
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.05)',
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
                            background: 'rgba(14, 19, 27, 0.9)',
                            border: `1px solid ${skill.color}55`,
                            color: skill.color,
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 700,
                            fontSize: '0.8rem',
                          }}
                        >
                          {skill.badge}
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#ffffff' }}>
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
                          fontFamily: "'Manrope', sans-serif",
                          bgcolor: skill.tier === 'Core Stack' ? 'rgba(26, 229, 183, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                          color: skill.tier === 'Core Stack' ? '#1ae5b7' : 'text.secondary',
                          border: `1px solid ${skill.tier === 'Core Stack' ? 'rgba(26, 229, 183, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          )}

          {/* Card 4: Databases & Storage */}
          {(activeTab === 'all' || activeTab === 'database') && (
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: { xs: 3, md: 3.5 },
                  height: '100%',
                  borderRadius: '20px',
                  background: 'rgba(20, 28, 38, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(19, 170, 82, 0.4)',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(19, 170, 82, 0.1)',
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
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
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
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.05)',
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
                            background: 'rgba(14, 19, 27, 0.9)',
                            border: `1px solid ${skill.color}55`,
                            color: skill.color,
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 700,
                            fontSize: '0.8rem',
                          }}
                        >
                          {skill.badge}
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#ffffff' }}>
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
                          fontFamily: "'Manrope', sans-serif",
                          bgcolor: skill.tier === 'Core Stack' ? 'rgba(26, 229, 183, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                          color: skill.tier === 'Core Stack' ? '#1ae5b7' : 'text.secondary',
                          border: `1px solid ${skill.tier === 'Core Stack' ? 'rgba(26, 229, 183, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          )}

          {/* Card 5: Dev Tools & Workflow */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: { xs: 3, md: 3.5 },
                  height: '100%',
                  borderRadius: '20px',
                  background: 'rgba(20, 28, 38, 0.65)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(240, 80, 50, 0.4)',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(240, 80, 50, 0.1)',
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
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>
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
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          background: 'rgba(255, 255, 255, 0.05)',
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
                            background: 'rgba(14, 19, 27, 0.9)',
                            border: `1px solid ${skill.color}55`,
                            color: skill.color,
                            fontFamily: "'Manrope', sans-serif",
                            fontWeight: 700,
                            fontSize: '0.8rem',
                          }}
                        >
                          {skill.badge}
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: '#ffffff' }}>
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
                          fontFamily: "'Manrope', sans-serif",
                          bgcolor: skill.tier === 'Core Stack' ? 'rgba(26, 229, 183, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                          color: skill.tier === 'Core Stack' ? '#1ae5b7' : 'text.secondary',
                          border: `1px solid ${skill.tier === 'Core Stack' ? 'rgba(26, 229, 183, 0.3)' : 'rgba(255, 255, 255, 0.08)'}`,
                        }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
