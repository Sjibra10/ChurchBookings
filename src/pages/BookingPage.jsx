import { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import BookingList from '../components/BookingList';
import axios from 'axios';

const BookingPage = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [bookings, setBookings] = useState([]); // State for bookings

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/bookings', { name, date, time });
      alert('Booking Successful!');
      setName('');
      setDate('');
      setTime('');
      fetchBookings(); // Fetch updated bookings
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/bookings');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  // Fetch bookings when the component mounts
  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <Container sx={{ marginTop: '50px' }}>
      <Typography variant="h5" gutterBottom>
        Make an Appointment
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Date"
          type="date"
          fullWidth
          margin="normal"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          label="Time"
          type="time"
          fullWidth
          margin="normal"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: '10px' }}
        >
          Submit
        </Button>
      </form>
      <BookingList bookings={bookings} /> {/* Pass bookings as a prop */}
    </Container>
  );
};

export default BookingPage;
