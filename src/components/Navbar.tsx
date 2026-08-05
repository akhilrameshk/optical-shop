'use client';

import React, { useState, useEffect } from 'react';
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
  Chip,
  Divider,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll distance to apply dynamic elevation shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          bgcolor: (theme) =>
            theme.palette.mode === 'light'
              ? 'rgba(255, 255, 255, 0.85)'
              : 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'light'
              ? 'rgba(0, 0, 0, 0.08)'
              : 'rgba(255, 255, 255, 0.08)',
          boxShadow: scrolled
            ? '0 10px 30px -10px rgba(0, 0, 0, 0.12)'
            : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', height: { xs: 70, md: 80 } }}>
            {/* Mobile Menu Toggle Button */}
            <IconButton
              color="inherit"
              aria-label="open navigation menu"
              edge="start"
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { md: 'none' },
                bgcolor: (theme) =>
                  theme.palette.mode === 'light' ? 'grey.100' : 'grey.800',
                borderRadius: 2.5,
                p: 1.25,
                transition: 'transform 0.2s ease',
                '&:active': { transform: 'scale(0.92)' },
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
                  transform: 'rotate(-10deg) scale(1.08)',
                },
              }}
            >
              <Box
                className="logo-icon"
                sx={{
                  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                  color: 'secondary.main',
                  p: 1.25,
                  borderRadius: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 14px rgba(15, 23, 42, 0.25)',
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <VisibilityIcon fontSize="medium" />
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 900,
                  letterSpacing: -0.5,
                  fontSize: { xs: '1.15rem', sm: '1.3rem' },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                NOOR
                <Box
                  component="span"
                  sx={{
                    fontWeight: 400,
                    color: 'secondary.main',
                    ml: 0.6,
                    letterSpacing: 1,
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
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    px: 2.5,
                    py: 1,
                    borderRadius: 2.5,
                    position: 'relative',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      color: 'secondary.main',
                      bgcolor: (theme) =>
                        theme.palette.mode === 'light'
                          ? 'rgba(56, 189, 248, 0.08)'
                          : 'rgba(56, 189, 248, 0.15)',
                      transform: 'translateY(-1px)',
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
                      transition: 'transform 0.25s ease',
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
            <Stack direction="row"  spacing={1.5}>
              <Button
                component={Link}
                href="#location"
                variant="contained"
                color="secondary"
                size="medium"
                startIcon={<LocationOnIcon />}
                sx={{
                  fontWeight: 800,
                  px: { xs: 2, sm: 3 },
                  py: 1.2,
                  borderRadius: 3,
                  color: '#0F172A',
                  boxShadow: '0 4px 14px rgba(56, 189, 248, 0.35)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(56, 189, 248, 0.5)',
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
              borderRadius: '0 28px 28px 0',
              boxShadow: '10px 0 30px rgba(0, 0, 0, 0.15)',
            },
          },
        }}
      >
        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
          {/* Mobile Drawer Header */}
          <Stack
            sx={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 3,
              pb: 2,
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                  color: 'secondary.main',
                  p: 0.85,
                  borderRadius: 2.5,
                  display: 'flex',
                }}
              >
                <VisibilityIcon fontSize="small" />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 900, fontSize: '1.15rem' }}>
                NOOR OPTICAL
              </Typography>
            </Box>
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{
                bgcolor: (theme) =>
                  theme.palette.mode === 'light' ? 'grey.100' : 'grey.800',
                borderRadius: 2,
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>

          {/* Quick Info Chip */}
          <Box sx={{ mb: 3 }}>
            <Chip
              icon={<PhoneInTalkIcon sx={{ fontSize: '1rem !important' }} />}
              label="+91 6238704448"
              component="a"
              href="tel:+916238704448"
              clickable
              color="secondary"
              variant="outlined"
              sx={{ width: '100%', justifyContent: 'flex-start', py: 2.2, px: 1, fontWeight: 700 }}
            />
          </Box>

          <Divider sx={{ mb: 2 }} />

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
                    py: 1.75,
                    px: 2.25,
                    display: 'flex',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: 'secondary.main',
                      color: '#0F172A',
                      '& .MuiListItemText-primary': { color: '#0F172A', fontWeight: 800 },
                      '& .arrow-icon': { color: '#0F172A', transform: 'translateX(4px)' },
                    },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontWeight: 700,
                        fontSize: '1.05rem',
                      },
                    }}
                  />
                  <ArrowForwardIosIcon
                    className="arrow-icon"
                    sx={{ fontSize: 14, color: 'text.secondary', transition: 'transform 0.2s ease' }}
                  />
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
              color="secondary"
              size="large"
              startIcon={<LocationOnIcon />}
              onClick={() => setMobileOpen(false)}
              sx={{ py: 1.8, borderRadius: 3, fontWeight: 800, color: '#0F172A' }}
            >
              Visit Showroom
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}