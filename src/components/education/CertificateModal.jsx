import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LaunchIcon from '@mui/icons-material/Launch';

export default function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <Dialog
      open={Boolean(cert)}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: '#ffffff',
          borderRadius: 3,
          border: '1px solid rgba(15, 23, 42, 0.12)',
          boxShadow: '0 24px 60px rgba(15, 23, 42, 0.18)',
          overflow: 'hidden',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
          py: 1.8,
          px: 2.5,
          bgcolor: '#f8fafc',
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          {cert.logo && (
            <Box
              component="img"
              src={cert.logo}
              alt={cert.issuer}
              sx={{ width: 32, height: 32, objectFit: 'contain' }}
            />
          )}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', fontSize: '1.02rem', lineHeight: 1.2 }}>
              {cert.title}
            </Typography>
            <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.78rem' }}>
              {cert.issuer} &bull; {cert.period}
            </Typography>
          </Box>
        </Stack>
        <IconButton size="small" onClick={onClose} sx={{ color: '#64748b', '&:hover': { color: '#0f172a' } }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: { xs: 1.5, md: 2.5 }, bgcolor: '#0f172a08', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box
          component="img"
          src={cert.certificate}
          alt={cert.title}
          sx={{
            maxWidth: '100%',
            maxHeight: '70vh',
            objectFit: 'contain',
            borderRadius: 2,
            boxShadow: '0 8px 30px rgba(15, 23, 42, 0.12)',
            border: '1px solid #e2e8f0',
            bgcolor: '#ffffff',
          }}
        />
        <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
            <CheckCircleIcon sx={{ fontSize: '1rem', color: '#16a34a' }} />
            <Typography sx={{ fontSize: '0.8rem', color: '#16a34a', fontWeight: 600 }}>
              Official Verified Certificate
            </Typography>
          </Box>
          <Stack direction="row" spacing={1.5}>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              href={cert.certificate}
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<LaunchIcon sx={{ fontSize: '0.9rem !important' }} />}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              Open Full Image
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={onClose}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              Close
            </Button>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
