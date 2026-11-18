import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MobileDrawerHeader from './MobileDrawerHeader';
import MobileDrawerFooter from './MobileDrawerFooter';

export default function MobileDrawer({ open, onClose, navItems, activeSection, onNavClick }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{
        display: { xs: 'block', md: 'none' },
        zIndex: (theme) => theme.zIndex.modal + 10,
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(15, 23, 42, 0.45)',
          backdropFilter: 'blur(6px)',
        },
        '& .MuiDrawer-paper': {
          width: { xs: '84vw', sm: 360 },
          maxWidth: 380,
          height: '100%',
          backgroundColor: '#ffffff',
          backgroundImage: 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxShadow: '-8px 0 36px rgba(15, 23, 42, 0.12)',
          borderLeft: '1px solid #e2e8f0',
        },
      }}
    >
      {/* Drawer Header */}
      <MobileDrawerHeader onClose={onClose} />

      {/* Navigation Items List */}
      <Box sx={{ flex: 1, overflowY: 'auto', px: 2, py: 1.5 }}>
        <Typography
          sx={{
            fontSize: '0.72rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            color: '#94a3b8',
            letterSpacing: '0.08em',
            px: 1.2,
            mb: 1,
          }}
        >
          Navigation
        </Typography>
        <List disablePadding>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            const IconComponent = item.icon;
            return (
              <ListItem key={item.label} disablePadding sx={{ my: 0.4 }}>
                <ListItemButton
                  onClick={() => onNavClick(item.href)}
                  sx={{
                    borderRadius: '12px',
                    py: 1.15,
                    px: 1.6,
                    color: isActive ? 'primary.main' : '#334155',
                    backgroundColor: isActive ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(37, 99, 235, 0.22)' : 'transparent',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      backgroundColor: isActive ? 'rgba(37, 99, 235, 0.12)' : 'rgba(241, 245, 249, 0.8)',
                      transform: 'translateX(3px)',
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 38,
                      color: isActive ? 'primary.main' : '#64748b',
                    }}
                  >
                    <IconComponent sx={{ fontSize: '1.25rem' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.94rem',
                      fontWeight: isActive ? 700 : 500,
                    }}
                  />
                  <ChevronRightIcon
                    sx={{
                      fontSize: '1.15rem',
                      color: isActive ? 'primary.main' : '#cbd5e1',
                      transition: 'transform 0.2s',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Bottom Docked Section */}
      <MobileDrawerFooter onNavClick={onNavClick} />
    </Drawer>
  );
}
