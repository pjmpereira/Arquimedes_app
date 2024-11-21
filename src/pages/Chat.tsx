import React from 'react';

function Chat() {
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {/* Chat messages will go here */}
        <div className="p-4">
          <p className="text-gray-500 text-center">Start a new conversation</p>
        </div>
      </div>
      
      <div className="border-t p-4 bg-white">
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;