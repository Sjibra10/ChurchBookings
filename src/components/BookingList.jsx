import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const BookingList = ({ bookings }) => { // Accept bookings as a prop
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
