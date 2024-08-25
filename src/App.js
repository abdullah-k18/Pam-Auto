import React from 'react';
import { Box, Typography, Button, Container, Grid, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton edge="start" color="inherit" aria-label="logo">
            <img 
                src="https://www.pamhq.com/_next/image?url=%2Fimages%2Fauto-logo.png&w=96&q=75" 
                alt="Logo" 
                style={{ height: 40 }} 
            />
            </IconButton>
            <div style={{ flexGrow: 1 }} />
            <div>
            <Button color="inherit" href="#home">
                Home
            </Button>
            <Button color="inherit" href="#features">
                Features
            </Button>
            </div>
        </Toolbar>
        </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, backgroundColor: '#f5f5f5' }}>
        <Box
            id="home"
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to AI Car Dealer Assistant
          </Typography>
          <Typography variant="h6" color="textSecondary" paragraph>
            Revolutionize your car dealership experience with our advanced AI assistant designed to streamline customer interactions and boost your sales.
          </Typography>
          <Button variant="contained" color="primary" size="large" sx={{ mt: 3 }} onClick={() => navigate("/assistant")}>
            Get Started
          </Button>
        </Box>
        <Box 
        id="features" 
        sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            p: 4,
          }}
          >
          <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
            Key Features
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Typography variant="h5" gutterBottom>
                  Voice-Enabled AI
                </Typography>
                <Typography color="textSecondary">
                  Engage customers with our intelligent voice assistant that can handle inquiries and guide users through the buying process.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 8, p: 4, backgroundColor: '#333', color: '#fff', borderRadius: 2 }} id="cta">
          <Stack direction="column" alignItems="center" spacing={2}>
            <Typography variant="h4" align="center">
              Ready to Transform Your Dealership?
            </Typography>
            <Typography variant="body1" align="center">
              Sign up now and start leveraging the power of AI in your dealership today.
            </Typography>
            <Button variant="contained" size="large" color="secondary">
              Join Now
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default App;
