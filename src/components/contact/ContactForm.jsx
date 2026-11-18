import React, { useState } from 'react';
import {
  Card,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function ContactForm({ email }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ open: false, severity: 'success', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // Fallback to mailto if access key is not set
    if (!accessKey) {
      const mailtoLink = `mailto:${email}?subject=Portfolio Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
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
        message: 'Could not send message. Please contact directly at ' + email,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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

      {/* Snackbar for submission status */}
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
    </>
  );
}
