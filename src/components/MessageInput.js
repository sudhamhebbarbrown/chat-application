import React, { useState } from 'react';

function MessageInput({ sendMessage }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type a message..."
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default MessageInput;