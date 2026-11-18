import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  IconButton,
  Chip,
  Button,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <Dialog
      open={Boolean(project)}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: '#ffffff',
          borderRadius: 3,
          border: '1px solid #e2e8f0',
          boxShadow: '0 24px 60px rgba(15, 23, 42, 0.16)',
          p: 0.5,
        },
      }}
    >
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
            {project.title}
          </Typography>
          <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 600 }}>
            {project.subtitle} &bull; {project.category}
          </Typography>
        </Box>
        <IconButton size="small" onClick={onClose} sx={{ color: '#64748b', '&:hover': { color: '#0f172a' } }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: 2.5 }}>
        {project.image && (
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
              src={project.image}
              alt={project.title}
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
            {project.description}
          </Typography>
        </Box>

        <Box sx={{ mb: 2.5, p: 2, bgcolor: '#f8fafc', borderRadius: 2.5, border: '1px solid #e2e8f0' }}>
          <Typography variant="subtitle2" sx={{ color: '#d97706', fontWeight: 700, mb: 0.5, fontSize: '0.85rem' }}>
            Key Engineering Challenge
          </Typography>
          <Typography variant="body2" sx={{ color: '#334155', lineHeight: 1.6, mb: 1.8, fontSize: '0.85rem' }}>
            {project.challenge}
          </Typography>

          <Typography variant="subtitle2" sx={{ color: 'primary.main', fontWeight: 700, mb: 0.5, fontSize: '0.85rem' }}>
            Implemented Architectural Solution
          </Typography>
          <Typography variant="body2" sx={{ color: '#334155', lineHeight: 1.6, fontSize: '0.85rem' }}>
            {project.solution}
          </Typography>
        </Box>

        <Typography variant="subtitle2" sx={{ color: '#0f172a', fontWeight: 700, mb: 1 }}>
          Technologies & Tools
        </Typography>
        <Stack direction="row" spacing={0.8} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
          {project.tags.map((t) => (
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
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon />}
          sx={{ borderColor: '#cbd5e1', color: '#0f172a', textTransform: 'none', borderRadius: '8px' }}
        >
          View Repository
        </Button>
        {project.demo && (
          <Button
            variant="contained"
            href={project.demo}
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
    </Dialog>
  );
}
