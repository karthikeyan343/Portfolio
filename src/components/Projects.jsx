import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  IconButton,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ScrollReveal from './ScrollReveal';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => (filter === 'Full-Stack' ? p.category === 'Full-Stack' : p.category !== 'Full-Stack'));

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 6, sm: 7, md: 8, lg: 9 },
        position: 'relative',
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
        {/* Section Header */}
        <ScrollReveal delay={0}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
              justifyContent: 'space-between',
              mb: { xs: 3.5, sm: 4, md: 4.5 },
              gap: 2,
            }}
          >
            <Box>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.8,
                  px: 1.5,
                  py: 0.45,
                  borderRadius: '100px',
                  backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  border: '1px solid rgba(37, 99, 235, 0.22)',
                  boxShadow: '0 2px 8px -2px rgba(37, 99, 235, 0.15)',
                  mb: 1,
                }}
              >
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#2563eb' }} />
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
                  Featured Works
                </Typography>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', sm: '2.1rem', md: '2.3rem', lg: '2.6rem' },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
                <span className="text-gradient">Engineered Projects</span>
              </Typography>
            </Box>

            {/* Category Filter Tabs */}
            <Tabs
              value={filter}
              onChange={(e, val) => setFilter(val)}
              sx={{
                minHeight: 36,
                bgcolor: '#f8fafc',
                p: 0.4,
                borderRadius: '10px',
                border: '1px solid #e2e8f0',
                '& .MuiTabs-indicator': {
                  height: '100%',
                  borderRadius: '7px',
                  bgcolor: 'rgba(37, 99, 235, 0.08)',
                  border: '1px solid rgba(37, 99, 235, 0.25)',
                  zIndex: 0,
                },
                '& .MuiTab-root': {
                  minHeight: 30,
                  py: 0.4,
                  px: 1.6,
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  textTransform: 'none',
                  color: '#64748b',
                  zIndex: 1,
                  borderRadius: '7px',
                  transition: 'color 0.2s ease',
                  '&.Mui-selected': { color: 'primary.main' },
                },
              }}
            >
              <Tab label="All Projects" value="All" />
              <Tab label="Full-Stack MERN" value="Full-Stack" />
              <Tab label="Frontend Web" value="Frontend" />
            </Tabs>
          </Box>
        </ScrollReveal>

        {/* Project Cards Grid (2 cards per row on Desktop, 1 on Mobile) */}
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 2.5 }} alignItems="stretch">
          {filteredProjects.map((project, idx) => (
            <Grid item xs={12} md={6} key={project.id}>
              <ScrollReveal delay={(idx % 2) * 0.15} sx={{ height: '100%', display: 'flex' }}>
                <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: '#ffffff',
                  borderRadius: { xs: 2.5, md: 3 },
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    borderColor: 'primary.main',
                    boxShadow: '0 20px 40px -8px rgba(37, 99, 235, 0.16), 0 8px 16px -4px rgba(15, 23, 42, 0.06)',
                  },
                }}
              >
                {/* Sleek Top Header Bar (macOS Window style + Status & Category) */}
                <Box
                  sx={{
                    px: { xs: 2, sm: 2.2 },
                    py: 1.1,
                    borderBottom: '1px solid #e2e8f0',
                    background: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* macOS dots + Monospace Repo Slug */}
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Stack direction="row" spacing={0.6} alignItems="center">
                      <Box sx={{ width: 7.5, height: 7.5, borderRadius: '50%', bgcolor: '#ef4444', opacity: 0.85 }} />
                      <Box sx={{ width: 7.5, height: 7.5, borderRadius: '50%', bgcolor: '#f59e0b', opacity: 0.85 }} />
                      <Box sx={{ width: 7.5, height: 7.5, borderRadius: '50%', bgcolor: '#10b981', opacity: 0.85 }} />
                    </Stack>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: '#64748b',
                        fontSize: '0.68rem',
                        fontWeight: 500,
                        ml: 0.4,
                      }}
                    >
                      karthik/{project.id}
                    </Typography>
                  </Stack>

                  {/* Status Badge & Category */}
                  <Stack direction="row" spacing={0.8} alignItems="center">
                    {project.demo && (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.5,
                          px: 0.8,
                          py: 0.2,
                          borderRadius: '5px',
                          bgcolor: 'rgba(37, 99, 235, 0.08)',
                          border: '1px solid rgba(37, 99, 235, 0.2)',
                        }}
                      >
                        <Box
                          sx={{
                            width: 5,
                            height: 5,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            boxShadow: '0 0 5px rgba(37, 99, 235, 0.4)',
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: 'primary.main',
                            fontSize: '0.62rem',
                            fontWeight: 700,
                            letterSpacing: '0.04em',
                          }}
                        >
                          LIVE
                        </Typography>
                      </Box>
                    )}

                    <Chip
                      label={project.category}
                      size="small"
                      sx={{
                        fontSize: '0.65rem',
                        height: 20,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 600,
                        bgcolor:
                          project.category === 'Full-Stack'
                            ? 'rgba(37, 99, 235, 0.08)'
                            : 'rgba(2, 132, 199, 0.08)',
                        color: project.category === 'Full-Stack' ? 'primary.main' : '#0284c7',
                        border: '1px solid',
                        borderColor:
                          project.category === 'Full-Stack'
                            ? 'rgba(37, 99, 235, 0.25)'
                            : 'rgba(2, 132, 199, 0.25)',
                      }}
                    />
                  </Stack>
                </Box>

                {/* Project Image Preview Banner */}
                {project.image && (
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: 135, sm: 150, md: 160 },
                      position: 'relative',
                      overflow: 'hidden',
                      borderBottom: '1px solid #e2e8f0',
                      bgcolor: '#f8fafc',
                    }}
                  >
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        transition: 'transform 0.35s ease',
                        '&:hover': {
                          transform: 'scale(1.03)',
                        },
                      }}
                    />
                  </Box>
                )}

                {/* Card Content Body */}
                <CardContent
                  sx={{
                    p: { xs: 2, sm: 2.2 },
                    pt: { xs: 1.8, sm: 2 },
                    pb: { xs: 1.8, sm: 2 },
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Project Subtitle Domain */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'primary.main',
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontSize: '0.68rem',
                      mb: 0.4,
                    }}
                  >
                    {project.subtitle}
                  </Typography>

                  {/* Project Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.05rem', sm: '1.12rem', md: '1.18rem' },
                      fontWeight: 750,
                      color: '#0f172a',
                      mb: 0.8,
                      lineHeight: 1.3,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title}
                  </Typography>

                  {/* Concise Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#475569',
                      fontSize: '0.80rem',
                      lineHeight: 1.55,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      mb: 1.6,
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Key Architectural Highlights (clean, high-impact bullet points) */}
                  <Box
                    sx={{
                      mb: 1.6,
                      p: 1.3,
                      px: 1.5,
                      borderRadius: 2,
                      bgcolor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 0.8,
                    }}
                  >
                    {project.highlights?.map((highlight, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <Box
                          sx={{
                            width: 15,
                            height: 15,
                            borderRadius: '50%',
                            bgcolor: 'rgba(37, 99, 235, 0.08)',
                            color: 'primary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.62rem',
                            fontWeight: 800,
                            flexShrink: 0,
                            mt: '2px',
                          }}
                        >
                          ✓
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#334155',
                            fontSize: '0.76rem',
                            lineHeight: 1.4,
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                          }}
                        >
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Tech Stack Tokens */}
                  <Stack direction="row" spacing={0.6} flexWrap="wrap" useFlexGap sx={{ mb: 1.8 }}>
                    {project.tags.map((tag) => (
                      <Box
                        key={tag}
                        sx={{
                          px: 0.9,
                          py: 0.25,
                          borderRadius: '5px',
                          bgcolor: '#f1f5f9',
                          border: '1px solid #e2e8f0',
                          color: '#475569',
                          fontSize: '0.68rem',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontWeight: 500,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: 'rgba(37, 99, 235, 0.06)',
                            borderColor: 'primary.main',
                            color: 'primary.main',
                          },
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Stack>

                  {/* Actions (Solid Live Demo CTA + Outlined GitHub + Architecture Deep Dive) */}
                  <Box
                    sx={{
                      mt: 'auto',
                      pt: 1.6,
                      borderTop: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 1.2,
                    }}
                  >
                    <Stack direction="row" spacing={1.2} alignItems="center">
                      {project.demo && (
                        <Button
                          size="small"
                          variant="contained"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          endIcon={<LaunchIcon sx={{ fontSize: '0.85rem !important' }} />}
                          sx={{
                            bgcolor: 'primary.main',
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: '0.76rem',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            px: 1.5,
                            py: 0.5,
                            borderRadius: '6px',
                            textTransform: 'none',
                            boxShadow: '0 3px 10px rgba(37, 99, 235, 0.25)',
                            '&:hover': {
                              bgcolor: 'primary.dark',
                              boxShadow: '0 5px 16px rgba(37, 99, 235, 0.4)',
                            },
                          }}
                        >
                          Live Demo
                        </Button>
                      )}

                      <Button
                        size="small"
                        variant="outlined"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<GitHubIcon sx={{ fontSize: '0.9rem !important' }} />}
                        sx={{
                          borderColor: '#cbd5e1',
                          color: '#0f172a',
                          fontWeight: 600,
                          fontSize: '0.76rem',
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          px: 1.3,
                          py: 0.5,
                          borderRadius: '6px',
                          textTransform: 'none',
                          '&:hover': {
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            bgcolor: 'rgba(37, 99, 235, 0.06)',
                          },
                        }}
                      >
                        Source Code
                      </Button>
                    </Stack>

                    <Button
                      size="small"
                      variant="text"
                      onClick={() => setActiveModalProject(project)}
                      endIcon={<ArrowForwardIcon sx={{ fontSize: '0.88rem !important' }} />}
                      sx={{
                        color: '#64748b',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        textTransform: 'none',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      Architecture
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </ScrollReveal>
          </Grid>
          ))}
        </Grid>
      </Container>

      {/* Case Study / Project Architecture Modal */}
      <Dialog
        open={Boolean(activeModalProject)}
        onClose={() => setActiveModalProject(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: '#ffffff',
            borderRadius: 3.5,
            border: '1px solid rgba(15, 23, 42, 0.12)',
            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.15)',
          },
        }}
      >
        {activeModalProject && (
          <>
            <DialogTitle
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
                pb: 1.8,
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#0f172a', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {activeModalProject.title}
                </Typography>
                <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  {activeModalProject.subtitle} &bull; {activeModalProject.category}
                </Typography>
              </Box>
              <IconButton size="small" onClick={() => setActiveModalProject(null)} sx={{ color: '#64748b', '&:hover': { color: '#0f172a' } }}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ pt: 2.5 }}>
              {activeModalProject.image && (
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 180, sm: 260, md: 320 },
                    borderRadius: 2.5,
                    overflow: 'hidden',
                    mb: 3,
                    border: '1px solid #e2e8f0',
                    bgcolor: '#f8fafc',
                  }}
                >
                  <Box
                    component="img"
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                    }}
                  />
                </Box>
              )}
              <Box sx={{ mb: 2.5 }}>
                <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 700, mb: 0.5 }}>
                  Project Overview
                </Typography>
                <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.88rem' }}>
                  {activeModalProject.description}
                </Typography>
              </Box>

              <Box sx={{ mb: 2.5, p: 2, bgcolor: '#f8fafc', borderRadius: 2.5, border: '1px solid #e2e8f0' }}>
                <Typography variant="subtitle2" sx={{ color: '#d97706', fontWeight: 700, mb: 0.5, fontSize: '0.85rem' }}>
                  Key Engineering Challenge
                </Typography>
                <Typography variant="body2" sx={{ color: '#334155', lineHeight: 1.6, mb: 1.8, fontSize: '0.85rem' }}>
                  {activeModalProject.challenge}
                </Typography>

                <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5, fontSize: '0.85rem' }}>
                  Implemented Architectural Solution
                </Typography>
                <Typography variant="body2" sx={{ color: '#334155', lineHeight: 1.6, fontSize: '0.85rem' }}>
                  {activeModalProject.solution}
                </Typography>
              </Box>

              <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 700, mb: 1 }}>
                Technologies & Tools
              </Typography>
              <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                {activeModalProject.tags.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{
                      bgcolor: '#f1f5f9',
                      color: 'primary.main',
                      border: '1px solid #e2e8f0',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Stack>
            </DialogContent>
            <DialogActions sx={{ p: 2.5, borderTop: '1px solid rgba(15, 23, 42, 0.08)', gap: 1 }}>
              <Button
                variant="outlined"
                href={activeModalProject.github}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
                sx={{ borderColor: '#cbd5e1', color: '#0f172a', textTransform: 'none', borderRadius: '8px' }}
              >
                View Repository
              </Button>
              {activeModalProject.demo && (
                <Button
                  variant="contained"
                  href={activeModalProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<LaunchIcon />}
                  sx={{
                    bgcolor: 'primary.main',
                    color: '#ffffff',
                    fontWeight: 700,
                    textTransform: 'none',
                    borderRadius: '8px',
                    '&:hover': { bgcolor: 'primary.dark' },
                  }}
                >
                  Open Live App
                </Button>
              )}
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}