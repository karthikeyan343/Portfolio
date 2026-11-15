import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TerminalIcon from '@mui/icons-material/Terminal';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { label: 'About', href: '#hero', icon: PersonOutlineIcon },
  { label: 'Experience', href: '#experience', icon: WorkOutlineIcon },
  { label: 'Skills', href: '#skills', icon: TerminalIcon },
  { label: 'Projects', href: '#projects', icon: RocketLaunchOutlinedIcon },
  { label: 'Education', href: '#education', icon: SchoolOutlinedIcon },
  { label: 'Contact', href: '#contact', icon: EmailOutlinedIcon },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Check if user is scrolled near the bottom of the page (then contact must be active)
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      const sections = ['hero', 'experience', 'skills', 'projects', 'education', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260 && rect.bottom >= 80) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const sectionId = href.replace('#', '');
    setActiveSection(sectionId);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid',
          borderColor: scrolled ? 'rgba(15, 23, 42, 0.08)' : 'transparent',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.04)' : 'none',
          transition: 'all 0.3s ease',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4, lg: 5 } }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 72 } }}>
            {/* Logo */}
            <Box
              component="a"
              href="#hero"
              sx={{
                width: { xs: 42, md: 46 },
                height: { xs: 42, md: 46 },
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                cursor: 'pointer',
                background: '#ffffff',
                border: '1px solid rgba(15, 23, 42, 0.12)',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  background: 'rgba(37, 99, 235, 0.04)',
                  borderColor: 'primary.main',
                  boxShadow: '0 0 16px rgba(37, 99, 235, 0.25)',
                  transform: 'scale(1.06)',
                },
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: '1.15rem', md: '1.25rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}
              >
                <span className="text-gradient">SK</span>
              </Typography>
            </Box>

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <Button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: isActive ? 'primary.main' : 'text.secondary',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.88rem',
                      px: 1.8,
                      py: 0.8,
                      borderRadius: '8px',
                      backgroundColor: isActive ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: isActive ? 'rgba(37, 99, 235, 0.12)' : 'rgba(37, 99, 235, 0.06)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}

              {/* Resume Button */}
              <Button
                variant="outlined"
                color="primary"
                size="small"
                href="/asset/Karthikeyan_S_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FileDownloadOutlinedIcon sx={{ fontSize: '1rem !important' }} />}
                sx={{
                  ml: 1.5,
                  borderColor: 'rgba(37, 99, 235, 0.35)',
                  color: 'primary.main',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: 'rgba(37, 99, 235, 0.08)',
                  },
                }}
              >
                Resume
              </Button>

              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleNavClick('#contact')}
                startIcon={<EmailOutlinedIcon sx={{ fontSize: '1rem !important' }} />}
                sx={{
                  ml: 1,
                  bgcolor: 'primary.main',
                  color: '#ffffff',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
                Hire Me
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none' },
                color: 'text.primary',
                p: 1,
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
                '&:hover': {
                  backgroundColor: 'rgba(37, 99, 235, 0.06)',
                  borderColor: 'primary.main',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Professional Mobile Slide-Over Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: (theme) => theme.zIndex.modal + 10,
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(15, 23, 42, 0.45)',
            backdropFilter: 'blur(6px)',
          },
          '& .MuiDrawer-paper': {
            width: { xs: '84vw', sm: 360 },
            maxWidth: 380,
            height: '100%',
            backgroundColor: '#ffffff',
            backgroundImage: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '-8px 0 36px rgba(15, 23, 42, 0.12)',
            borderLeft: '1px solid #e2e8f0',
          },
        }}
      >
        {/* Drawer Header */}
        <Box sx={{ p: 2.5, pb: 2, borderBottom: '1px solid #f1f5f9' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                  border: '1px solid rgba(15, 23, 42, 0.12)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}
                >
                  <span className="text-gradient">SK</span>
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: '#0f172a', lineHeight: 1.2 }}>
                  {portfolioData.personal.name}
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 500, mt: 0.2 }}>
                  MERN Stack Developer
                </Typography>
              </Box>
            </Box>

            <IconButton
              onClick={handleDrawerToggle}
              size="small"
              sx={{
                p: 0.8,
                color: '#64748b',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                '&:hover': {
                  color: '#0f172a',
                  backgroundColor: '#f1f5f9',
                },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Availability Pill */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 1.4,
              py: 0.5,
              borderRadius: '100px',
              backgroundColor: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.22)',
            }}
          >
            <Box
              sx={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                backgroundColor: '#10b981',
                animation: 'pulseStatus 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                '@keyframes pulseStatus': {
                  '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)' },
                  '70%': { transform: 'scale(1)', boxShadow: '0 0 0 6px rgba(16, 185, 129, 0)' },
                  '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(16, 185, 129, 0)' },
                },
              }}
            />
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#059669', letterSpacing: '0.01em' }}>
              Available for Opportunities
            </Typography>
          </Box>
        </Box>

        {/* Navigation Items List */}
        <Box sx={{ flex: 1, overflowY: 'auto', px: 2, py: 1.5 }}>
          <Typography
            sx={{
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#94a3b8',
              letterSpacing: '0.08em',
              px: 1.2,
              mb: 1,
            }}
          >
            Navigation
          </Typography>
          <List disablePadding>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              const IconComponent = item.icon;
              return (
                <ListItem key={item.label} disablePadding sx={{ my: 0.4 }}>
                  <ListItemButton
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      borderRadius: '12px',
                      py: 1.15,
                      px: 1.6,
                      color: isActive ? 'primary.main' : '#334155',
                      backgroundColor: isActive ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                      border: '1px solid',
                      borderColor: isActive ? 'rgba(37, 99, 235, 0.22)' : 'transparent',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: isActive ? 'rgba(37, 99, 235, 0.12)' : 'rgba(241, 245, 249, 0.8)',
                        transform: 'translateX(3px)',
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 38,
                        color: isActive ? 'primary.main' : '#64748b',
                      }}
                    >
                      <IconComponent sx={{ fontSize: '1.25rem' }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: '0.94rem',
                        fontWeight: isActive ? 700 : 500,
                      }}
                    />
                    <ChevronRightIcon
                      sx={{
                        fontSize: '1.15rem',
                        color: isActive ? 'primary.main' : '#cbd5e1',
                        transition: 'transform 0.2s',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* Bottom Docked Section */}
        <Box
          sx={{
            p: 2.2,
            borderTop: '1px solid #f1f5f9',
            backgroundColor: '#f8fafc',
          }}
        >
          {/* Quick Action Buttons */}
          <Stack spacing={1.2} sx={{ mb: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              href="/asset/Karthikeyan_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<FileDownloadOutlinedIcon sx={{ fontSize: '1.1rem' }} />}
              sx={{
                py: 1.1,
                fontSize: '0.9rem',
                fontWeight: 600,
                borderColor: 'rgba(37, 99, 235, 0.35)',
                backgroundColor: '#ffffff',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(37, 99, 235, 0.06)',
                },
              }}
            >
              Download Resume
            </Button>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleNavClick('#contact')}
              startIcon={<EmailOutlinedIcon sx={{ fontSize: '1.1rem' }} />}
              sx={{
                py: 1.1,
                fontSize: '0.9rem',
                fontWeight: 600,
                bgcolor: 'primary.main',
                color: '#ffffff',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              Get in Touch
            </Button>
          </Stack>

          {/* Social Row */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 1.5 }}>
            <Tooltip title="GitHub" arrow>
              <IconButton
                component="a"
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  width: 36,
                  height: 36,
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  color: '#334155',
                  '&:hover': {
                    color: '#0f172a',
                    borderColor: '#94a3b8',
                    backgroundColor: '#f1f5f9',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <GitHubIcon sx={{ fontSize: '1.05rem' }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="LinkedIn" arrow>
              <IconButton
                component="a"
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  width: 36,
                  height: 36,
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  color: '#0284c7',
                  '&:hover': {
                    color: '#0369a1',
                    borderColor: '#38bdf8',
                    backgroundColor: 'rgba(2, 132, 199, 0.06)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <LinkedInIcon sx={{ fontSize: '1.1rem' }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="LeetCode" arrow>
              <IconButton
                component="a"
                href={portfolioData.personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  width: 36,
                  height: 36,
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  color: '#ea580c',
                  '&:hover': {
                    color: '#c2410c',
                    borderColor: '#fb923c',
                    backgroundColor: 'rgba(234, 88, 12, 0.06)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <CodeIcon sx={{ fontSize: '1.15rem' }} />
              </IconButton>
            </Tooltip>

            <Tooltip title="Email" arrow>
              <IconButton
                component="a"
                href={`mailto:${portfolioData.personal.email}`}
                size="small"
                sx={{
                  width: 36,
                  height: 36,
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  color: '#2563eb',
                  '&:hover': {
                    color: '#1d4ed8',
                    borderColor: '#60a5fa',
                    backgroundColor: 'rgba(37, 99, 235, 0.06)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <EmailOutlinedIcon sx={{ fontSize: '1.1rem' }} />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Location Footnote */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
            <LocationOnOutlinedIcon sx={{ fontSize: '0.85rem', color: '#94a3b8' }} />
            <Typography sx={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 500 }}>
              Salem, Tamil Nadu, India
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
