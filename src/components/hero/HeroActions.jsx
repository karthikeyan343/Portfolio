import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SocialButtons from './SocialButtons';

export default function HeroActions({ personal, onOpenResume }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1.2,
        mb: 3.5,
        maxWidth: { xs: '100%', sm: '42rem' },
        mx: { xs: 'auto', md: 0 },
      }}
    >
      {/* Desktop Unified Row (lg and up) */}
      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          alignItems: 'center',
          gap: 1,
          flexWrap: 'nowrap',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          size="small"
          href={personal.resume}
          download="Karthikeyan_S_Resume.pdf"
          startIcon={<FileDownloadIcon sx={{ fontSize: '1rem !important' }} />}
          sx={{
            px: 2,
            py: 0.85,
            fontSize: '0.82rem',
            fontWeight: 700,
            whiteSpace: 'nowrap',
            borderRadius: '10px',
            bgcolor: 'primary.main',
            color: '#ffffff',
            boxShadow: '0 4px 16px rgba(37, 99, 235, 0.4)',
            transition: 'all 0.25s ease',
            '&:hover': {
              bgcolor: 'primary.dark',
              boxShadow: '0 6px 22px rgba(37, 99, 235, 0.6)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          Download Resume
        </Button>

        <Button
          variant="outlined"
          size="small"
          onClick={onOpenResume}
          startIcon={<VisibilityIcon sx={{ fontSize: '1rem !important' }} />}
          sx={{
            borderColor: 'rgba(37, 99, 235, 0.4)',
            color: 'primary.main',
            px: 1.8,
            py: 0.85,
            fontSize: '0.82rem',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            borderRadius: '10px',
            bgcolor: 'rgba(37, 99, 235, 0.04)',
            transition: 'all 0.25s ease',
            '&:hover': {
              borderColor: 'primary.main',
              bgcolor: 'rgba(37, 99, 235, 0.08)',
              boxShadow: '0 4px 16px rgba(37, 99, 235, 0.15)',
              transform: 'translateY(-2px)',
            },
          }}
        >
          View Resume
        </Button>

        <Box
          sx={{
            width: '1px',
            height: '24px',
            bgcolor: 'rgba(15, 23, 42, 0.12)',
            mx: 0.5,
          }}
        />

        <SocialButtons personal={personal} fullWidth={false} />
      </Box>

      {/* Tablet & Mobile Layout (below lg: iPad, tablets, phones) */}
      <Box
        sx={{
          display: { xs: 'flex', lg: 'none' },
          flexDirection: 'column',
          gap: 1.2,
          alignItems: { xs: 'center', md: 'flex-start' },
          width: '100%',
        }}
      >
        {/* Row 1: Resume CTAs */}
        <Stack
          direction="row"
          spacing={1.2}
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          sx={{ width: '100%', maxWidth: '360px' }}
        >
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="small"
            href={personal.resume}
            download="Karthikeyan_S_Resume.pdf"
            startIcon={<FileDownloadIcon sx={{ fontSize: '0.95rem !important' }} />}
            sx={{
              py: 0.85,
              fontSize: '0.8rem',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              borderRadius: '10px',
              bgcolor: 'primary.main',
              color: '#ffffff',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
              '&:hover': {
                bgcolor: 'primary.dark',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Download Resume
          </Button>

          <Button
            fullWidth
            variant="outlined"
            size="small"
            onClick={onOpenResume}
            startIcon={<VisibilityIcon sx={{ fontSize: '0.95rem !important' }} />}
            sx={{
              borderColor: 'rgba(37, 99, 235, 0.4)',
              color: 'primary.main',
              py: 0.85,
              fontSize: '0.8rem',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              borderRadius: '10px',
              bgcolor: 'rgba(37, 99, 235, 0.04)',
              '&:hover': {
                borderColor: 'primary.main',
                bgcolor: 'rgba(37, 99, 235, 0.08)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            View Resume
          </Button>
        </Stack>

        {/* Row 2: Social Connect Links */}
        <SocialButtons personal={personal} fullWidth={true} />
      </Box>
    </Box>
  );
}
