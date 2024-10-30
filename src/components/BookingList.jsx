import { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
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
    <List sx={{ marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Booking List
      </Typography>
      {bookings.length > 0 ? (
        bookings.map((booking) => (
          <div key={booking.id}>
            <ListItem>
              <ListItemText
                primary={`Name: ${booking.name}`}
                secondary={`Date: ${booking.date} | Time: ${booking.time} | Reason: ${booking.reason}`}
              />
            </ListItem>
            <Divider />
          </div>
        ))
      ) : (
        <Typography variant="body1">No bookings available.</Typography>
      )}
    </List>
  );
};

export default BookingList;
