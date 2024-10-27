import { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import axios from 'axios';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:5000/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h5" gutterBottom>
        Booking List
      </Typography>
      {bookings.length === 0 ? (
        <Typography>No bookings available.</Typography>
      ) : (
        <List>
          {bookings.map((booking) => (
            <div key={booking.id}>
              <ListItem>
                <ListItemText
                  primary={`Name: ${booking.name}`}
                  secondary={`Date: ${booking.date} | Time: ${booking.time}`}
                />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      )}
    </Container>
  );
};

export default BookingList;
