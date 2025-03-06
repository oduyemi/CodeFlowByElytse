import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#222', color: '#fff', py: 4 }}>
      <div className="container">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6} textAlign="center">
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" component="a" href="#" sx={{ textDecoration: 'none', color: '#fff', fontWeight: 700 }}>
                CodeFlowByElytse<span>.</span>
              </Typography>
            </Box>

            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
              {/* Social Media Links (optional) */}
              {/* <Link href="#" color="inherit" sx={{ mr: 2 }}>Facebook</Link> */}
              {/* <Link href="#" color="inherit" sx={{ mr: 2 }}>Twitter</Link> */}
              {/* <Link href="#" color="inherit" sx={{ mr: 2 }}>Instagram</Link> */}
            </Typography>

            <Typography variant="body2" color="textSecondary">
              <small>&copy; 2025 <Link href="#" color="inherit">CodeFlowByElytse</Link>. All Rights Reserved.</small>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};
