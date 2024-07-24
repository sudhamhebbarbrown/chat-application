import React from 'react';

function ChatList({ chats, activeChat, setActiveChat, createNewChat }) {
  return (
    <div className="chat-list">
      <button onClick={createNewChat}>New Chat</button>
      {chats.map(chat => (
        <div 
          key={chat.id} 
          className={`chat-item ${chat.id === activeChat ? 'active' : ''}`}
          onClick={() => setActiveChat(chat.id)}
        >
          Chat {chat.id}
        </div>
      ))}
    </div>
  );
}

export default ChatList;