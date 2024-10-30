import { Button, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container style={{ textAlign: 'center', marginTop: '15%' }}>
      {/* Hero Section */}
      <Typography variant="h4" gutterBottom>
        Welcome to the Church Booking System
      </Typography>
      <Typography variant="h6" gutterBottom>
        Easy and convenient appointment scheduling at your fingertips.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/bookings')}
      >
        Book an Appointment
      </Button>

      {/* Features Overview */}
      <Typography variant="h5" sx={{ marginTop: '40px' }} gutterBottom>
        Features
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Easy Booking</Typography>
              <Typography>
                Schedule your appointments with just a few clicks.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Appointment Reminders</Typography>
              <Typography>
                Receive notifications to never forget your appointment.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">User-Friendly Interface</Typography>
              <Typography>
                A clean design for seamless navigation and booking.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer */}
      <Typography variant="body2" sx={{ marginTop: '40px' }}>
        &copy; {new Date().getFullYear()} Church Booking System. All rights reserved.
      </Typography>
    </Container>
  );
};

export default HomePage;