import React, { useState } from 'react';

const messages = [
  { user: 'calumplayz_', text: 'LLJ!', color: 'text-green-500' },
  { user: 'listless_134', text: "that's a new gen goat", color: 'text-purple-500' },
  { user: 'sylent_wulf', text: 'chat illiterate asf', color: 'text-red-500' },
  { user: 'ashleyrivera09047383', text: 'FIEN', color: 'text-red-500' },
  { user: '2AMscopes', text: 'play Ken Carson', color: 'text-yellow-500' },
  { user: 'bloodmemberjohnny', text: 'chat has an average age of 15', color: 'text-red-500' },
  // Add more messages as needed...
];

const StreamChat = () => {
  const [chatMessages, setChatMessages] = useState(messages);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { user: 'You', text: message, color: 'text-blue-500' }]);
      setMessage('');
    }
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col h-full max-h-96 w-80">
      {/* بخش عنوان */}
      <div className="border-b border-gray-300 pb-2 mb-4">
        <h2 className="text-lg font-bold">STREAM CHAT</h2>
      </div>

      {/* بخش نمایش پیام‌های چت */}
      <div className="flex-1 overflow-y-scroll mb-4">
        {chatMessages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.color}`}>
            <span className="font-bold">{msg.user}:</span> {msg.text}
          </div>
        ))}
      </div>

      {/* بخش ارسال پیام */}
      <div className="border-t border-gray-300 pt-2 flex items-center">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-full px-3 py-1 text-sm"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="bg-purple-600 text-white font-bold px-4 py-1 ml-2 rounded-full"
        >
          Chat
        </button>
      </div>
    </div>
  );
};

export default StreamChat;
