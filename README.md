📖 Church Booking System
A web-based booking system designed to streamline church activities. This system allows users to book appointments for various purposes such as consultations, personal visits, or events. It ensures smooth communication between members and administration by providing an intuitive booking interface.

🚀 Features
Appointment Booking: Users can book appointments for various reasons.
Custom Input for Reasons: If the reason isn't listed, users can provide their own text.
Manage Bookings: Users and admins can view, update, or cancel appointments.
Responsive Design: Works seamlessly on all devices.
Date & Time Selection: Simple UI for selecting appointment schedules.
🛠️ Tech Stack
Frontend: React, Vite, Material-UI (MUI)
Backend: Node.js, Express
Database: SQLite
Routing: React Router
📂 Folder Structure
plaintext
Copy code
church-booking/
├── backend/
│   └── server.js        # Node.js server handling API requests
├── src/
│   ├── pages/
│   │   └── BookingPage.js  # Booking form and management page
│   └── App.js             # Main React app component
├── public/
│   └── index.html         # HTML entry point
├── README.md              # Project documentation
└── package.json           # Project dependencies
⚙️ Installation
Clone the Repository

bash
Copy code
git clone https://github.com/Sjibra10/ChurchBookings.git
cd church-booking
Install Dependencies
Frontend:

bash
Copy code
npm install
Backend:

bash
Copy code
cd backend
npm install
Start the Application
Backend:

bash
Copy code
node server.js
Frontend:

bash
Copy code
npm run dev
Access the Application
Visit http://localhost:3000 in your browser to start using the system.

📋 Usage
Home Page
Users are welcomed with a Home Page with an option to book an appointment.

Button: “Book an Appointment” directs users to the Bookings Page.
Booking Page

Select Date and Time for the booking.
Choose a reason: Consultation, Personal Visit, Event, etc.
If “Other” is selected, users can provide their own reason.
View & Manage Bookings

Users can see their booked appointments.
Admins can view and manage all appointments (edit or cancel).
📸 Screenshots
Home Page

Booking Page

🧩 API Endpoints
Endpoint	Method	Description
/api/bookings	GET	Fetch all bookings
/api/bookings	POST	Create a new booking
/api/bookings/:id	PUT	Update a specific booking
/api/bookings/:id	DELETE	Delete a specific booking
👨‍💻 Contributing
Contributions are welcome!

Fork the Repository
Create a New Branch
bash
Copy code
git checkout -b feature/your-feature
Make Changes and Commit
bash
Copy code
git commit -m "Add new feature"
Push to Your Branch
bash
Copy code
git push origin feature/your-feature
Open a Pull Request
❓ FAQs
How do I add a new reason for a booking?

If none of the predefined reasons match, select Other and provide your reason.
Can I cancel or modify my booking?

Yes, bookings can be updated or canceled from the Bookings Page.
🔒 License
This project is licensed under the MIT License. See the LICENSE file for details.

🤝 Acknowledgments
Material-UI (MUI) for React components
React Router for navigation
SQLite for lightweight database management
📞 Contact
Project Owner: Buhle
GitHub: Sjibra10

