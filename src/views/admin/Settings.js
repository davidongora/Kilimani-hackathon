import React, { useState } from "react";
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

const CommunityForum = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "John Doe", content: "Hello, there is this bar making noise next to my place!something should be done" },
    { id: 2, user: "Jane Smith", content: "i talked to the persona responsible...i will do a follow up?" }
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, user: "Anonymous", content: newMessage }]);
      setNewMessage(""); // Clear input field
    }
  };

  return (
    <div className="flex flex-col h-full p-4 mt-32 mb-24">
      {/* Display Messages */}
      <div className="flex-1 overflow-y-auto p-2 bg-gray-100 rounded-lg border  border-gray-300">
        {messages.map(message => (
          <div key={message.id} className="flex items-start mb-4">
            <div className="mr-3">
              <ChatBubbleLeftIcon className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="font-semibold">{message.user}</p>
              <p className="text-gray-700">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Message */}
      <div className="mt-12 flex max-h-full mb-24">
      <div className="mt-24 mb-64"></div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border border-gray-300 p-2 rounded-l-lg"
          placeholder="Type your message here..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CommunityForum;
