import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css'; // Make sure this is here!

const socket = io('http://localhost:3001');

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off('receive_message');
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newMessage = { text: message, sender: socket.id };
    socket.emit('send_message', newMessage);
    setMessage('');
  };

  return (
    <div className="container">
      <h2 className="title">🌌 Gemini Chat</h2>
      <div className="chat-box">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`message-bubble ${
              msg.sender === socket.id ? 'self' : 'other'
            }`}
          >
            <strong>{msg.sender === socket.id ? 'You' : 'User'}</strong>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <form className="input-area" onSubmit={sendMessage}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">➤</button>
      </form>
    </div>
  );
}

export default App;
