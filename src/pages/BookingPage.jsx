import { useState } from 'react';
import { TextField, Button, Container, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import BookingList from '../components/BookingList';
import axios from 'axios';

const BookingPage = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [customReason, setCustomReason] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingReason = reason === 'Other' ? customReason : reason; // Use custom reason if "Other" is selected
    try {
      await axios.post('http://localhost:5000/bookings', { name, date, time, reason: bookingReason });
      alert('Booking Successful!');
      setName('');
      setDate('');
      setTime('');
      setReason('');
      setCustomReason('');
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };

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
          slotProps={{ inputLabel: { shrink: true } }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          label="Time"
          type="time"
          fullWidth
          margin="normal"
          slotProps={{ inputLabel: { shrink: true } }}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="reason-label">Reason for Appointment</InputLabel>
          <Select
            labelId="reason-label"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
              if (e.target.value !== 'Other') {
                setCustomReason(''); // Clear custom reason when not "Other"
              }
            }}
          >
            <MenuItem value="">Select Reason</MenuItem>
            <MenuItem value="Consultation">Consultation</MenuItem>
            <MenuItem value="Visit Sick">Visit Sick</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        {reason === 'Other' && (
          <TextField
            label="Please specify"
            fullWidth
            margin="normal"
            value={customReason}
            onChange={(e) => setCustomReason(e.target.value)}
          />
        )}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: '10px' }}
        >
          Submit
        </Button>
      </form>
      <BookingList />
    </Container>
  );
};

export default BookingPage;
