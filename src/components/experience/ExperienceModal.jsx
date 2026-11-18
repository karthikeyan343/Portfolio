import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Box,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';

export default function ExperienceModal({ activeCert, onClose }) {
  if (!activeCert) return null;

  return (
    <Dialog
      open={Boolean(activeCert)}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: '#ffffff',
          borderRadius: 3,
          border: '1px solid rgba(15, 23, 42, 0.1)',
          boxShadow: '0 24px 60px rgba(15, 23, 42, 0.15)',
        },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
          py: 1.5,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', fontSize: '1.05rem' }}>
          {activeCert.company} &bull; Internship Certificate
        </Typography>
        <IconButton size="small" onClick={onClose} sx={{ color: 'text.secondary' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 2, height: '75vh', display: 'flex', flexDirection: 'column' }}>
        <Box
          component="iframe"
          src={`${activeCert.certificate}#toolbar=0`}
          title={`${activeCert.company} Certificate`}
          sx={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: 2,
            bgcolor: '#ffffff',
          }}
        />
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1.5 }}>
          <Button
            variant="contained"
            color="primary"
            href={activeCert.certificate}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LaunchIcon />}
          >
            Open Fullscreen
          </Button>
          <Button variant="outlined" color="primary" onClick={onClose}>
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
