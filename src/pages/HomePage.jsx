import { Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Church Booking System
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/bookings')}
      >
        Book an Appointment
      </Button>
    </Container>
  );
};

export default HomePage;
