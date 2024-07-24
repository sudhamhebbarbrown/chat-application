import React from 'react';
import MessageInput from './MessageInput';

function ChatWindow({ chat, sendMessage }) {
  return (
    <div className="chat-window">
      <div className="message-list">
        {chat.messages.map((msg, index) => (
          <div key={index}>
            <div className="user-message">{msg.user}</div>
            <div className="ai-message">{msg.ai}</div>
          </div>
        ))}
      </div>
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default ChatWindow;