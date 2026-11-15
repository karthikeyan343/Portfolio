import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  TextField,
  Stack,
  IconButton,
  Snackbar,
  Alert,
  Tooltip,
  CircularProgress,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';
import ScrollReveal from './ScrollReveal';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ open: false, severity: 'success', message: '' });

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    setSnackbarOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Fallback to mailto if access key is not yet set in .env
    if (!accessKey) {
      const mailtoLink = `mailto:${personal.email}?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setToast({
        open: true,
        severity: 'info',
        message: 'Opening your email client to send message to Karthikeyan...',
      });
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: `${formData.name} (via Portfolio)`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setToast({
          open: true,
          severity: 'success',
          message: 'Thank you! Your message was sent directly to Karthikeyan.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Web3Forms submission error:', err);
      setToast({
        open: true,
        severity: 'error',
        message: 'Could not send message. Please contact directly at ' + personal.email,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 193" width="22" height="22">
          <path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/>
          <path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/>
          <path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/>
          <path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/>
          <path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/>
        </svg>
      ),
      badgeBg: '#ffffff',
      badgeBorder: '1px solid #e2e8f0',
      badgeShadow: '0 2px 8px rgba(15, 23, 42, 0.06)',
      hoverBorder: '#EA4335',
      hoverShadow: 'rgba(234, 67, 53, 0.16)',
      actionable: true,
    },
    {
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      icon: <PhoneIcon sx={{ fontSize: '1.25rem', color: '#ffffff' }} />,
      badgeBg: '#22c55e',
      badgeBorder: '1px solid #16a34a',
      badgeShadow: '0 2px 8px rgba(34, 197, 94, 0.35)',
      hoverBorder: '#16a34a',
      hoverShadow: 'rgba(34, 197, 94, 0.16)',
      actionable: false,
    },
    {
      label: 'GitHub',
      value: 'github.com/karthikeyan343',
      href: personal.github,
      icon: <GitHubIcon sx={{ fontSize: '1.35rem', color: '#ffffff' }} />,
      badgeBg: '#24292e',
      badgeBorder: '1px solid #24292e',
      badgeShadow: '0 2px 8px rgba(36, 41, 46, 0.35)',
      hoverBorder: '#24292e',
      hoverShadow: 'rgba(36, 41, 46, 0.16)',
      actionable: false,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/karthikeyan-s',
      href: personal.linkedin,
      icon: <LinkedInIcon sx={{ fontSize: '1.35rem', color: '#ffffff' }} />,
      badgeBg: '#0a66c2',
      badgeBorder: '1px solid #0a66c2',
      badgeShadow: '0 2px 8px rgba(10, 102, 194, 0.35)',
      hoverBorder: '#0a66c2',
      hoverShadow: 'rgba(10, 102, 194, 0.16)',
      actionable: false,
      external: true,
    },
  ];

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
                Get In Touch
              </Typography>
            </Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.1rem', md: '2.3rem', lg: '2.6rem' },
                fontWeight: 800,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              <span className="text-gradient">Let's Connect</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#475569',
                maxWidth: '560px',
                mx: 'auto',
                mt: 0.6,
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.88rem' },
                lineHeight: 1.6,
              }}
            >
              Whether you have a job opportunity, a project collaboration, or just want to discuss web tech, my inbox is always open!
            </Typography>
          </Box>
        </ScrollReveal>

        <Grid container spacing={4} justifyContent="center">
          {/* Contact Direct Cards */}
          <Grid item xs={12} md={5}>
            <ScrollReveal delay={0.1}>
              <Stack spacing={2}>
              {contactMethods.map((c, i) => (
                <Card
                  key={i}
                  component="a"
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  sx={{
                    p: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                    bgcolor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 8px 25px -4px rgba(15, 23, 42, 0.08), 0 3px 8px -2px rgba(15, 23, 42, 0.05)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      borderColor: c.hoverBorder || '#2563eb',
                      transform: 'translateY(-3px)',
                      boxShadow: `0 16px 35px -6px ${c.hoverShadow || 'rgba(37, 99, 235, 0.16)'}, 0 6px 12px -3px rgba(15, 23, 42, 0.06)`,
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '12px',
                        bgcolor: c.badgeBg || '#ffffff',
                        border: c.badgeBorder || '1px solid #e2e8f0',
                        boxShadow: c.badgeShadow || 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.75rem' }}>
                        {c.label}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 600 }}>
                        {c.value}
                      </Typography>
                    </Box>
                  </Stack>

                  {c.actionable && (
                    <Tooltip title="Copy Email">
                      <IconButton size="small" onClick={handleCopyEmail} sx={{ color: '#64748b', '&:hover': { color: 'primary.main' } }}>
                        <ContentCopyIcon sx={{ fontSize: '1rem' }} />
                      </IconButton>
                    </Tooltip>
                  )}
                </Card>
              ))}
            </Stack>
          </ScrollReveal>
        </Grid>

        {/* Quick Message Form */}
        <Grid item xs={12} md={7}>
          <ScrollReveal delay={0.25}>
            <Card
              sx={{
                p: { xs: 3, md: 4 },
                bgcolor: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 4px 12px -2px rgba(15, 23, 42, 0.05)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 2 }}>
                Send a Direct Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: '#f8fafc',
                          '& fieldset': { borderColor: '#cbd5e1' },
                          '&:hover fieldset': { borderColor: '#2563eb' },
                          '&.Mui-focused fieldset': { borderColor: '#2563eb' },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      type="email"
                      variant="outlined"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: '#f8fafc',
                          '& fieldset': { borderColor: '#cbd5e1' },
                          '&:hover fieldset': { borderColor: '#2563eb' },
                          '&.Mui-focused fieldset': { borderColor: '#2563eb' },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          bgcolor: '#f8fafc',
                          '& fieldset': { borderColor: '#cbd5e1' },
                          '&:hover fieldset': { borderColor: '#2563eb' },
                          '&.Mui-focused fieldset': { borderColor: '#2563eb' },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={isSubmitting}
                      startIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : <SendIcon />}
                      sx={{
                        px: 3.5,
                        py: 1.2,
                        boxShadow: '0 4px 16px rgba(37, 99, 235, 0.3)',
                        fontWeight: 700,
                        '&.Mui-disabled': {
                          bgcolor: 'rgba(37, 99, 235, 0.4)',
                          color: '#ffffff',
                        },
                      }}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
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

      {/* Snackbar for copied email */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%', bgcolor: '#ffffff', color: '#0f172a', border: '1px solid #2563eb', boxShadow: '0 8px 30px rgba(15, 23, 42, 0.12)' }}>
          Email copied to clipboard!
        </Alert>
      </Snackbar>

      {/* Snackbar for Web3Forms submission status */}
      <Snackbar
        open={toast.open}
        autoHideDuration={6000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setToast({ ...toast, open: false })}
          severity={toast.severity}
          sx={{
            width: '100%',
            bgcolor: '#ffffff',
            color: '#0f172a',
            border: `1px solid ${toast.severity === 'success' ? '#2563eb' : toast.severity === 'error' ? '#ef4444' : '#2563eb'}`,
            boxShadow: '0 8px 30px rgba(15, 23, 42, 0.12)',
          }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

