import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TerminalIcon from '@mui/icons-material/Terminal';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NavLinks from './navbar/NavLinks';
import MobileDrawer from './navbar/MobileDrawer';

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

      // Check if user is scrolled near the bottom of the page
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
            <NavLinks
              navItems={navItems}
              activeSection={activeSection}
              onNavClick={handleNavClick}
            />

            {/* Mobile Hamburger Menu Button */}
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
      <MobileDrawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        navItems={navItems}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  );
}
