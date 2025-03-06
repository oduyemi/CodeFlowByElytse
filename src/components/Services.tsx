import React from 'react';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import ViewComfyAltIcon from '@mui/icons-material/ViewComfyAlt';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import TerminalIcon from '@mui/icons-material/Terminal';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const services: Service[] = [
  {
    id: 1,
    icon: <BrandingWatermarkIcon />,
    title: 'Branding & Identity',
    description: 'Developing unique brand identities with a focus on long-term growth and recognition.',
    delay: 0,
  },
  {
    id: 2,
    icon: <ViewComfyAltIcon />,
    title: 'Web Design & Development',
    description: 'Crafting responsive and modern websites that provide exceptional user experiences.',
    delay: 100,
  },
  {
    id: 3,
    icon: <FullscreenExitIcon />,
    title: 'User Experience (UX) Design',
    description: 'Enhancing user satisfaction by improving the usability and accessibility of your website or app.',
    delay: 200,
  },
  {
    id: 4,
    icon: <TerminalIcon />,
    title: 'Software Development',
    description: 'Building robust and scalable software solutions tailored to your business needs.',
    delay: 0,
  },
  {
    id: 5,
    icon: <LensBlurIcon />,
    title: 'WordPress Solutions',
    description: 'Offering custom WordPress development to bring your website to life with ease.',
    delay: 100,
  },
  {
    id: 6,
    icon: <AppShortcutIcon />,
    title: 'App Development & Integration',
    description: 'Designing and developing custom applications integrated with third-party services.',
    delay: 200,
  },
];

const useStyles = makeStyles({
  root: {
    padding: '50px 0',
    color: '#000',
    textAlign: 'center',
  },
  card: {
    borderRadius: '12px', // Rounded corners for the card
    boxShadow: '0px 15px 35px rgba(0, 0, 0, 0.1)', // Soft shadows
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-10px)', // Hover effect to lift the card
      boxShadow: '0px 20px 50px rgba(0, 0, 0, 0.15)', // Elevated shadow on hover
    },
    color: '#333',
  },
  icon: {
    fontSize: '50px',
    color: '#667eea', // Main color for icons
    marginBottom: '20px',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      color: '#764ba2', // Hover color for icons
    },
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '15px',
  },
  description: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '20px',
    lineHeight: '1.6',
  },
    sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '30px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  sectionSubtitle: {
    fontSize: '1.125rem',
    color: '#ccc',
    marginBottom: '40px',
    fontWeight: '300',
  },
});

export const Services: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="services-section">
      <div className="container">
        <Typography variant="h2" className="heading-h2 divider">
          <span className="gsap-reveal">About Us</span>
        </Typography>
        <span className="gsap-reveal">
          <img src="/images/divider.png" alt="divider" width="76" />
        </span>        
        <Typography variant="h6" className={classes.sectionSubtitle}>
          Providing innovative and impactful solutions for your business. Explore our range of services.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card sx={{ backgroundColor: "#000", color: "#fff"}}>
                <CardContent>
                  <Box sx={{ color: "red"}}>{service.icon}</Box>
                  <Typography className="text-light">{service.title}</Typography>
                  <Typography className="text-light">{service.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
