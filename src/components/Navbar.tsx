'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Container,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          borderBottom: '1px solid',
          borderColor: 'rgba(212, 175, 55, 0.2)',
          bgcolor: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(16px)',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: 80 }}>
            {/* Mobile Menu Toggle Button */}
            <IconButton
              color="inherit"
              aria-label="open navigation menu"
              edge="start"
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { md: 'none' },
                bgcolor: 'action.hover',
                borderRadius: 2,
                p: 1,
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Brand Logo */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                color: 'inherit',
                '&:hover .logo-icon': {
                  transform: 'rotate(-10deg) scale(1.05)',
                },
              }}
            >
              <Box
                className="logo-icon"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'secondary.main',
                  p: 1.25,
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(10, 25, 47, 0.2)',
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <VisibilityIcon fontSize="medium" />
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 800,
                  letterSpacing: -0.5,
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                }}
              >
                NOOR
                <Box
                  component="span"
                  sx={{
                    fontWeight: 300,
                    color: 'secondary.main',
                    ml: 0.5,
                  }}
                >
                  OPTICAL
                </Box>
              </Typography>
            </Box>

            {/* Desktop Navigation Links */}
            <Stack
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexDirection: 'row',
                gap: 1,
                alignItems: 'center',
              }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  component={Link}
                  href={link.href}
                  color="inherit"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    px: 2.5,
                    py: 1,
                    borderRadius: 2,
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'primary.main',
                      bgcolor: 'rgba(212, 175, 55, 0.08)',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 6,
                      left: '50%',
                      transform: 'translateX(-50%) scaleX(0)',
                      width: '20px',
                      height: '2px',
                      bgcolor: 'secondary.main',
                      borderRadius: 1,
                      transition: 'transform 0.2s ease',
                    },
                    '&:hover::after': {
                      transform: 'translateX(-50%) scaleX(1)',
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>

            {/* Store Location CTA */}
            <Stack
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <Button
                component={Link}
                href="#location"
                variant="contained"
                color="secondary"
                size="medium"
                startIcon={<LocationOnIcon />}
                sx={{
                  fontWeight: 700,
                  px: { xs: 2, sm: 3 },
                  py: 1.2,
                  borderRadius: 3,
                  boxShadow: '0 4px 14px rgba(212, 175, 55, 0.35)',
                  '&:hover': {
                    transform: 'translateY(-1px)',
                    boxShadow: '0 6px 20px rgba(212, 175, 55, 0.45)',
                  },
                }}
              >
                Find Us
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Modern Slide-out Mobile Menu */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: { xs: '85%', sm: 360 },
              bgcolor: 'background.paper',
              borderRadius: '0 24px 24px 0',
            },
        }}}
      >
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Mobile Drawer Header */}
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 4,
              pb: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  bgcolor: 'primary.main',
                  color: 'secondary.main',
                  p: 0.75,
                  borderRadius: 2,
                  display: 'flex',
                }}
              >
                <VisibilityIcon fontSize="small" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main', fontSize: '1.1rem' }}>
                NOOR OPTICAL
              </Typography>
            </Box>
            <IconButton onClick={() => setMobileOpen(false)} sx={{ bgcolor: 'action.hover' }}>
              <CloseIcon />
            </IconButton>
          </Stack>

          {/* Navigation Links */}
          <List sx={{ px: 0, flexGrow: 1 }}>
            {navLinks.map((link) => (
              <ListItem key={link.label} disablePadding sx={{ mb: 1.5 }}>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    borderRadius: 3,
                    py: 1.5,
                    px: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'common.white',
                      '& .MuiListItemText-primary': { color: 'common.white' },
                      '& .arrow-icon': { color: 'secondary.main' },
                    },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    sx={{
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'text.primary',
                    }}
                  />
                  <ArrowForwardIosIcon className="arrow-icon" sx={{ fontSize: 14, color: 'text.secondary' }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Drawer Footer CTA */}
          <Box sx={{ pt: 2, mt: 'auto', borderTop: '1px solid', borderColor: 'divider' }}>
            <Button
              component={Link}
              href="#location"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              startIcon={<LocationOnIcon sx={{ color: 'secondary.main' }} />}
              onClick={() => setMobileOpen(false)}
              sx={{ py: 1.8, borderRadius: 3, fontWeight: 700 }}
            >
              Visit Showroom
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
