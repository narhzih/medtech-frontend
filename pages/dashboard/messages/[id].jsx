import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import DashboardLayout from '@/components/component/DashboardLayout';
import ChatHeader from '@/components/component/ChatHeader';
import MessageBubble from '@/components/component/MessageBubble';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const chatUsers = {
  1: { name: 'Bose Akinmuyiwa', avatar: '' },
  2: { name: 'Sarah Akinyemi', avatar: '' },
  3: { name: 'Esther Johnson', avatar: '' },
};

export default function ChatPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  const user = chatUsers[id];
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    { id: 1, sender: user.name, text: 'Hello!' },
    { id: 2, sender: 'Me', text: 'Hi there!' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, sender: 'Me', text: newMessage },
    ]);

    setNewMessage('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[85vh] bg-gray-50 rounded-xl overflow-hidden shadow-lg">
        <ChatHeader
          name={user.name}
          avatar={user.avatar}
          onBack={() => router.push('/dashboard/messages')}
        />

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <MessageBubble
              key={msg.id}
              text={msg.text}
              isMine={msg.sender === 'Me'}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t bg-white flex gap-2">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
