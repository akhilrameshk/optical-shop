'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Paper,
  Stack,
  Rating,
  Avatar,
  TextField,
  Snackbar,
  Alert,
  Fab,
  Tooltip,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MapIcon from '@mui/icons-material/Map';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CallIcon from '@mui/icons-material/Call';

const TARGET_PHONE_NUMBER = '916238704448';

const FEATURED_FRAMES = [
  {
    id: '1',
    name: 'Noor Crown Titanium',
    category: 'Luxury Optical',
    price: 185,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80',
    tag: 'Best Seller',
    rating: 5.0,
  },
  {
    id: '2',
    name: 'Aura Round Acetate',
    category: 'Handcrafted Eyeglasses',
    price: 145,
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=800&q=80',
    tag: 'New Season',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Solstice Polarized',
    category: 'Designer Sunglasses',
    price: 165,
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80',
    tag: 'Limited Edition',
    rating: 4.8,
  },
];

export default function Home() {
  // Form State Management
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [toast, setToast] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({
    open: false,
    message: '',
    severity: 'success',
  });

  // Track scroll position for Toggle Arrow (Up/Down)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 300) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToggle = () => {
    if (isAtTop) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Format WhatsApp message
      const whatsappMessage =
        `*New Contact Inquiry - Noor Optical*\n\n` +
        `*Name:* ${formData.name}\n` +
        `*Phone:* ${formData.phone}\n` +
        `*Subject:* ${formData.subject || 'N/A'}\n` +
        `*Message:* ${formData.message}`;

      // 2. Construct WhatsApp URL
      const whatsappUrl = `https://wa.me/${TARGET_PHONE_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

      // 3. Open WhatsApp tab
      window.open(whatsappUrl, '_blank');

      setToast({
        open: true,
        message: 'Opening WhatsApp to send your message...',
        severity: 'success',
      });

      // Clear Form
      setFormData({ name: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setToast({
        open: true,
        message: 'Failed to open WhatsApp. Please try again.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Navbar />

      {/* Hero Banner */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'common.white',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Chip
                  icon={<AutoAwesomeIcon sx={{ color: 'primary.main !important' }} />}
                  label="Premium Vision & Eyewear"
                  color="secondary"
                  size="small"
                  sx={{ width: 'fit-content', fontWeight: 700, px: 1 }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.25rem', md: '3.75rem' },
                    lineHeight: 1.1,
                  }}
                >
                  See the World with Perfect Clarity.
                </Typography>
                <Typography variant="body1" sx={{ color: 'grey.300', fontSize: '1.125rem', maxWidth: 500 }}>
                  Welcome to <strong>Noor Optical</strong>. Experience custom Italian acetate frames paired with high-index German prescription lenses.
                </Typography>
                <Stack
                  sx={{
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    pt: 1,
                  }}
                >
                  <Button
                    component={Link}
                    href="/frames"
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ fontWeight: 700 }}
                  >
                    Explore Frames
                  </Button>
                  <Button
                    component={Link}
                    href="/book-eye-test"
                    variant="outlined"
                    color="inherit"
                    size="large"
                    sx={{ borderColor: 'grey.700' }}
                  >
                    Book Eye Exam
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: 'relative' }}>
                <Card
                  sx={{
                    borderRadius: 5,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    transform: { md: 'perspective(1000px) rotateY(-5deg)' },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="420"
                    image="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80"
                    alt="Noor Optical Luxury Frame"
                  />
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Trust & Guarantees Bar */}
      <Container maxWidth="lg" sx={{ mt: -5, mb: 8, position: 'relative', zIndex: 2 }}>
        <Paper elevation={4} sx={{ p: { xs: 3, md: 4 }, borderRadius: 4, bgcolor: 'background.paper' }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: 'primary.main', color: 'secondary.main', width: 52, height: 52 }}>
                  <VerifiedUserOutlinedIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    Licensed Opticians
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Every Rx precision-tested
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: 'primary.main', color: 'secondary.main', width: 52, height: 52 }}>
                  <RemoveRedEyeOutlinedIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    Free Anti-Glare Coating
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Included with all lenses
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: 'primary.main', color: 'secondary.main', width: 52, height: 52 }}>
                  <LocalShippingOutlinedIcon />
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    Fast Delivery & Fitting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Free store adjustments
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* Featured Collection Section */}
      <Box id="collections" sx={{ scrollMarginTop: '90px' }}>
        <Container maxWidth="lg" sx={{ py: 4, mb: 8 }}>
          <Stack
            sx={{
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'flex-end' },
              gap: 2,
              mb: 5,
            }}
          >
            <Box>
              <Typography variant="caption" color="secondary.dark" sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
                Handpicked Collections
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1 }}>
                Featured Eyewear
              </Typography>
            </Box>
            <Button component={Link} href="/frames" color="primary" sx={{ fontWeight: 700 }}>
              View All Collection →
            </Button>
          </Stack>

          <Grid container spacing={4}>
            {FEATURED_FRAMES.map((frame) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={frame.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia component="img" height="260" image={frame.image} alt={frame.name} />
                    <Chip
                      label={frame.tag}
                      size="small"
                      color="primary"
                      sx={{ position: 'absolute', top: 16, left: 16, fontWeight: 700 }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                      <Typography variant="caption" color="text.secondary" sx={{ textTransform: 'uppercase' }}>
                        {frame.category}
                      </Typography>
                      <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                        <Rating value={frame.rating} precision={0.1} size="small" readOnly />
                        <Typography variant="caption">{frame.rating}</Typography>
                      </Stack>
                    </Stack>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mt: 1 }}>
                      {frame.name}
                    </Typography>
                    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        ${frame.price}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Includes Single Vision
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Craftsmanship Section */}
      <Box id="craftsmanship" sx={{ scrollMarginTop: '90px', bgcolor: 'grey.50', py: 10, mb: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=800&q=80"
                alt="Optical Craftsmanship"
                sx={{
                  width: '100%',
                  height: 400,
                  objectFit: 'cover',
                  borderRadius: 4,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="caption" color="secondary.dark" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>
                Uncompromising Quality
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 3 }}>
                Precision Engineering Meets Artistry
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                Our eyewear combines Japanese aerospace-grade titanium with hand-polished Italian Mazzucchelli acetate. Each frame undergoes 48 distinct production stages to ensure unmatched durability, ultra-lightweight comfort, and flawless finish.
              </Typography>
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <Typography variant="h5" color="primary.main" sx={{ fontWeight: 800 }}>100%</Typography>
                  <Typography variant="body2" color="text.secondary">Hypoallergenic Materials</Typography>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Typography variant="h5" color="primary.main" sx={{ fontWeight: 800 }}>0.1mm</Typography>
                  <Typography variant="body2" color="text.secondary">Lens Surface Precision</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ scrollMarginTop: '90px', py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="caption" color="secondary.dark" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700 }}>
                Our Story
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 3 }}>
                Dedicated to Elevating Your Vision
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                Founded with a mission to bridge high fashion and medical precision, Noor Optical provides boutique eyewear crafted without luxury markup.
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Our team of certified optometrists and styling specialists are dedicated to helping you discover frames that reflect your personal style while giving you crystal-clear vision.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={0} sx={{ p: 4, bgcolor: 'primary.main', color: 'common.white', borderRadius: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  The Noor Guarantee
                </Typography>
                <Typography variant="body2" sx={{ color: 'grey.300', mb: 3, lineHeight: 1.6 }}>
                  We stand by every prescription lens and frame. Enjoy a 30-day scratch warranty, lifetime frame adjustments at no charge, and complimentary lens replacement if your prescription changes within 60 days.
                </Typography>
                <Button component={Link} href="/book-eye-test" variant="contained" color="secondary" sx={{ fontWeight: 700 }}>
                  Schedule Your Consultation
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Eye Exam Callout Banner */}
      <Box sx={{ bgcolor: 'primary.main', color: 'common.white', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                Need a New Prescription?
              </Typography>
              <Typography variant="body1" color="grey.300" sx={{ maxWidth: 600 }}>
                Visit Noor Optical for a comprehensive 30-minute eye examination conducted by licensed optometrists using modern optical diagnostic technology.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
              <Button
                component={Link}
                href="/book-eye-test"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ fontWeight: 800, px: 4, py: 1.5 }}
              >
                Schedule Appointment
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ scrollMarginTop: '90px', py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="caption" color="secondary.dark" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700, display: 'block', textAlign: 'center' }}>
            Get In Touch
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mt: 1, mb: 6, textAlign: 'center' }}>
            Contact Us
          </Typography>
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={4}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', color: 'secondary.main' }}>
                    <LocationOnIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Noor Optical
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      West of General Hospital
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Beach Road, Alappuzha - 688001
                    </Typography>
                    <Button
                      component="a"
                      href="https://www.google.com/maps?q=9.491578102111816,76.33731079101562&z=17&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      startIcon={<MapIcon />}
                      sx={{ mt: 1, fontWeight: 700, p: 0, justifyContent: 'flex-start' }}
                    >
                      Get Directions
                    </Button>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', color: 'secondary.main' }}>
                    <PhoneInTalkIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Call Us
                    </Typography>
                    <Typography
                      variant="body2"
                      component="a"
                      href={`tel:+${TARGET_PHONE_NUMBER}`}
                      color="text.secondary"
                      sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
                    >
                      +91 6238704448
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', color: 'secondary.main' }}>
                    <AccessTimeIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Opening Hours
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Monday – Saturday: 09:30 AM – 08:30 PM
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Sunday: Closed
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Paper elevation={2} component="form" onSubmit={handleFormSubmit} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                  Send a Message
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      required
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={4}
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      disabled={loading}
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ fontWeight: 700, px: 4 }}
                    >
                      {loading ? 'Sending...' : 'Send Message via WhatsApp'}
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Dedicated Map Section */}
      <Box id="location" sx={{ bgcolor: 'grey.100', pb: 10, pt: 2 }}>
        <Container maxWidth="lg">
          <Typography variant="caption" color="secondary.dark" sx={{ textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700, display: 'block', textAlign: 'center' }}>
            Find Our Store
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, mt: 1, mb: 4, textAlign: 'center' }}>
            Interactive Store Location
          </Typography>
          <Paper
            elevation={3}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              height: { xs: 350, md: 450 },
              width: '100%',
            }}
          >
            <iframe
              title="Noor Optical Store Location"
              src="https://maps.google.com/maps?q=9.491578102111816,76.33731079101562&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Paper>
        </Container>
      </Box>

      {/* FLOATING ACTION BUTTONS (BOTTOM RIGHT) */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          alignItems: 'center',
        }}
      >
        {/* Toggle Arrow (Scroll Top / Scroll Bottom) */}
        <Tooltip title={isAtTop ? 'Scroll to Bottom' : 'Scroll to Top'} placement="left">
          <Fab
            size="small"
            color="default"
            onClick={handleScrollToggle}
            aria-label="Scroll Toggle"
            sx={{
              bgcolor: 'background.paper',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              '&:hover': { bgcolor: 'grey.200' },
            }}
          >
            {isAtTop ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          </Fab>
        </Tooltip>

        {/* WhatsApp Icon */}
        <Tooltip title="Chat on WhatsApp" placement="left">
          <Fab
            component="a"
            href={`https://wa.me/${TARGET_PHONE_NUMBER}?text=${encodeURIComponent(
              'Hi Noor Optical, I would like to inquire about your eyewear and services.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            sx={{
              bgcolor: '#25D366',
              color: '#ffffff',
              boxShadow: '0 4px 12px rgba(37,211,102,0.4)',
              '&:hover': { bgcolor: '#1DA851' },
            }}
          >
            <WhatsAppIcon />
          </Fab>
        </Tooltip>

        {/* Call Icon */}
        <Tooltip title="Call Us Now" placement="left">
          <Fab
            component="a"
            href={`tel:+${TARGET_PHONE_NUMBER}`}
            color="primary"
            aria-label="Call"
            sx={{
              boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            }}
          >
            <CallIcon />
          </Fab>
        </Tooltip>
      </Box>

      {/* User Notification Toast */}
      <Snackbar
        open={toast.open}
        autoHideDuration={6000}
        onClose={() => setToast((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert
          onClose={() => setToast((prev) => ({ ...prev, open: false }))}
          severity={toast.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
