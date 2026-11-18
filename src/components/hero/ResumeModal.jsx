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
import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function ResumeModal({ open, onClose, resumeUrl }) {
  return (
    <Dialog
      open={open}
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
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
          Karthikeyan S — Professional Resume
        </Typography>
        <IconButton size="small" onClick={onClose} sx={{ color: 'text.secondary' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 2, height: '75vh', display: 'flex', flexDirection: 'column' }}>
        <Box
          component="iframe"
          src={`${resumeUrl}#toolbar=0`}
          title="Karthikeyan S Resume"
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
            variant="outlined"
            color="primary"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LaunchIcon />}
          >
            Open Fullscreen
          </Button>
          <Button
            variant="contained"
            color="primary"
            href={resumeUrl}
            download="Karthikeyan_S_Resume.pdf"
            startIcon={<FileDownloadIcon />}
          >
            Download PDF
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
