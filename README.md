# Real-time Chat App

A real-time chat application that allows users to communicate instantly. This project demonstrates core concepts of real-time messaging, user authentication, and interactive UI design.

## Features

- Real-time messaging between users
- User authentication and registration
- Responsive and interactive user interface
- Support for multiple chat rooms or private conversations
- Message notifications

## Technologies Used

- Node.js
- Express.js (Backend)
- Socket.IO (Real-time communication)
- MongoDB (Database)
- React.js (Frontend)
- CSS/Bootstrap for styling

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ravik444/Real-time-chat-app.git
   cd Real-time-chat-app
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```

4. **Configure environment variables:**
   - Create a `.env` file in the `server` directory.
   - Add your MongoDB URI and any other required environment variables.

5. **Run the server:**
   ```bash
   cd ../server
   npm start
   ```

6. **Run the client:**
   ```bash
   cd ../client
   npm start
   ```

7. **Open your browser:**  
   Navigate to `http://localhost:3000` to use the chat app.

## Usage

- Register a new account or log in.
- Join or create chat rooms.
- Start messaging with others in real-time.

## Folder Structure

```
root/
├── client/        # Frontend React application
├── server/        # Backend Node.js/Express application
├── README.md
└── ...
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any bug fixes or new features.

## License

This project is licensed under the MIT License.

---

Feel free to update this README with more specific details about your project.
