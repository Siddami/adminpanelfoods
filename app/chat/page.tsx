"use client"

import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Search, Send, Phone, Video, MoreVertical } from 'lucide-react';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'John Doe',
      lastMessage: 'Thanks for the quick delivery!',
      time: '2 min ago',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Jane Smith',
      lastMessage: 'Can I modify my order?',
      time: '15 min ago',
      unread: 1,
      online: false
    },
    {
      id: 3,
      name: 'Mike Johnson',
      lastMessage: 'Food was amazing, will order again',
      time: '1 hour ago',
      unread: 0,
      online: true
    },
  ];

  const messages = [
    { id: 1, sender: 'customer', text: 'Hi, I placed an order 30 minutes ago', time: '2:30 PM' },
    { id: 2, sender: 'admin', text: 'Hello! Let me check your order status for you.', time: '2:31 PM' },
    { id: 3, sender: 'admin', text: 'Your order is being prepared and will be delivered in 15 minutes.', time: '2:32 PM' },
    { id: 4, sender: 'customer', text: 'Perfect! Thanks for the quick response.', time: '2:33 PM' },
    { id: 5, sender: 'customer', text: 'The food just arrived. Thanks for the quick delivery!', time: '2:45 PM' },
  ];

  return (
      <div className="h-[calc(100vh-8rem)]">
        <div className="flex h-full bg-white rounded-lg shadow-sm border-0 overflow-hidden">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
            </div>
            
            <div className="overflow-y-auto">
              {conversations.map((conversation, index) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(index)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                    selectedChat === index ? 'bg-teal-50 border-r-2 border-r-teal-600' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-teal-100 text-teal-600">
                          {conversation.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-gray-900 truncate">{conversation.name}</h4>
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                        {conversation.unread > 0 && (
                          <span className="bg-teal-600 text-white text-xs rounded-full px-2 py-1 ml-2">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-teal-100 text-teal-600">
                    {conversations[selectedChat].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-gray-900">{conversations[selectedChat].name}</h3>
                  <p className="text-sm text-gray-500">
                    {conversations[selectedChat].online ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      msg.sender === 'admin'
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${
                      msg.sender === 'admin' ? 'text-teal-100' : 'text-gray-500'
                    }`}>
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      setMessage('');
                    }
                  }}
                />
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Chat;
