import React, { useState } from 'react';
// import Layout from '@/layout/Layout';
import Sidebar from '@/components/Sidebar';
import SearchBar from '@/components/SearchBar';
import {ImageUrl} from '@/enum/enums';

interface Message {
  id: number;
  content: string;
  sender: 'user' | 'bot';
}

const ModelSidebar: React.FC = ()=>{
  return(
    <div className="w-[15vw] bg-black h-screen flex flex-col">
      <div className="flex w-full items-center justify-center h-16 border-b border-gray-600">
        <SearchBar className='w-[80%] mx-auto'/>
      </div>
      <div className="p-4 flex w-full gap-2">
        <img src={ImageUrl.Kitten} alt="kitten" className="w-14 h-14 rounded-md mx-auto" />
        <h1 className="text-white mt-1 w-[75%]">
        <p className='text-ellipsis truncate'>
        GUI GPT API prompt generator
      </p>
      <p className='text-ellipsis truncate text-sm font-light text-gray-400'>
        GUI GPT API prompt generator
      </p>
        </h1>
      </div>
    </div>
  );

}

const Chat: React.FC = () => {
  const [inputMessage, setInputMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, content: 'Hello, how can I help you?', sender: 'bot' },
    { id: 2, content: 'Hi! How can I assist you today?', sender: 'user' },
  ]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      content: inputMessage.trim(),
      sender: 'user',
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');
  };

  return (
    <div className='flex'>
    <div className='w-[7vw]'>
    <Sidebar />
    </div>
    <div className='w-[93vw] flex'>
    <ModelSidebar />
      <div className="container mx-auto max-w-lg p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {message.content}
          </div>
        ))}
        <div className="flex mt-4">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1 rounded-l-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Chat;
