import React, { useState } from 'react';
import ChatList from './components/ChatList';
import ChatWindow from './components/ChatWindow';
import './App.css';

function App() {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);

  const createNewChat = () => {
    const newChat = { id: Date.now(), messages: [] };
    setChats([...chats, newChat]);
    setActiveChat(newChat.id);
  };

  const sendMessage = async (message) => {
    // Here you would call your backend API
    const response = await fetch('your-api-endpoint', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    
    const updatedChats = chats.map(chat => 
      chat.id === activeChat 
        ? { ...chat, messages: [...chat.messages, { user: message, ai: data.response }] }
        : chat
    );
    setChats(updatedChats);
  };

  return (
    <div className="app">
      <ChatList 
        chats={chats} 
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        createNewChat={createNewChat}
      />
      {activeChat && (
        <ChatWindow 
          chat={chats.find(chat => chat.id === activeChat)}
          sendMessage={sendMessage}
        />
      )}
    </div>
  );
}

export default App;