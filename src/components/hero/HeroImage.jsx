import React from 'react';
import { Box } from '@mui/material';

export default function HeroImage({ avatar, name }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: { xs: 'center', md: 'flex-end', lg: 'center' },
        alignItems: 'center',
        position: 'relative',
        pt: { xs: 1, md: 0 },
        pb: { xs: 2, md: 0 },
      }}
    >
      <Box
        component="img"
        src={avatar}
        alt={name}
        loading="eager"
        sx={{
          width: 'auto',
          maxWidth: { xs: '80%', sm: '85%', md: '100%' },
          height: { xs: '260px', sm: '330px', md: '430px', lg: '490px' },
          objectFit: 'contain',
          imageRendering: '-webkit-optimize-contrast',
          filter: 'drop-shadow(0 15px 30px rgba(15, 23, 42, 0.12))',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        }}
      />
    </Box>
  );
}
