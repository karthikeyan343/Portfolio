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
        py: { xs: 8, md: 12 },
        position: 'relative',
        background: 'linear-gradient(180deg, #0e131b 0%, #111722 50%, #0e131b 100%)',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'flex-end' },
            justifyContent: 'space-between',
            mb: { xs: 4, md: 6 },
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: 'primary.main',
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                mb: 0.5,
              }}
            >
              Featured Works
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 800,
                lineHeight: 1.15,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
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
              minHeight: 40,
              bgcolor: 'rgba(255, 255, 255, 0.03)',
              p: 0.5,
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              '& .MuiTabs-indicator': {
                height: '100%',
                borderRadius: '8px',
                bgcolor: 'rgba(26, 229, 183, 0.12)',
                border: '1px solid rgba(26, 229, 183, 0.3)',
                zIndex: 0,
              },
              '& .MuiTab-root': {
                minHeight: 34,
                py: 0.5,
                px: 2,
                fontSize: '0.82rem',
                fontWeight: 600,
                fontFamily: "'Manrope', sans-serif",
                textTransform: 'none',
                color: '#94a3b8',
                zIndex: 1,
                borderRadius: '8px',
                transition: 'color 0.2s ease',
                '&.Mui-selected': { color: '#1ae5b7' },
              },
            }}
          >
            <Tab label="All Projects" value="All" />
            <Tab label="Full-Stack MERN" value="Full-Stack" />
            <Tab label="Frontend Web" value="Frontend" />
          </Tabs>
        </Box>

        {/* Project Cards Grid (2 cards per row on Desktop, 1 on Mobile) */}
        <Grid container spacing={3.5} alignItems="stretch">
          {filteredProjects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'rgba(19, 27, 40, 0.75)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: 4,
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.45)',
                  transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    borderColor: 'rgba(26, 229, 183, 0.38)',
                    boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7), 0 0 25px rgba(26, 229, 183, 0.12)',
                  },
                }}
              >
                {/* Sleek Top Header Bar (macOS Window style + Status & Category) */}
                <Box
                  sx={{
                    px: 3,
                    py: 1.8,
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* macOS dots + Monospace Repo Slug */}
                  <Stack direction="row" spacing={1.2} alignItems="center">
                    <Stack direction="row" spacing={0.8} alignItems="center">
                      <Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: '#ef4444', opacity: 0.85 }} />
                      <Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: '#f59e0b', opacity: 0.85 }} />
                      <Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: '#10b981', opacity: 0.85 }} />
                    </Stack>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "'Fira Code', monospace",
                        color: '#64748b',
                        fontSize: '0.74rem',
                        fontWeight: 500,
                        ml: 0.5,
                      }}
                    >
                      karthik/{project.id}
                    </Typography>
                  </Stack>

                  {/* Status Badge & Category */}
                  <Stack direction="row" spacing={1} alignItems="center">
                    {project.demo && (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 0.6,
                          px: 1,
                          py: 0.25,
                          borderRadius: '6px',
                          bgcolor: 'rgba(26, 229, 183, 0.08)',
                          border: '1px solid rgba(26, 229, 183, 0.2)',
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            bgcolor: '#1ae5b7',
                            boxShadow: '0 0 6px #1ae5b7',
                          }}
                        />
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#1ae5b7',
                            fontSize: '0.68rem',
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
                        fontSize: '0.7rem',
                        height: 22,
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 600,
                        bgcolor:
                          project.category === 'Full-Stack'
                            ? 'rgba(26, 229, 183, 0.12)'
                            : 'rgba(168, 85, 247, 0.12)',
                        color: project.category === 'Full-Stack' ? '#1ae5b7' : '#c084fc',
                        border: '1px solid',
                        borderColor:
                          project.category === 'Full-Stack'
                            ? 'rgba(26, 229, 183, 0.25)'
                            : 'rgba(168, 85, 247, 0.25)',
                      }}
                    />
                  </Stack>
                </Box>

                {/* Card Content Body */}
                <CardContent sx={{ p: 3, pb: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Project Subtitle Domain */}
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'primary.main',
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontSize: '0.74rem',
                      mb: 0.8,
                    }}
                  >
                    {project.subtitle}
                  </Typography>

                  {/* Project Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '1.25rem', md: '1.38rem' },
                      fontWeight: 750,
                      color: '#ffffff',
                      mb: 1.2,
                      lineHeight: 1.3,
                      fontFamily: "'Manrope', sans-serif",
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title}
                  </Typography>

                  {/* Concise Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#94a3b8',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      fontFamily: "'Manrope', sans-serif",
                      mb: 2.5,
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Key Architectural Highlights (clean, high-impact bullet points) */}
                  <Box
                    sx={{
                      mb: 2.5,
                      p: 2,
                      borderRadius: 2.5,
                      bgcolor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.1,
                    }}
                  >
                    {project.highlights?.map((highlight, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.2 }}>
                        <Box
                          sx={{
                            width: 17,
                            height: 17,
                            borderRadius: '50%',
                            bgcolor: 'rgba(26, 229, 183, 0.12)',
                            color: '#1ae5b7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.68rem',
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
                            color: '#cbd5e1',
                            fontSize: '0.82rem',
                            lineHeight: 1.45,
                            fontFamily: "'Manrope', sans-serif",
                          }}
                        >
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Tech Stack Tokens */}
                  <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap sx={{ mb: 2.8 }}>
                    {project.tags.map((tag) => (
                      <Box
                        key={tag}
                        sx={{
                          px: 1.2,
                          py: 0.35,
                          borderRadius: '6px',
                          bgcolor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#94a3b8',
                          fontSize: '0.73rem',
                          fontFamily: "'Fira Code', monospace",
                          fontWeight: 500,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: 'rgba(26, 229, 183, 0.08)',
                            borderColor: 'rgba(26, 229, 183, 0.3)',
                            color: '#1ae5b7',
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
                      pt: 2.2,
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 1.5,
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      {project.demo && (
                        <Button
                          size="small"
                          variant="contained"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          endIcon={<LaunchIcon sx={{ fontSize: '0.9rem !important' }} />}
                          sx={{
                            bgcolor: '#1ae5b7',
                            color: '#090d16',
                            fontWeight: 700,
                            fontSize: '0.82rem',
                            fontFamily: "'Manrope', sans-serif",
                            px: 1.8,
                            py: 0.65,
                            borderRadius: '8px',
                            textTransform: 'none',
                            boxShadow: '0 4px 14px rgba(26, 229, 183, 0.25)',
                            '&:hover': {
                              bgcolor: '#17cf9e',
                              boxShadow: '0 6px 20px rgba(26, 229, 183, 0.4)',
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
                        startIcon={<GitHubIcon sx={{ fontSize: '1rem !important' }} />}
                        sx={{
                          borderColor: 'rgba(255, 255, 255, 0.15)',
                          color: '#e2e8f0',
                          fontWeight: 600,
                          fontSize: '0.82rem',
                          fontFamily: "'Manrope', sans-serif",
                          px: 1.6,
                          py: 0.65,
                          borderRadius: '8px',
                          textTransform: 'none',
                          '&:hover': {
                            borderColor: '#1ae5b7',
                            color: '#1ae5b7',
                            bgcolor: 'rgba(26, 229, 183, 0.06)',
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
                      endIcon={<ArrowForwardIcon sx={{ fontSize: '0.95rem !important' }} />}
                      sx={{
                        color: '#94a3b8',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        fontFamily: "'Manrope', sans-serif",
                        textTransform: 'none',
                        '&:hover': {
                          color: '#ffffff',
                        },
                      }}
                    >
                      Architecture
                    </Button>
                  </Box>
                </CardContent>
              </Card>
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
            bgcolor: '#121924',
            borderRadius: 3.5,
            border: '1px solid rgba(26, 229, 183, 0.28)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.85)',
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
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                pb: 1.8,
              }}
            >
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#ffffff', fontFamily: "'Manrope', sans-serif" }}>
                  {activeModalProject.title}
                </Typography>
                <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600 }}>
                  {activeModalProject.subtitle} &bull; {activeModalProject.category}
                </Typography>
              </Box>
              <IconButton size="small" onClick={() => setActiveModalProject(null)} sx={{ color: '#94a3b8', '&:hover': { color: '#ffffff' } }}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ pt: 2.5 }}>
              <Box sx={{ mb: 2.5 }}>
                <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 700, mb: 0.5 }}>
                  Project Overview
                </Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.88rem' }}>
                  {activeModalProject.description}
                </Typography>
              </Box>

              <Box sx={{ mb: 2.5, p: 2, bgcolor: 'rgba(0, 0, 0, 0.3)', borderRadius: 2.5, border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <Typography variant="subtitle2" sx={{ color: '#f59e0b', fontWeight: 700, mb: 0.5, fontSize: '0.85rem' }}>
                  Key Engineering Challenge
                </Typography>
                <Typography variant="body2" sx={{ color: '#cbd5e1', lineHeight: 1.6, mb: 1.8, fontSize: '0.85rem' }}>
                  {activeModalProject.challenge}
                </Typography>

                <Typography variant="subtitle2" sx={{ color: '#1ae5b7', fontWeight: 700, mb: 0.5, fontSize: '0.85rem' }}>
                  Implemented Architectural Solution
                </Typography>
                <Typography variant="body2" sx={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '0.85rem' }}>
                  {activeModalProject.solution}
                </Typography>
              </Box>

              <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 700, mb: 1 }}>
                Technologies & Tools
              </Typography>
              <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                {activeModalProject.tags.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(26, 229, 183, 0.08)',
                      color: '#1ae5b7',
                      border: '1px solid rgba(26, 229, 183, 0.25)',
                      fontFamily: "'Fira Code', monospace",
                      fontSize: '0.75rem',
                    }}
                  />
                ))}
              </Stack>
            </DialogContent>
            <DialogActions sx={{ p: 2.5, borderTop: '1px solid rgba(255, 255, 255, 0.08)', gap: 1 }}>
              <Button
                variant="outlined"
                href={activeModalProject.github}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
                sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', textTransform: 'none', borderRadius: '8px' }}
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
                    bgcolor: '#1ae5b7',
                    color: '#090d16',
                    fontWeight: 700,
                    textTransform: 'none',
                    borderRadius: '8px',
                    '&:hover': { bgcolor: '#17cf9e' },
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