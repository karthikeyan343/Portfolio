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
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';
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
      icon: <EmailIcon />,
      actionable: true,
    },
    {
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
      icon: <PhoneIcon />,
      actionable: false,
    },
    {
      label: 'GitHub',
      value: 'github.com/karthikeyan343',
      href: personal.github,
      icon: <GitHubIcon />,
      actionable: false,
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/karthikeyan-s',
      href: personal.linkedin,
      icon: <LinkedInIcon />,
      actionable: false,
      external: true,
    },
  ];

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        backgroundColor: '#0a0e14',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Typography
            variant="body2"
            sx={{
              color: 'primary.main',
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 800,
            }}
          >
            <span className="text-gradient">Let's Connect</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: '560px',
              mx: 'auto',
              mt: 1.5,
              fontSize: '0.95rem',
            }}
          >
            Whether you have a job opportunity, a project collaboration, or just want to discuss web tech, my inbox is always open!
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {/* Contact Direct Cards */}
          <Grid item xs={12} md={5}>
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
                    bgcolor: 'rgba(20, 28, 38, 0.7)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      borderColor: 'rgba(26, 229, 183, 0.4)',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 16px rgba(26, 229, 183, 0.1)',
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '10px',
                        bgcolor: 'rgba(26, 229, 183, 0.1)',
                        color: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </Box>
                    <Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                        {c.label}
                      </Typography>
                      <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 600 }}>
                        {c.value}
                      </Typography>
                    </Box>
                  </Stack>

                  {c.actionable && (
                    <Tooltip title="Copy Email">
                      <IconButton size="small" onClick={handleCopyEmail} sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                        <ContentCopyIcon sx={{ fontSize: '1rem' }} />
                      </IconButton>
                    </Tooltip>
                  )}
                </Card>
              ))}
            </Stack>
          </Grid>

          {/* Quick Message Form */}
          <Grid item xs={12} md={7}>
            <Card
              sx={{
                p: { xs: 3, md: 4 },
                bgcolor: 'rgba(20, 28, 38, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#ffffff', mb: 2 }}>
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
                          bgcolor: 'rgba(14, 19, 27, 0.6)',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
                          '&:hover fieldset': { borderColor: 'rgba(26, 229, 183, 0.4)' },
                          '&.Mui-focused fieldset': { borderColor: 'primary.main' },
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
                          bgcolor: 'rgba(14, 19, 27, 0.6)',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
                          '&:hover fieldset': { borderColor: 'rgba(26, 229, 183, 0.4)' },
                          '&.Mui-focused fieldset': { borderColor: 'primary.main' },
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
                          bgcolor: 'rgba(14, 19, 27, 0.6)',
                          '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.1)' },
                          '&:hover fieldset': { borderColor: 'rgba(26, 229, 183, 0.4)' },
                          '&.Mui-focused fieldset': { borderColor: 'primary.main' },
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
                        boxShadow: '0 4px 16px rgba(26, 229, 183, 0.3)',
                        fontWeight: 700,
                        '&.Mui-disabled': {
                          bgcolor: 'rgba(26, 229, 183, 0.5)',
                          color: '#0e131b',
                        },
                      }}
                    >
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box
          sx={{
            mt: 8,
            pt: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontFamily: "'Manrope', sans-serif",
              fontSize: '0.88rem',
              fontWeight: 500,
            }}
          >
            &copy; {new Date().getFullYear()} Karthikeyan S. All rights reserved.
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: 'text.secondary',
              opacity: 0.7,
              mt: 0.6,
              display: 'block',
              fontFamily: "'Manrope', sans-serif",
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
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%', bgcolor: '#141c26', color: '#1ae5b7', border: '1px solid #1ae5b7' }}>
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
            bgcolor: '#141c26',
            color: toast.severity === 'success' ? '#1ae5b7' : toast.severity === 'error' ? '#f87171' : '#38bdf8',
            border: `1px solid ${toast.severity === 'success' ? '#1ae5b7' : toast.severity === 'error' ? '#f87171' : '#38bdf8'}`,
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
          }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

